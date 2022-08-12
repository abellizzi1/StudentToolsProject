const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const friendsCopy = require('../models/FriendsModel');
const messageCopy = require('../models/MessageModel');
const groupTaskCopy = require('../models/GroupTaskModel');
const groupTaskPostCopy = require('../models/GroupTaskPostModel');

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
        .catch(error =>{
            response.json(error)
        })
})

router.route('/users/put/:id').put((request, response) =>{
    signUpTemplateCopy.findByIdAndUpdate(request.params.id, request.body)
        .then(foundUser => response.json(foundUser))
        .catch(error =>{
            response.json(error)
        })
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

//////////////////////////////////////////////////////////////

router.post('/groupTasks/create', (request, response) =>{
    const grouptask = new groupTaskCopy({
        title:request.body.title,
        description:request.body.description,
        group:request.body.group,
        deadline:request.body.deadline
    })
    grouptask.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.route('/groupTasks/get').get((request, response) =>{
    groupTaskCopy.find()
        .then(foundGroupTasks => response.json(foundGroupTasks))
})

router.route('/groupTasks/put/:id').put((request, response) =>{
    groupTaskCopy.findByIdAndUpdate(request.params.id, request.body)
        .then(foundGroupTask => response.json(foundGroupTask))
})

//////////////////////////////////////////////////////////////

router.post('/groupTaskPosts/create', (request, response) =>{
    const grouptaskpost = new groupTaskPostCopy({
        sender:request.body.sender,
        text:request.body.text,
        groupTaskId:request.body.groupTaskId
    })
    grouptaskpost.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.route('/groupTaskPosts/get').get((request, response) =>{
    groupTaskPostCopy.find()
        .then(foundGroupTaskPosts => response.json(foundGroupTaskPosts))
})

module.exports = router;