import './RegisterPage.css';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const LoginPage = ({ handleSetLoggedIn }) => {
    
    const [repo, setRepo] = useState([]);
    const navigate = useNavigate();

    const getRepo = () => {
    axios.get('http://localhost:4000/app/users/get')
        .then((response) => {
            const myRepo = response.data;
            setRepo(myRepo);
        });
    }

    useEffect(() => {
        getRepo();
	}, []);

    const submitData = () => {
        var tempEmail = document.getElementById('emailInput').value
        var tempPassword = document.getElementById('passwordInput').value;
        var message = document.getElementById('msg');

        var acc = repo.filter((user) => user.email === tempEmail);
        if (acc.length > 0 && acc[0].password === tempPassword)
        {
            navigate('/StudentToolsProject');
            handleSetLoggedIn(true);
            localStorage.setItem('loggedInEmail', tempEmail);
            window.location.reload();
        }
        else
        {
            message.textContent = 'Invalid email and/or password.';
        }
    }

    return(
            <div className='content'>
                <div className='registerContent'>
                    <div className='loginBox'>
                        <form>
                            <label className='registerLabels' for='emailInput'>Email:</label>
                            <input className='emailInput' type='text' id='emailInput' name='emailInput' />
                            <br></br>
                            <label className='registerLabels' for='passwordInput'>Password:</label>
                            <input className='passwordInput' type='password' id='passwordInput' name='passwordInput' />
                        </form>
                        <p className='errorMessage' id='msg'></p>
                        <button className='loginButton' onClick={submitData} id='loginButton'>Login</button>
                        <Link to={"/StudentToolsProject/register"}>
                            <button className='registerButton' id='toRegisterButton'>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>
    )
}

export default LoginPage;