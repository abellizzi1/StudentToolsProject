import './TasksPage.css';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { nanoid } from 'nanoid';
import * as FaIcons from 'react-icons/fa';

const TasksPage = ({ handleSetCurrentPage }) => {

    useEffect(() => {
		handleSetCurrentPage("Tasks");
	}, []);
    

    return(
            <div className='content'>
                <Link to={"/tasks/create-task"}>
                    <button 
                    onClick={addNote} 
                    className='addTaskButton'>
                    {<FaIcons.FaPen />} Create Task
                    </button>
                </Link>
            </div>
    )
}

export default TasksPage;
