const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const friendsCopy = require('../models/FriendsModel');

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
    const friendToRemove = new friendsCopy({
        sender:request.body.sender,
        receiver:request.body.receiver
    })
    friendsCopy.findByIdAndDelete(request.params.id)
        .then(foundFriend => response.json(foundFriend))
})

module.exports = router;