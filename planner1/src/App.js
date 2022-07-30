import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar.js';
import NotesPage from './pages/NotesPage.js';
import ProfilePage from './pages/ProfilePage.js';
import FriendsPage from './pages/FriendsPage.js';
import TasksPage from './pages/TasksPage.js';
import GroupTasksPage from './pages/GroupTasksPage';

function App() {
  
  var sidebarCurrPageElement = null;
  const getCurrentPageElement = (el) => {
    sidebarCurrPageElement = el;
  }

  const setCurrentPageElement = (text) => {
    sidebarCurrPageElement.textContent = text;
  }

  return (
    <>
      <Router>
        <Sidebar handleGetCurrentPageElement={getCurrentPageElement} />
        <Routes>
          <Route path = '/' exact element = {<NotesPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/profile' exact element = {<ProfilePage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/friends' exact element = {<FriendsPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/tasks' exact element = {<TasksPage handleSetCurrentPage={setCurrentPageElement} />} />
          <Route path = '/group-tasks' exact element = {<GroupTasksPage handleSetCurrentPage={setCurrentPageElement} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
