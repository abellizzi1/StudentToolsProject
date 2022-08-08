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
            //error message not loggedin
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
            <button className='addTaskButton'>{<FaIcons.FaTrash />} Delete All</button>

            <div>
            </div>
        </div>
    )
}

export default GroupTasksPage;
