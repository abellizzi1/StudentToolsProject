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
                    className='addTaskButton'>
                    {<FaIcons.FaPen />} Create Task
                    </button>
                </Link>

                <div>
                    <div className='task'>
                        <h1 className='taskTitle'>
                            Title
                        </h1>
                        <p className='taskText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default TasksPage;
