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

function App() {
  
  var sidebarCurrPageElement = null;
  const [loggedIn, setLoggedIn] = useState(false);

  const getCurrentPageElement = (el) => {
    sidebarCurrPageElement = el;
  }

  const setCurrentPageElement = (text) => {
    sidebarCurrPageElement.textContent = text;
  }

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
        <Sidebar handleGetCurrentPageElement={getCurrentPageElement} isLoggedIn={loggedIn} handleSetLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path = '/' exact element = {<NotesPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/profile' exact element = {<ProfilePage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/friends' exact element = {<FriendsPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/tasks' exact element = {<TasksPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/tasks/create-task' exact element = {<CreateTaskPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/group-tasks' exact element = {<GroupTasksPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/register' exact element = {<RegisterPage handleSetCurrentPage={setCurrentPageElement} handleSetLoggedIn={setIsLoggedIn} />} />
          <Route path = '/login' exact element = {<LoginPage handleSetCurrentPage={setCurrentPageElement} handleSetLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
