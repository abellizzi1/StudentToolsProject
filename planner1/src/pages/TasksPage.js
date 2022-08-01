import './TasksPage.css';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { nanoid } from 'nanoid';
import * as FaIcons from 'react-icons/fa';

const TasksPage = ({ handleSetCurrentPage }) => {

    useEffect(() => {
		handleSetCurrentPage("Tasks");

        const savedTasks = JSON.parse(
            localStorage.getItem('allTasksData')
        );
        if (savedTasks) {
            setTasks(savedTasks);
        }
        console.log(localStorage.getItem('allTasksData'));
	}, []);

    const [tasks, setTasks] = useState([
    ]);

    const deleteAllTasks = () => {
        setTasks([]);
        localStorage.setItem('allTasksData', null);
    }

    const deleteTask = (id) => {
        var i = 0;
        while (i < tasks.length)
        {
            if (tasks[i].id === id)
            {
                tasks.splice(i, 1);
                setTasks(tasks);
                break;
            }
            i++;
        }
        localStorage.setItem('allTasksData', JSON.stringify(tasks));
        window.location.reload();
    }
    

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
