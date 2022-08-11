const mongoose = require('mongoose');

const friendsTemplate = new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String, 
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('friends', friendsTemplate)