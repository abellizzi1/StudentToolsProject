import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import GroupTask from '../components/GroupTask'

const GroupTasksPage = () => {

    const [groupTasksRepo, setGroupTasksRepo] = useState([]);
    const [groupTasks, setGroupTasks] = useState([]);
    const [runCount, setRunCount] = useState(0);

    const navigate = useNavigate();

    const getRepo = () => {

        axios.get('/app/groupTasks/get')
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
        localStorage.setItem('selectedGroupTaskId', id);
        navigate('/group-tasks/selected-group-task');
    }

    const closeOnClick = (id) => {
        var existingGroupTask = groupTasksRepo.filter((groupTask) => (groupTask._id === id));
        var groupTemp = existingGroupTask[0].group;
        for (let i = 0; i < groupTemp.length; i++) {
            if (groupTemp[i] === localStorage.getItem('loggedInEmail')) {
                groupTemp.splice(i, 1);
            }
        }
        existingGroupTask[0].group = groupTemp;
        console.log(existingGroupTask[0]);

        axios.put("/app/groupTasks/put/" + id, existingGroupTask[0])
            .then(response => console.log(response.data));

        getRepo();
        setGroupTasksState();
        setRunCount(0);
    }

    useEffect(() => {
        if (groupTasks.length === 0 && runCount < 5 && localStorage.getItem('loggedInEmail') !== '') {
            getRepo();
            setGroupTasksState();
            setRunCount(runCount + 1);
        }
        
    }, [groupTasksRepo]);

    return(
        <div className='content'>
            <button onClick={() => {createGroupTask()} }
            className='addTaskButton'>
            {<FaIcons.FaPen />} Create Group Task
            </button>
            <p className='errorMessageGroupTasks' id='msg'>Must be logged in</p>

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

            <div  className='task'>
                <h1 className='taskTitle'>
                This is a title This is a title This is a title This is a title This is a title 
                This is a title This is a title This is a title This is a title This is a title 
                This is a title This is a title This is a title This is a title This is a title 
                </h1>
                <p className='taskText'>
                This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text This is the text
                This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text This is the text
                </p>

                <div className='task-toolbar'>
                    <h2 className='deadlineToolbar'>
                    Deadline: 08/08/2022
                    </h2>
                    <button className='viewMoreButton'>View More</button>
                    <button 
                        className='taskCloseButton'>
                        {<FaIcons.FaWindowClose />}
                    </button>
                </div>
            </div>
            <div  className='task'>
                <h1 className='taskTitle'>
                This is a title This is a title This is a title This is a title This is a title 
                This is a title This is a title This is a title This is a title This is a title 
                This is a title This is a title This is a title This is a title This is a title 
                </h1>
                <p className='taskText'>
                This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text This is the text
                This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text This is the text
                </p>

                <div className='task-toolbar'>
                    <h2 className='deadlineToolbar'>
                    Deadline: 08/08/2022
                    </h2>
                    <button className='viewMoreButton'>View More</button>
                    <button 
                        className='taskCloseButton'>
                        {<FaIcons.FaWindowClose />}
                    </button>
                </div>
            </div>
            <div  className='task'>
                <h1 className='taskTitle'>
                This is a title This is a title This is a title This is a title This is a title 
                This is a title This is a title This is a title This is a title This is a title 
                This is a title This is a title This is a title This is a title This is a title 
                </h1>
                <p className='taskText'>
                This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text This is the text
                This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text 
                This is the text This is the text This is the text This is the text This is the text This is the text This is the text This is the text
                </p>

                <div className='task-toolbar'>
                    <h2 className='deadlineToolbar'>
                    Deadline: 08/08/2022
                    </h2>
                    <button className='viewMoreButton'>View More</button>
                    <button 
                        className='taskCloseButton'>
                        {<FaIcons.FaWindowClose />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GroupTasksPage;
