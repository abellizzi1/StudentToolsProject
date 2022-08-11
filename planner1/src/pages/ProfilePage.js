import './ProfilePage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

const ProfilePage = () => {


    return(
            <div className='content'>
                <div className='profileContent'>
                    <div className='profileBox'>
                        <h1 className='profileHeader'>Name: Angelo Bellizzi</h1>
                        <h1 className='profileHeader'>Email: angelo@mail.com</h1>
                        <h1 className='profileHeader'>Date Created: 08/08/22</h1>
                        <br></br>
                        <br></br>
                        <input className='profileNameInput' 
                        type='text' id='nameInput' name='nameInput' 
                        placeholder="Enter new name here" />
                        <button className='profileSubmitButton'>Change Name</button>
                        <br></br>
                        <br></br>
                        <input className='profileNameInput' 
                        type='password' id='passwordInput' name='passwordInput' 
                        placeholder="Enter new password here" />
                        <button className='profileSubmitButton'>Change Password</button>
                    </div>
                </div>
            </div>
    )
}

export default ProfilePage;
