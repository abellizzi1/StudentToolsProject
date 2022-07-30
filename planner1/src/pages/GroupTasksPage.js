import './NotesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

const GroupTasksPage = ({ handleSetElement }) => {

    useEffect(() => {
		handleSetElement("Group Tasks");
	}, []);
    

    return(
            <div className='content'>
                
            </div>
    )
}

export default GroupTasksPage;
