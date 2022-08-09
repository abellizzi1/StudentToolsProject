import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link, useNavigate} from "react-router-dom";

const GroupTasksPage = () => {

    const navigate = useNavigate();

    const createGroupTask = () => {
        if (localStorage.getItem('loggedInEmail') === '') {
            document.getElementById('msg').textContent = 'Must be logged in.';
        }
        else {
            navigate('/group-tasks/create-group-task');
        }
    }

    return(
        <div className='content'>
            <button onClick={() => {createGroupTask()} }
            className='addTaskButton'>
            {<FaIcons.FaPen />} Create Group Task
            </button>
            <p className='errorMessageGroupTasks' id='msg'></p>

            <div>
                <div  className='task'>
                <h1 className='taskTitle'>
                    This is a title
                </h1>
                <p className='taskText'>
                    This is the body
                </p>

                <div className='task-toolbar'>
                    <h2 className='deadlineToolbar'>
                        Deadline: 08/08/2022
                    </h2>
                    <Link to={'/group-tasks/selected-group-task'}>
                        <button className='viewMoreButton'>View More</button>
                    </Link>
                    <button 
                        className='taskCloseButton'>
                        {<FaIcons.FaWindowClose />}
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default GroupTasksPage;
