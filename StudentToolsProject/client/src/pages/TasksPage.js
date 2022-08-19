import './TasksPage.css';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import Task from '../components/Task';

const TasksPage = () => {

    useEffect(() => {
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
                <button onClick={deleteAllTasks} className='deleteAllButtonTasks'>{<FaIcons.FaTrash />} Delete All</button>

                <div>
                    {tasks.map((task) => (
						<Task
							id={task.id}
                            titleText={task.title}
							bodyText={task.text}
                            date={task.date}
							handleDeleteTask={deleteTask}
						/>
					))}
                </div>
            </div>
    )
}

export default TasksPage;
