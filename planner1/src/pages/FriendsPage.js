import './FriendsPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const FriendsPage = () => {

    return(
        <div className='content'>
            <Link to={"/friends/add-friend"}>
                <button 
                    className='addTaskButton'>
                    {<FaIcons.FaUserPlus />} Add Friend
                </button>
            </Link>

            <div className='friendBox'>

            </div>
            
        </div>
    )
}

export default FriendsPage;
