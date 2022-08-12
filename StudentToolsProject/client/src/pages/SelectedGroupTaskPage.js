import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import GroupTaskPost from '../components/GroupTaskPost.js';
import {Link} from "react-router-dom";
import axios from 'axios';

const SelectedGroupTaskPage = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskGroup, setTaskGroup] = useState([]);
    const [taskDeadline, setTaskDeadline] = useState('');


    const [groupTaskPostsRepo, setGroupTaskPostsRepo] = useState([]);
    const [usersRepo, setUsersRepo] = useState([]);
    const [groupTaskPosts, setGroupTaskPosts] = useState([]);
    const [runCount, setRunCount] = useState(0);

    const getRepo = () => {

        axios.get('/app/groupTasks/get')
            .then((response) => {
                const tempGroupTasksRepo = response.data;
                console.log(tempGroupTasksRepo);
                var groupTaskTemp = tempGroupTasksRepo.filter((groupTask) => (groupTask._id === localStorage.getItem('selectedGroupTaskId')));
                setTaskTitle(groupTaskTemp[0].title);
                setTaskDescription(groupTaskTemp[0].description);
                setTaskGroup(groupTaskTemp[0].group);
                setTaskDeadline(groupTaskTemp[0].deadline);
            });

            axios.get('/app/groupTaskPosts/get')
            .then((response) => {
                const tempGroupTaskPostsRepo = response.data;
                console.log(tempGroupTaskPostsRepo);
                setGroupTaskPostsRepo(tempGroupTaskPostsRepo);
            });

            axios.get('/app/users/get')
            .then((response) => {
                const tempUsersRepo = response.data;
                console.log(tempUsersRepo);
                setUsersRepo(tempUsersRepo);
            });
        }

        const setGroupTaskPostsState = () => {
            var groupTaskPostsArrayTemp = [];
            var selectedGroupTaskId = localStorage.getItem('selectedGroupTaskId');
            for (let i = 0; i < groupTaskPostsRepo.length; i++) {
                if (groupTaskPostsRepo[i].groupTaskId === selectedGroupTaskId) {
                    var nameToAdd = usersRepo.filter((user) => user.email === groupTaskPostsRepo[i].sender);

                    if (nameToAdd.length > 0) {
                        const newPost = {
                            name: (nameToAdd[0].firstName + " " + nameToAdd[0].lastName),
                            sender: groupTaskPostsRepo[i].sender,
                            text: groupTaskPostsRepo[i].text,
                            date: groupTaskPostsRepo[i].date
                        };
    
                        groupTaskPostsArrayTemp.push(newPost);
                    }
                }
            }
            const sorted = groupTaskPostsArrayTemp.sort((a, b) => Date.parse(a.date) > Date.parse(b.date) ? -1 : 1);
            setGroupTaskPosts(sorted);
        }

        const createPost = () => {
            var tempText = document.getElementById('create-post-text').value;
            var tempSender = localStorage.getItem('loggedInEmail');
            var selectedGroupTaskId = localStorage.getItem('selectedGroupTaskId');

            const newGroupTaskPost = {
                sender:tempSender,
                text:tempText,
                groupTaskId:selectedGroupTaskId
            }
    
            axios.post('/app/groupTaskPosts/create', newGroupTaskPost)
                .then(response => console.log(response.data));

            setRunCount(0);
            getRepo();
            setGroupTaskPostsState();

            const d = new Date();
            var nameToAdd = usersRepo.filter((user) => user.email === tempSender);
            const npostToSend = {
                name:(nameToAdd[0].firstName + " " + nameToAdd[0].lastName),
                sender:tempSender,
                text:tempText,
                groupTaskId:selectedGroupTaskId,
                date:d.toISOString()
            }
            setGroupTaskPosts([npostToSend, ...groupTaskPosts]);
        }

        useEffect(() => {
            if (groupTaskPosts.length === 0 && runCount < 5 && localStorage.getItem('loggedInEmail') !== '') {
                getRepo();
                setGroupTaskPostsState();
                setRunCount(runCount + 1);
            }
            
        }, [groupTaskPostsRepo]);

    return(
        <div className='content'>
            <div className='createTaskContent'>
                <div className='groupTaskInfoBox'>
                    <Link to={'/group-tasks'}>
                        <button className='groupTaskInfoBackButton'>Back to Group Tasks</button>
                    </Link>

                    <h1 className='groupTaskMoreInfoHeader'>{taskTitle}</h1>
                    <h4 className='groupTaskInfoDescription'>{taskDescription}</h4>
                    <br></br>
                    <h4 className='groupTaskInfoDescription'>Deadline: {taskDeadline}</h4>
                    <br></br>
                    <h4 className='groupTaskInfoDescription'>Group Members: {taskGroup.join(", ")}</h4>
                    <br></br>
                    <br></br>
                    <h1 className='groupTaskInformationHeader'>More Posts:</h1>
                    <br></br>

                    <textarea
                        id='create-post-text'
                        className='groupTaskInfoCreatePostText' 
                        rows='8'
                        cols='10'
                        placeholder='Type to create a post...'
                    ></textarea>
                    <button onClick={() =>{ createPost() } } className='groupTaskInfoCreatePostButton'>Create Post</button>
                    
                    {groupTaskPosts.map((groupTaskPost) => (
                        <GroupTaskPost
                            name={groupTaskPost.name}
                            date={groupTaskPost.date} 
                            text={groupTaskPost.text}
                        />
                    ))}

                    <Link to={'/group-tasks'}>
                        <button className='groupTaskInfoBackButton'>Back to Group Tasks</button>
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default SelectedGroupTaskPage;
