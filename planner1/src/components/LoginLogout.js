import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginLogout = ({ isLoggedIn, handleSetLoggedIn }) => {
	
    if (isLoggedIn) {
        return (
            <button onClick={() => { handleSetLoggedIn(false); window.location.reload(); }}className='logoutButton'>Logout</button>
        );
    }
    else {
        return (
            <Link to={"/login"}>
                <button className='loginRegButton'>Login/Register</button>
              </Link>
        );
    }

};

export default LoginLogout;