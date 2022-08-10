import './GroupTasksPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom";

const SelectedGroupTaskPage = () => {


    return(
        <div className='content'>
            <div className='createTaskContent'>
                <div className='groupTaskInfoBox'>
                    <Link to={'/group-tasks'}>
                        <button className='groupTaskInfoBackButton'>Back to Group Tasks</button>
                    </Link>

                    <h1 className='groupTaskMoreInfoHeader'>Task title</h1>
                    <h4 className='groupTaskInfoDescription'>Task descriptionde scriptiondescriptiondescr iptiondescriptiondescription descriptiondescripti ondescriptiondescription descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</h4>
                    <br></br>
                    <h4 className='groupTaskInfoDescription'>Deadline: 08/10/22</h4>
                    <br></br>
                    <h4 className='groupTaskInfoDescription'>Group Members: me, angelo</h4>
                    <br></br>
                    <br></br>
                    <h1 className='groupTaskInformationHeader'>More Posts:</h1>
                    <br></br>

                    <div className='groupTaskInfoPostBorder'>
                        <h3 className='groupTaskInfoPostName'>Angelo beeenononnn</h3>
                        <p className='groupTaskInfoPostDate'>08/11/22</p>
                        <p className='groupTaskInfoPosts'>This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post </p>
                    </div>
                    <div className='groupTaskInfoPostBorder'>
                        <h3 className='groupTaskInfoPostName'>Angelo beeenononnn</h3>
                        <p className='groupTaskInfoPostDate'>08/11/22</p>
                        <p className='groupTaskInfoPosts'>This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post </p>
                    </div>
                    <div className='groupTaskInfoPostBorder'>
                        <h3 className='groupTaskInfoPostName'>Angelo beeenononnn</h3>
                        <p className='groupTaskInfoPostDate'>08/11/22</p>
                        <p className='groupTaskInfoPosts'>This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post This is a post </p>
                    </div>

                    <Link to={'/group-tasks'}>
                        <button className='groupTaskInfoBackButton'>Back to Group Tasks</button>
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default SelectedGroupTaskPage;
