import './FriendsPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";
import axios from 'axios'

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

    const [repo, setRepo] = useState([]);

    const getRepo = () => {
        axios.get('http://localhost:4000/app/users/get')
            .then((response) => {
                const myRepo = response.data;
                setRepo(myRepo);
            });
        }

    useEffect(() => {
        getRepo();
    }, []);

    const addFriend = () => {
        var message = document.getElementById('msg');
        var tempEmail = document.getElementById('emailInput').value;
        var existingAcc = repo.filter((user) => user.email === tempEmail);

        if (!isLoggedIn) {
            message.textContent = 'Not logged in!';
        }
        else if (existingAcc.length === 0)
        {
            message.textContent = 'Account not found.';
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
    }

    return(
        <div className='content'>
            <input className='addFriendInput' 
            type='text' id='emailInput' name='emailInput' 
            placeholder="Enter friend's email here to add them" />
            <button 
                className='addFriendButton'
                onClick={addFriend}>
                {<FaIcons.FaUserPlus />} Add Friend
            </button>
            <p className='errorMessageFriends' id='msg'></p>

            <div className='friendBox'>
                <h3 id='friendName' className='friendBoxInfo'>Name:</h3>
                <h3 id='friendEmail' className='friendBoxInfo'>Email:</h3>
                <Link to={"/friends/messages"}>
                    <button className='sendMessageButton'>Send Message</button>
                </Link>
                <button className='friendRemoveButton'>Remove</button>
            </div>
            
        </div>
    )
}

export default FriendsPage;
