const mongoose = require('mongoose');

const groupTaskPostTemplate = new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    groupTaskId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('groupTaskPosts', groupTaskPostTemplate)