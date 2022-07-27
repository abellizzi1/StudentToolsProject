import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotesPage from './NotesPage.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' exact element = {<NotesPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
