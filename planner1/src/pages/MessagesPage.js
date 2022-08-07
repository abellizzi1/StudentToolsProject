import './MessagesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const MessagesPage = () => {

    return(
        <div className='content'>
            <h1 className='messagesHeader'>To start a conversation, use the "Send Message" button on the Friends page.</h1>
            <div className='messagesContent'>
                <div className='existingMessagesContent'>
                    <button className='existingMessageButton'>Angelo Baaaaaaaaaaellizzi</button>
                    <button className='existingMessageButton'>Joe mAma</button>
                    <button className='existingMessageButton'>Angelo Bellizzi</button>
                    <button className='existingMessageButton'>Joe mAma</button>
                    <button className='existingMessageButton'>Angelo Bellizzi</button>
                    <button className='existingMessageButton'>Joe mAma</button>
                    <button className='existingMessageButton'>Angelo Bellizzi</button>
                    <button className='existingMessageButton'>Joe mAma</button>
                    <button className='existingMessageButton'>Angelo Bellizzi</button>
                    <button className='existingMessageButton'>Joe mAma</button>
                    <button className='existingMessageButton'>Angelo Bellizzi</button>
                    <button className='existingMessageButton'>Joe mAma</button>

                </div>

                <div className='messageScreen'>
                    <input className='messagesInput' 
                    type='text' id='emailInput' name='emailInput' 
                    placeholder="Enter message here" />
                    <button className='sendMessageButtonMessages'>Send Message</button>
                </div>
            </div>
            
        </div>
    )
}

export default MessagesPage;
