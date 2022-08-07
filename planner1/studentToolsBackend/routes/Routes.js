const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const friendsCopy = require('../models/FriendsModel');
const messageCopy = require('../models/MessageModel');

router.post('/users/create', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.route('/users/get').get((request, response) =>{
    signUpTemplateCopy.find()
        .then(foundUsers => response.json(foundUsers))
})

//////////////////////////////////////////////////////////////

router.post('/friends/create', (request, response) =>{
    const addedFriend = new friendsCopy({
        sender:request.body.sender,
        receiver:request.body.receiver
    })
    addedFriend.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.route('/friends/get').get((request, response) =>{
    friendsCopy.find()
        .then(foundFriends => response.json(foundFriends))
})

router.route('/friends/remove/:id').delete((request, response) =>{
    friendsCopy.findByIdAndDelete(request.params.id)
        .then(foundFriend => response.json(foundFriend))
})

//////////////////////////////////////////////////////////////

router.post('/messages/create', (request, response) =>{
    const sentMessage = new messageCopy({
        sender:request.body.sender,
        receiver:request.body.receiver,
        text:request.body.text
    })
    sentMessage.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.route('/messages/get').get((request, response) =>{
    messageCopy.find()
        .then(foundMessages => response.json(foundMessages))
})

module.exports = router;