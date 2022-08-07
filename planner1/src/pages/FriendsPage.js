import './FriendsPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";
import axios from 'axios'
import Friend from '../components/Friend.js';

const FriendsPage = ({ isLoggedIn }) => {
    /*
    In the backend, create a friends db.
    In the friends db, have two emails and a date.
    One email should be Sender, and one should be Receiver.
    For example, user1 and user2:

    Sender: user1
    Receiver: user2

    Sender: user2
    Receiver: user1

    Since they have both added each other, they will be listed on both friends pages.
    */

    const [usersRepo, setUsersRepo] = useState([]);
    const [friendsRepo, setFriendsRepo] = useState([]);
    const [friends, setFriends] = useState([]);
    const [runCount, setRunCount] = useState(0);

    const getRepo = () => {
        
        axios.get('http://localhost:4000/app/users/get')
            .then((response) => {
                const tempUsersRepo = response.data;
                console.log(tempUsersRepo);
                setUsersRepo(tempUsersRepo);
            });

        axios.get('http://localhost:4000/app/friends/get')
            .then((response) => {
                const tempFriendsRepo = response.data;
                console.log(tempFriendsRepo);
                setFriendsRepo(tempFriendsRepo);
            });
       
        }

        

    const addFriend = () => {
        var message = document.getElementById('msg');
        var tempEmail = document.getElementById('emailInput').value;
        var existingAcc = usersRepo.filter((user) => user.email === tempEmail);
        var existingFriend = friendsRepo.filter((friend) => (friend.sender === localStorage.getItem('loggedInEmail') && friend.receiver === tempEmail));

        if (!isLoggedIn) {
            message.textContent = 'Not logged in.';
        }
        else if (existingAcc.length === 0) {
            message.textContent = 'Account not found.';
        }
        else if (existingFriend.length > 0) {
            message.textContent = 'User already added.';
        }
        else {
            const newFriend = {
                sender:localStorage.getItem('loggedInEmail'),
                receiver:tempEmail
            }
    
            axios.post('http://localhost:4000/app/friends/create', newFriend)
                .then(response => console.log(response.data));

            message.textContent = 'Friend added.';
        }

        getRepo();
        setFriendsState();
        setRunCount(0);
        window.location.reload();
    }

    const removeFriend = (receiverEmail) => {
        var existingFriend = friendsRepo.filter((friend) => (friend.sender === localStorage.getItem('loggedInEmail') && friend.receiver === receiverEmail));

        axios.delete("http://localhost:4000/app/friends/remove/" + existingFriend[0]._id)
            .then(response => console.log(response.data));

        getRepo();
        setFriendsState();
        setRunCount(0);
        window.location.reload();

        console.log(existingFriend[0]._id);
    }

    const setFriendsState = () => {
        var loginEmail = localStorage.getItem('loggedInEmail');
        console.log(localStorage.getItem('loggedInEmail'));
        console.log(friendsRepo);
        var friendsArrayTemp = [];
        for (let i = 0; i < friendsRepo.length-1; i++) {
            for (let j = i+1; j < friendsRepo.length; j++) {
                if (friendsRepo[i].receiver === friendsRepo[j].sender 
                && friendsRepo[i].sender === friendsRepo[j].receiver
                && (friendsRepo[i].sender === loginEmail || friendsRepo[j].sender === loginEmail)) {
                    console.log('friend found');
                    var friendToAdd;
                    if (friendsRepo[i].sender === loginEmail)
                    {
                        friendToAdd = usersRepo.filter((user) => user.email === friendsRepo[i].receiver);
                    }
                    else {
                        friendToAdd = usersRepo.filter((user) => user.email === friendsRepo[i].sender);
                    }

                    if (friendToAdd.length > 0) {
                        const newFriend = {
                            name: (friendToAdd[0].firstName + " " + friendToAdd[0].lastName),
                            email: friendToAdd[0].email
                        };
                        friendsArrayTemp.push(newFriend);
                    }
                }
            }
        }
        setFriends(friendsArrayTemp);
    }

    useEffect(() => {
        
        if (friends.length === 0 && runCount < 5 && localStorage.getItem('loggedInEmail') !== '') {
            getRepo();
            setFriendsState();
            setRunCount(runCount + 1);
        }
        
    }, [friendsRepo]);

    return(
        <div className='content'>
            <input className='addFriendInput' 
            type='text' id='emailInput' name='emailInput' 
            placeholder="Enter friend's email here to add them" />
            <button 
                className='addFriendButton'
                onClick={() => {addFriend()} }>
                {<FaIcons.FaUserPlus />} Add Friend
            </button>
            <p className='errorMessageFriends' id='msg'></p>

            {friends.map((friend) => (
                <Friend
                    friendName={friend.name}
                    friendEmail={friend.email}
                    handleRemoveFriend={removeFriend}
                />
            ))}
            
        </div>
    )
}

export default FriendsPage;
