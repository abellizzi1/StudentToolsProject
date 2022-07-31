import './TasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

const CreateTaskPage = ({ handleSetCurrentPage }) => {

    useEffect(() => {
		handleSetCurrentPage("Create Task");
	}, []);
    

    return(
            <div className='content'>
                
            </div>
    )
}

export default CreateTaskPage;
