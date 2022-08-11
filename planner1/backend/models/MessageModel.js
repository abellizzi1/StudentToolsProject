const mongoose = require('mongoose');

const messageTemplate = new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String, 
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('messages', messageTemplate)