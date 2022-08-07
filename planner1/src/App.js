import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.js';
import NotesPage from './pages/NotesPage.js';
import ProfilePage from './pages/ProfilePage.js';
import FriendsPage from './pages/FriendsPage.js';
import TasksPage from './pages/TasksPage.js';
import GroupTasksPage from './pages/GroupTasksPage';
import CreateTaskPage from './pages/CreateTaskPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);

  const setIsLoggedIn = (b) => {
    setLoggedIn(b);
    if (b) { localStorage.setItem('isLoggedIn', true); }
    else { localStorage.setItem('isLoggedIn', false); }
  }

  useEffect(() => {
    var loggedInBool = null;
    loggedInBool = localStorage.getItem('isLoggedIn');
		if (loggedInBool !== null && loggedInBool === 'true') { setIsLoggedIn(true); }
    else { setIsLoggedIn(false); }
	}, []);

  return (
    <>
      <Router>
        <Sidebar isLoggedIn={loggedIn} handleSetLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path = '/' exact element = {<NotesPage />} />
          <Route path = '/profile' exact element = {<ProfilePage />} />
          <Route path = '/friends' exact element = {<FriendsPage isLoggedIn={loggedIn} />} />
          <Route path = '/friends/messages' exact element = {<MessagesPage />} />
          <Route path = '/tasks' exact element = {<TasksPage />} />
          <Route path = '/tasks/create-task' exact element = {<CreateTaskPage />} />
          <Route path = '/group-tasks' exact element = {<GroupTasksPage />} />
          <Route path = '/register' exact element = {<RegisterPage handleSetLoggedIn={setIsLoggedIn} />} />
          <Route path = '/login' exact element = {<LoginPage handleSetLoggedIn={setIsLoggedIn} />} />'
        </Routes>
      </Router>
    </>
  );
}

export default App;
