import './MessagesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const StartConversationPage = () => {

    return(
        <div className='content'>
            <div className='messagesContent'>
                <h1 className='startConversationHeader'>Message to {localStorage.getItem('startMsgTo')}</h1>
                <input className='startConversationInput' 
                type='text' id='emailInput' name='emailInput' 
                placeholder="Enter message here" />
                <button className='sendButtonStartConversation'>Send Message</button>
            </div>
        </div>
    )
}

export default StartConversationPage;
