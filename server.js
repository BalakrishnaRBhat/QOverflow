// import packages and config
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

//import routes
const authRoute = require('./routes/authRoute');
const queryRoute = require('./routes/queryRoute');
 

// server app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
require('./config/passport')(passport);

// set static directory
app.use(express.static(path.join(__dirname, 'public')));

// route middlewares
app.get('/', (req, res) => {
    res.send("The server is running!");
});
app.use('/api/user', authRoute);
app.use('/api/query', passport.authenticate('jwt', {session: false}), queryRoute);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// database connection
mongoose.connect('mongodb://localhost:27017/qoverflow', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Database");
    }).catch(err => {
        console.log("Could not connect to Database");
});


// set PORT
const PORT = process.env.PORT || 8000;
// run server
app.listen(PORT, console.log("Server running on port : ", PORT));

