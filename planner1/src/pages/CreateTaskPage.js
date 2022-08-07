import './TasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const CreateTaskPage = () => {

    const addTask = () => {
        var tempDate = document.getElementById('taskDate').value;
        if (tempDate.length === 0)
        {
            tempDate = "None";
        }
        const newTask = {
            id: nanoid(),
            title: document.getElementById('task-title').value,
            text: document.getElementById('task-text').value,
            date: tempDate
        };
        const savedTasks = JSON.parse(
			localStorage.getItem('allTasksData')
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
                <div className='createTaskContent'>
                    <div className='createTaskBox'>
                        <h1 className='taskInformationHeader'>Task Information</h1>
                        <textarea
                            id='task-title'
                            className='inputTaskTitle' 
                            rows='8'
                            cols='10'
                            placeholder='Type to add a title...'
                        ></textarea>
                        <textarea
                            id='task-text'
                            className='inputTaskText' 
                            rows='8'
                            cols='10'
                            placeholder='Type to add a description...'
                        ></textarea>
                        <form>
                            <label className='deadlineLabel' for='taskDate'>Deadline:</label>
                            <input className='taskDateInput' type='date' id='taskDate' name='taskDate' />
                        </form>
                        <Link to={"/tasks"}>
                            <button 
                            onClick={addTask}
                            className='trueCreateTaskButton'>
                            Create Task
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default CreateTaskPage;
