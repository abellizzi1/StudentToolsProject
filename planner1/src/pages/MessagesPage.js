import './MessagesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const MessagesPage = () => {

    return(
        <div className='content'>
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

            </div>
            </div>
            
        </div>
    )
}

export default MessagesPage;
