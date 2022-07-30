import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar.js';
import NotesPage from './pages/NotesPage.js';
import ProfilePage from './pages/ProfilePage.js';

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
        <Sidebar handleGetElement={getCurrentPageElement} />
        <Routes>
          <Route path = '/' exact element = {<NotesPage handleSetElement={setCurrentPageElement} />} />
          <Route path = '/profile' exact element = {<ProfilePage handleSetElement={setCurrentPageElement} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
