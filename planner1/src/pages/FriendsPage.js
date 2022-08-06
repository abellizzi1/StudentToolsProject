import './FriendsPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const FriendsPage = () => {

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

    return(
        <div className='content'>
            <Link to={"/friends/add-friend"}>
                <button 
                    className='addTaskButton'>
                    {<FaIcons.FaUserPlus />} Add Friend
                </button>
            </Link>

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
