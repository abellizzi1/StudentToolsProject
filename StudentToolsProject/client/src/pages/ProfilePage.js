import './ProfilePage.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

const ProfilePage = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userDate, setUserDate] = useState('');

    const [mainUser, setMainUser] = useState(null);
    const [usersRepo, setUsersRepo] = useState([]);
    const [runCount, setRunCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const getRepo = () => {

            axios.get('/app/users/get')
            .then((response) => {
                const tempUsersRepo = response.data;
                console.log(tempUsersRepo);
                setUsersRepo(tempUsersRepo);

                var mainUser = usersRepo.filter((user) => user.email === localStorage.getItem('loggedInEmail'));
                setUserName(mainUser[0].firstName + " " + mainUser[0].lastName);
                setUserEmail(mainUser[0].email);
                setUserDate(mainUser[0].date.substring(0, 10));
                setMainUser(mainUser[0]);
            });
        }

    const changeFirstName = () => {
        if (mainUser !== null) {
            var newUser = mainUser;
            newUser.firstName = document.getElementById('firstNameInput').value;

            axios.put("/app/users/put/" + mainUser._id, newUser)
                .then(response => console.log(response.data));

            window.location.reload();
        }
    }

    const changeLastName = () => {
        if (mainUser !== null) {
            var newUser = mainUser;
            newUser.lastName = document.getElementById('lastNameInput').value;

            axios.put("/app/users/put/" + mainUser._id, newUser)
                .then(response => console.log(response.data));

            window.location.reload();
        }
    }

    const changePassword = () => {
        if (mainUser !== null) {
            var newUser = mainUser;
            newUser.password = document.getElementById('passwordInput').value;

            axios.put("/app/users/put/" + mainUser._id, newUser)
                .then(response => console.log(response.data));

            window.location.reload();
        }
    }

    useEffect(() => {
        if (runCount < 5 && localStorage.getItem('loggedInEmail') !== '') {
            getRepo();
            setRunCount(runCount + 1);
        }
        else if (localStorage.getItem('loggedInEmail') === '') {
            setErrorMessage("Must be logged in");
        }
        
    }, [usersRepo]);

    return(
            <div className='content'>
                <div className='profileContent'>
                    <div className='profileBox'>
                        <h1 className='profileHeader'>Name: {userName}</h1>
                        <h1 className='profileHeader'>Email: {userEmail}</h1>
                        <h1 className='profileHeader'>Date Created: {userDate}</h1>
                        <br></br>
                        <br></br>
                        <input className='profileNameInput' 
                        type='text' id='firstNameInput' name='firstNameInput' 
                        placeholder="Enter new first name here" />
                        <button onClick={() => { changeFirstName() } } className='profileSubmitButton'>Change First Name</button>
                        <br></br>
                        <br></br>
                        <input className='profileNameInput' 
                        type='text' id='lastNameInput' name='lastNameInput' 
                        placeholder="Enter new last name here" />
                        <button onClick={() => { changeLastName() } } className='profileSubmitButton'>Change Last Name</button>
                        <br></br>
                        <br></br>
                        <input className='profileNameInput' 
                        type='password' id='passwordInput' name='passwordInput' 
                        placeholder="Enter new password here" />
                        <button onClick={() => { changePassword() } } className='profileSubmitButton'>Change Password</button>
                        <p className='errorMessageProfile' id='msg'>{errorMessage}</p>
                    </div>
                </div>
            </div>
    )
}

export default ProfilePage;
