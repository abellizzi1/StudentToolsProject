import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';
import {Link} from "react-router-dom";
import '../pages/MessagesPage.css';

const ExistingConversation = ({ conversationName, conversationEmail, handleSelectConversation }) => {
	
    /*
    Display all buttons (ExistingConversations) on the left side of Messages screen.
    MessagesPage will map out each of the ExistingConversations
    */

    return (
		<div>
			  <button onClick={() => { handleSelectConversation(conversationEmail) } }
        className='existingMessageButton'>{conversationName}</button>
		</div>
	);
};

export default ExistingConversation;