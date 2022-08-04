import './RegisterPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const LoginPage = ({ handleSetCurrentPage }) => {

    const [repo, setRepo] = useState([]);

    const getRepo = () => {
    axios.get('http://localhost:4000/app/users/get')
        .then((response) => {
            const myRepo = response.data;
            setRepo(myRepo);
        });
    }

    useEffect(() => {
		handleSetCurrentPage("Login");
        getRepo();
	}, []);

    const submitData = () => {
        var tempEmail = document.getElementById('emailInput').value
        var tempPassword = document.getElementById('passwordInput').value;
        var message = document.getElementById('msg');

        var acc = repo.filter((user) => user.email === tempEmail);
        if (acc.length > 0 && acc[0].password === tempPassword)
        {
            message.textContent = 'Success';
        }
        else
        {
            message.textContent = 'Email or password invalid';
        }
    }

    return(
            <div className='content'>
                <div className='registerContent'>
                    <div className='registerBox'>
                        <form>
                            <label className='registerLabels' for='emailInput'>Email:</label>
                            <input className='emailInput' type='text' id='emailInput' name='emailInput' />
                            <br></br>
                            <label className='registerLabels' for='passwordInput'>Password:</label>
                            <input className='passwordInput' type='password' id='passwordInput' name='passwordInput' />
                        </form>
                        <button className='registerButton' onClick={submitData} id='loginButton'>Login</button>
                        <h1 id='msg'></h1>
                    </div>
                </div>
                
            </div>
    )
}

export default LoginPage;