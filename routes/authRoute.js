const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerValidator, loginValidator } = require('../validators/authValidator');
const passport = require('passport');
const keys = require('../config/keys').secret;


// register route
router.post('/register', async (req, res) => {
    
    // validate data
    const {error} = registerValidator(req.body);
    if(error) return res.status(400).json({message: error.details[0].message, success: false});
    
    // check if similar email exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).json({message: "Email already exists", success: false});
    
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.json({message: "Registration Successfull", success: true});
    } catch (error) {
        res.status(400).json({message: error, success: false});
    }
});

// login route
router.post('/login', async (req, res) => {

    // validate data
    const {error} = loginValidator(req.body);
    if(error) return res.status(400).json({message: error.details[0].message, success: false});

    // check if email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({message: "Email does not exists", success: false});

    // validate password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).json({message: "Invalid Password", success: false});

    // create and assign token
    const token = jwt.sign({_id: user._id}, keys, {expiresIn: "30m"});
    res.json({message: "Login Successfull", success: true, token: `Bearer ${token}`, user: user});
});

// profile route
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    try {
        return res.json({
            user: req.user
        });
    } catch (error) {
        console.log(error);
    }
});

// route to get id of user
router.get('/getUserName', passport.authenticate('jwt', {session: false}), (req, res) => {
    return res.json({
        name: req.user.name
    });
})

module.exports = router;