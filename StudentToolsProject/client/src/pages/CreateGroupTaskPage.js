import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import CreateGroupTaskFriend from '../components/CreateGroupTaskFriend';
import axios from 'axios'

const CreateGroupTaskPage = () => {
    /*
    On the right side of the screen:
    Show all friends in a list of buttons.
    On Click, the button turns from blue to green and the friend is added to the group task.
    If Clicked while green, turns back to blue and the friend is removed from the group task.
    */

    const [friendsRepo, setFriendsRepo] = useState([]);
    const [usersRepo, setUsersRepo] = useState([]);
    const [friends, setFriends] = useState([]);
    const [groupTaskMembers, setGroupTaskMembers] = useState([]);
    const [runCount, setRunCount] = useState(0);

    const navigate = useNavigate();

    const getRepo = () => {

        axios.get('/app/users/get')
            .then((response) => {
                const tempUsersRepo = response.data;
                console.log(tempUsersRepo);
                setUsersRepo(tempUsersRepo);
            });

        axios.get('/app/friends/get')
            .then((response) => {
                const tempFriendsRepo = response.data;
                console.log(tempFriendsRepo);
                setFriendsRepo(tempFriendsRepo);
            });
       
        }

        const setFriendsState = () => {
            var loginEmail = localStorage.getItem('loggedInEmail');
            console.log(localStorage.getItem('loggedInEmail'));
            console.log(friendsRepo);
            var friendsArrayTemp = [];
            for (let i = 0; i < friendsRepo.length-1; i++) {
                for (let j = i+1; j < friendsRepo.length; j++) {
                    if (friendsRepo[i].receiver === friendsRepo[j].sender 
                    && friendsRepo[i].sender === friendsRepo[j].receiver
                    && (friendsRepo[i].sender === loginEmail || friendsRepo[j].sender === loginEmail)) {
                        console.log('friend found');
                        var friendToAdd;
                        if (friendsRepo[i].sender === loginEmail)
                        {
                            friendToAdd = usersRepo.filter((user) => user.email === friendsRepo[i].receiver);
                        }
                        else {
                            friendToAdd = usersRepo.filter((user) => user.email === friendsRepo[i].sender);
                        }
    
                        if (friendToAdd.length > 0) {
                            const newFriend = {
                                name: (friendToAdd[0].firstName + " " + friendToAdd[0].lastName),
                                email: friendToAdd[0].email
                            };
                            friendsArrayTemp.push(newFriend);
                        }
                    }
                }
            }
            setFriends(friendsArrayTemp);
        }

        const addToGroupTask = (email) => {
            const newGroupTaskMembers = [...groupTaskMembers, email];
            setGroupTaskMembers(newGroupTaskMembers);
        }

        const removeFromGroupTask = (email) => {
            var newGroupTaskMembers = groupTaskMembers;
            for (let i = 0; i < newGroupTaskMembers.length; i++) {
                if (newGroupTaskMembers[i] === email) {
                    newGroupTaskMembers.splice(i, 1);
                }
            }
            setGroupTaskMembers(newGroupTaskMembers);
        }

        const postGroupTask = () => {
            const finalGroupTaskMembers = [...groupTaskMembers, localStorage.getItem('loggedInEmail')];
            setGroupTaskMembers(finalGroupTaskMembers);
            var tempTitle = document.getElementById('task-title').value;
            var tempText = document.getElementById('task-text').value;
            var tempDate = document.getElementById('taskDate').value;
            if (tempDate.length === 0)
            {
                tempDate = "None";
            }

            const newGroupTask = {
                title:tempTitle,
                description:tempText,
                group:finalGroupTaskMembers,
                deadline:tempDate
            }
    
            axios.post('/app/groupTasks/create', newGroupTask)
                .then(response => console.log(response.data));

            navigate('/group-tasks');
            window.location.reload();
        }

        useEffect(() => {
        
            if (friends.length === 0 && runCount < 5 && localStorage.getItem('loggedInEmail') !== '') {
                getRepo();
                setFriendsState();
                setRunCount(runCount + 1);
            }
            
        }, [friendsRepo]);



    return(
        <div className='content'>
            <div className='createTaskContent'>
                <div className='createGroupTaskBox'>
                    <h1 className='groupTaskInformationHeader'>Group Task Information</h1>
                    <h2 className='groupTaskFriendsHeader'>Click on a friend to share the task with them</h2>
                    <div className='createTaskFriendsContent'>
                        
                        {friends.map((friend) => (
                            <CreateGroupTaskFriend
                                friendName={friend.name}
                                friendEmail={friend.email} 
                                handleAddToGroup={addToGroupTask}
                                handleRemoveFromGroup={removeFromGroupTask}
                            />
                        ))}
        
                    </div>

                    <textarea
                        id='task-title'
                        className='inputGroupTaskTitle' 
                        rows='8'
                        cols='10'
                        placeholder='Type to add a title...'
                    ></textarea>
                    <textarea
                        id='task-text'
                        className='inputGroupTaskText' 
                        rows='8'
                        cols='10'
                        placeholder='Type to add a description...'
                    ></textarea>
                    <form className='groupTaskDeadlineForm'>
                        <label className='groupDeadlineLabel' for='taskDate'>Deadline:</label>
                        <input className='groupTaskDateInput' type='date' id='taskDate' name='taskDate' />
                    </form>
                    <button onClick={() => { postGroupTask() } }
                    className='trueCreateGroupTaskButton'>
                    Create Group Task
                    </button>
                </div>
            </div>
            </div>
    )
}

export default CreateGroupTaskPage;
