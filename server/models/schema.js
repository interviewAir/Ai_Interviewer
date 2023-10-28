const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the conversation Schema

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    sender: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const questionSchema = new mongoose.Schema({
   interviewer: [messageSchema],
   candidate: [messageSchema]
});

const interviewSchema = new mongoose.Schema({
    questions: [questionSchema],
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;


