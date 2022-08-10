import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import GroupTask from '../components/GroupTask'

const GroupTasksPage = () => {

    const [groupTasksRepo, setGroupTasksRepo] = useState([]);
    const [groupTasks, setGroupTasks] = useState([]);

    const navigate = useNavigate();

    const getRepo = () => {

        axios.get('http://localhost:4000/app/groupTasks/get')
            .then((response) => {
                const tempGroupTasksRepo = response.data;
                console.log(tempGroupTasksRepo);
                setGroupTasksRepo(tempGroupTasksRepo);
            });
       
        }

    const createGroupTask = () => {
        if (localStorage.getItem('loggedInEmail') === '') {
            document.getElementById('msg').textContent = 'Must be logged in.';
        }
        else {
            navigate('/group-tasks/create-group-task');
        }
    }

    const setGroupTasksState = () => {
        var loginEmail = localStorage.getItem('loggedInEmail');
        var groupTasksArrayTemp = [];
        for (let i = 0; i < groupTasksRepo.length; i++) {
            var groupArrayTemp = groupTasksRepo[i].group;
            if (groupArrayTemp.includes(loginEmail)) {
                groupTasksArrayTemp.push(groupTasksRepo[i]);
            }
        }
        setGroupTasks(groupTasksArrayTemp);
    }

    const viewMoreOnClick = (id) => {
        navigate('/group-tasks/selected-group-task');
    }

    const closeOnClick = (id) => {

    }

    useEffect(() => {
        
        getRepo();
        setGroupTasksState();
        
    }, []);

    return(
        <div className='content'>
            <button onClick={() => {createGroupTask()} }
            className='addTaskButton'>
            {<FaIcons.FaPen />} Create Group Task
            </button>
            <p className='errorMessageGroupTasks' id='msg'></p>

            <div>
                {groupTasks.map((groupTask) => (
                    <GroupTask
                        title={groupTask.title}
                        text={groupTask.description} 
                        deadline={groupTask.deadline}
                        id={groupTask._id}
                        handleViewMore={viewMoreOnClick}
                        handleClose={closeOnClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default GroupTasksPage;
