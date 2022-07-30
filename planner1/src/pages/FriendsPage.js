import './NotesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

const FriendsPage = ({ handleSetCurrentPage }) => {

    useEffect(() => {
		handleSetCurrentPage("Friends");
	}, []);
    

    return(
            <div className='content'>
                
            </div>
    )
}

export default FriendsPage;
