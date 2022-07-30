import './NotesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

const TasksPage = ({ handleSetElement }) => {

    useEffect(() => {
		handleSetElement("Tasks");
	}, []);
    

    return(
            <div className='content'>
                
            </div>
    )
}

export default TasksPage;
