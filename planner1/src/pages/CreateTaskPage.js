import './TasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

const CreateTaskPage = ({ handleSetCurrentPage }) => {

    useEffect(() => {
		handleSetCurrentPage("Create Task");
	}, []);

    const addTask = () => {
        const newTask = {
            //THESE VALUES WILL BE SET IN THE FIELDS ON THIS PAGE
            id: nanoid(),
            title: '',
            text: ''
        };
        const savedTasks = JSON.parse(
			localStorage.getItem('allNotesData')
		);

		if (savedTasks) {
			savedTasks.push(newTask);
            localStorage.setItem('allTasksData', JSON.stringify(savedTasks));
		}
        else {
            const newTasks = [];
            newTasks.push(newTask);
            localStorage.setItem('allTasksData', JSON.stringify(newTasks));
        }
    }
    

    return(
            <div className='content'>
                
            </div>
    )
}

export default CreateTaskPage;
