import './MessagesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";
import ExistingConversation from '../components/ExistingConversation.js';
import ConversationMessages from '../components/ConversationMessages.js';
import axios from 'axios';

const MessagesPage = () => {

    const [usersRepo, setUsersRepo] = useState([]);
    const [messagesRepo, setMessagesRepo] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState('');
    const [conversations, setConversations] = useState([]);
    const [runCount, setRunCount] = useState(0);

    const getRepo = () => {
        
        axios.get('http://localhost:4000/app/users/get')
            .then((response) => {
                const tempUsersRepo = response.data;
                console.log(tempUsersRepo);
                setUsersRepo(tempUsersRepo);
            });

        axios.get('http://localhost:4000/app/messages/get')
            .then((response) => {
                const tempMessagesRepo = response.data;
                console.log(tempMessagesRepo);
                setMessagesRepo(tempMessagesRepo);
            });
       
        }

    const selectConversation = (email) => {

    }

    const setConversationsState = () => {
        var loginEmail = localStorage.getItem('loggedInEmail');
        console.log(localStorage.getItem('loggedInEmail'));
        console.log(messagesRepo);
        var conversationsArrayTemp = [];
        
        for (let i = 0; i < messagesRepo.length; i++) {
            if (messagesRepo[i].sender === loginEmail || messagesRepo[i].receiver === loginEmail) {
                var conversationToAdd;
                if (messagesRepo[i].sender === loginEmail)
                {
                    conversationToAdd = usersRepo.filter((user) => user.email === messagesRepo[i].receiver);
                }
                else {
                    conversationToAdd = usersRepo.filter((user) => user.email === messagesRepo[i].sender);
                }

                if (conversationToAdd.length > 0) {
                    const newConversation = {
                        name: (conversationToAdd[0].firstName + " " + conversationToAdd[0].lastName),
                        email: conversationToAdd[0].email
                    };
                    
                    var checkIfExists = [];
                    checkIfExists = conversationsArrayTemp.filter((conversation) => conversation.email === newConversation.email);
                    if (checkIfExists.length === 0) {
                        conversationsArrayTemp.push(newConversation);
                    }
                }
            }
        }
        console.log(conversationsArrayTemp);
        setConversations(conversationsArrayTemp);
    }

    useEffect(() => {
        
        if (conversations.length === 0 && runCount < 5 && localStorage.getItem('loggedInEmail') !== '') {
            getRepo();
            setConversationsState();
            setRunCount(runCount + 1);
        }
        
    }, [messagesRepo]);

    return(
        <div className='content'>
            <h1 className='messagesHeader'>To start a conversation, use the "Send Message" button on the Friends page.</h1>
            <div className='messagesContent'>
                <div className='existingMessagesContent'>
                    {conversations.map((conversation) => (
                        <ExistingConversation
                            conversationName={conversation.name}
                            conversationEmail={conversation.email}
                            handleSelectConversation={selectConversation}
                        />
                    ))}
                </div>

                <div className='messageScreen'>
                    <div className='messagesContainer'>
                        <p className='messageTextRight'>joe joe joe joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <p className='messageTextLeft'>joe joe joe joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <p className='messageTextRight'>joe joe joe joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <p className='messageTextLeft'>joe joe joe joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <p className='messageTextRight'>joe joe joe joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <p className='messageTextRight'>joe joe joe joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>

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
