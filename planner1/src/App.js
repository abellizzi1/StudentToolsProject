import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar.js';
import NotesPage from './pages/NotesPage.js';

function App() {
  sessionStorage.setItem("currentPage", "Notes");

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path = '/' exact element = {<NotesPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
