import './RegisterPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const RegisterPage = ({ handleSetCurrentPage }) => {

    useEffect(() => {
		handleSetCurrentPage("Register");
	}, []);

    const submitData = () => {
        var tempFirstName = document.getElementById('firstNameInput').value;
        var tempLastName = document.getElementById('lastNameInput').value;
        var tempEmail = document.getElementById('emailInput').value
        var tempPassword = document.getElementById('passwordInput').value;

        const registered = {
            firstName:tempFirstName,
            lastName:tempLastName,
            email:tempEmail,
            password:tempPassword
        }

        axios.post('http://localhost:4000/app/users', registered)
            .then(response => console.log(response.data));

        window.location.reload();
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
                        <button className='registerButton' onClick={submitData} id='submitButton'>Register</button>
                    </div>
                </div>
                
            </div>
    )
}

export default RegisterPage;