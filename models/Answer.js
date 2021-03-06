const mongoose = require('mongoose');

// Answer Schema
const answerSchema = mongoose.Schema({
    ans_user: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    vote: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Answer', answerSchema);