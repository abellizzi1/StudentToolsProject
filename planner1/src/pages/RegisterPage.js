import './RegisterPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const RegisterPage = ({ handleSetLoggedIn }) => {

    const navigate = useNavigate();

    const submitData = () => {
        var tempFirstName = document.getElementById('firstNameInput').value;
        var tempLastName = document.getElementById('lastNameInput').value;
        var tempEmail = document.getElementById('emailInput').value
        var tempPassword = document.getElementById('passwordInput').value;
        var message = document.getElementById('msg');
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (tempFirstName.length === 0)
        {
            message.textContent = 'Enter a first name.';
        }
        else if (tempLastName.length === 0)
        {
            message.textContent = 'Enter a last name.';
        }
        else if (!tempEmail.match(mailformat))
        {
            message.textContent = 'Enter a valid email.';
        }
        else if (tempPassword.length < 8)
        {
            message.textContent = 'Password must be at least 8 characters.';
        }
        else
        {
            const registered = {
                firstName:tempFirstName,
                lastName:tempLastName,
                email:tempEmail,
                password:tempPassword
            }
    
            axios.post('http://localhost:4000/app/users/create', registered)
                .then(response => console.log(response.data));
    
            navigate('/');
            handleSetLoggedIn(true);
            window.location.reload();
        }
    }

    return(
            <div className='content'>
                <div className='registerContent'>
                    <div className='registerBox'>
                        <form>
                            <label className='registerLabels' for='firstNameInput'>First Name:</label>
                            <input className='firstNameInput' type='text' id='firstNameInput' name='firstNameInput' />
                            <br></br>
                            <label className='registerLabels' for='lastNameInput'>Last Name:</label>
                            <input className='lastNameInput' type='text' id='lastNameInput' name='lastNameInput' />
                            <br></br>
                            <label className='registerLabels' for='emailInput'>Email:</label>
                            <input className='emailInput' type='text' id='emailInput' name='emailInput' />
                            <br></br>
                            <label className='registerLabels' for='passwordInput'>Password:</label>
                            <input className='passwordInput' type='password' id='passwordInput' name='passwordInput' />
                        </form>
                        <p className='errorMessage' id='msg'>Password must be at least 8 characters.</p>
                        <button className='registerButton' onClick={submitData} id='submitButton'>Register</button>
                    </div>
                </div>
                
            </div>
    )
}

export default RegisterPage;