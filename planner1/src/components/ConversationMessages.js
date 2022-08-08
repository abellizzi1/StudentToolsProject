import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';
import {Link} from "react-router-dom";
import '../pages/MessagesPage.css';

const ConversationMessages = ({ receiver, text }) => {
	
    /*
    Returns each conversation message based on the selected ExistingConversation.
    They are returned in the order of date/time the message was created.
    */

    return (
		<div>
			  <p className={`messageText${receiver === localStorage.getItem('loggedInEmail') ? "Left" : "Right"}`}>{text}</p>
		</div>
	);
};

export default ConversationMessages;