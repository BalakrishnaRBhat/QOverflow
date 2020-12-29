const express = require('express');
const router = express.Router();
const Query = require('../models/Query');
const Answer = require('../models/Answer');
const { route } = require('./authRoute');
const { db } = require('../models/Query');

// post a query
router.post('/createPost', async (req, res) => {
    const query = new Query({
        author: req.body.author,
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags
    });
    try {
        const savedQuery = await query.save();
        res.json({message: "Query Submitted Successfully", success: true});
    } catch (error) {
        res.json({message: error, success: false});
        
    }
});

// get all queries 
router.get('/', async (req, res) => {
    try {
        const queries = await Query.find();
        res.json(queries);
    } catch (error) {
        res.json({message: error});
    }
});

// get a specific query
router.get('/:queryId', async (req, res) => {
    try {
        const query = await Query.findById(req.params.queryId).populate("answers");
        res.json(query);
    }catch(error) {
        res.json({message: error});
    }
});

// get all queries of a specific user
router.get('/user/:userId', async (req, res) => {
    try {
        const userQueries = await Query.find({author: req.params.userId});
        res.json(userQueries);
    } catch (error) {
        res.json({message: error});
    }
});

// get a specific query of a specific user
router.get('/user/:userId/:postId', async (req, res) => {
    try {
        const userQuery = await Query.findOne({author: req.params.userId, _id: req.params.postId}).populate("answers");
        res.json(userQuery);
    } catch (error) {
        res.json({message: error});
    }
});

// post a answer to a specific query
router.post('/:queryId', async (req, res) => {
   await Answer.create(req.body).then((dbAnswer) => {
       return Query.findOneAndUpdate({_id: req.params.queryId}, {$push: {answers: dbAnswer}}, {new: true, useFindAndModify: false}).then(() => {
           res.json({message: "Answer Submitted Successfully", success: true});
       }).catch((error) => {
           res.json({message: error, success: false});
       });
   });
   // update no_of_answers for the query
   await Query.findOneAndUpdate({_id: req.params.queryId}, {$inc: {no_of_answers: 1}}, {new: true, useFindAndModify: false});
});

// upvote a answer for a query
router.patch('/upvote/:answerId', async (req, res) => {
    try {
        await Answer.findOneAndUpdate({_id: req.params.answerId}, {$inc: {vote: 1}}, {new: true, useFindAndModify: false});
        res.json({success: true})
    } catch (error) {
        console.log(error);    
    }
});

// downvote a answer for a query
router.patch('/downvote/:answerId', async (req, res) => {
    try {
        await Answer.findOneAndUpdate({_id: req.params.answerId}, {$inc: {vote: -1}}, {new: true, useFindAndModify: false});
        res.json({success: true})
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;