import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const CreateGroupTaskPage = () => {


    return(
        <div className='content'>
            <div className='createTaskContent'>
                <div className='createGroupTaskBox'>
                    <h1 className='groupTaskInformationHeader'>Task Information</h1>
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
                    <form>
                        <label className='groupDeadlineLabel' for='taskDate'>Deadline:</label>
                        <input className='groupTaskDateInput' type='date' id='taskDate' name='taskDate' />
                    </form>
                    <Link to={"/group-tasks"}>
                        <button 
                        className='trueCreateGroupTaskButton'>
                        Create Task
                        </button>
                    </Link>
                </div>
            </div>
            </div>
    )
}

export default CreateGroupTaskPage;
