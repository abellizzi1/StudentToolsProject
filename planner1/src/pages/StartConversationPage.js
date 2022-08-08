import './MessagesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const StartConversationPage = () => {

    const navigate = useNavigate();

    const postMessage = () => {
        var errorMessage = document.getElementById('msg');
        var message = document.getElementById('startConversationInput').value;

        if (message.length === 0) {
            errorMessage.textContent = 'Cannot send a blank message.';
        }
        else {
            const messageToSend = {
                sender:localStorage.getItem('loggedInEmail'),
                receiver:localStorage.getItem('startMsgToEmail'),
                text:message
            }
    
            axios.post('http://localhost:4000/app/messages/create', messageToSend)
                .then(response => console.log(response.data));
    
            navigate('/messages');
        }
    }

    return(
        <div className='content'>
            <div className='messagesContent'>
                <h1 className='startConversationHeader'>Message to {localStorage.getItem('startMsgToName')}</h1>
                <input className='startConversationInput' 
                type='text' id='startConversationInput' name='startConversationInput' 
                placeholder="Enter message here" />

                <button onClick={() => { postMessage() } } className='sendButtonStartConversation'>Send Message</button>
                <p className='errorMessageStartConversation' id='msg'></p>
            </div>
        </div>
    )
}

export default StartConversationPage;
