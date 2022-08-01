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
                            Assignment 1000: Joe mama on deez nuts
                        </h1>
                        <p className='taskText'>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>

                        <div className='task-toolbar'>
                            <p>Task data goes here</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TasksPage;
