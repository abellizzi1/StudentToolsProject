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
import StartConversationPage from './pages/StartConversationPage';
import SelectedGroupTaskPage from './pages/SelectedGroupTaskPage'
import CreateGroupTaskPage from './pages/CreateGroupTaskPage'

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
          <Route path = '/StudentToolsProject/' exact element = {<NotesPage />} />
          <Route path = '/StudentToolsProject/profile' exact element = {<ProfilePage />} />
          <Route path = '/StudentToolsProject/friends' exact element = {<FriendsPage isLoggedIn={loggedIn} />} />
          <Route path = '/StudentToolsProject/messages' exact element = {<MessagesPage />} />
          <Route path = '/StudentToolsProject/start-conversation' exact element = {<StartConversationPage />} />
          <Route path = '/StudentToolsProject/tasks' exact element = {<TasksPage />} />
          <Route path = '/StudentToolsProject/tasks/create-task' exact element = {<CreateTaskPage />} />
          <Route path = '/StudentToolsProject/group-tasks' exact element = {<GroupTasksPage />} />
          <Route path = '/StudentToolsProject/group-tasks/selected-group-task' exact element = {<SelectedGroupTaskPage />} />
          <Route path = '/StudentToolsProject/group-tasks/create-group-task' exact element = {<CreateGroupTaskPage />} />
          <Route path = '/StudentToolsProject/register' exact element = {<RegisterPage handleSetLoggedIn={setIsLoggedIn} />} />
          <Route path = '/StudentToolsProject/login' exact element = {<LoginPage handleSetLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
