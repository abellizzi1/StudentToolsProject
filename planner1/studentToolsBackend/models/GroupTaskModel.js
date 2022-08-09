const mongoose = require('mongoose');

const groupTaskTemplate = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    group:{
        type:[String],
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('groupTasks', groupTaskTemplate)