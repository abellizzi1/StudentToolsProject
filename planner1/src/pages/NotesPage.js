import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './NotesPage.css';
import Note from '../components/Note.js';

export default function NotesPage() {

    useEffect(() => {
        ReactDOM.render(
            React.createElement(Note, {noteIdx: noteIdx}), 
            document.getElementById('allNotes')
          );
      }, []);

    var noteIdx;
    if (localStorage.getItem('noteIdx') != null)
    {
        noteIdx = localStorage.getItem('noteIdx');
    }
    else
    {
        noteIdx = 0;
    }

    function addNote() {
        noteIdx++;
        localStorage.setItem('noteIdx', noteIdx);
        ReactDOM.render(
            React.createElement(Note, {noteIdx: noteIdx}),
                document.getElementById('allNotes')
        );
    }

    return (
        <div>
            <div className = 'content'>
                <button onClick={addNote} className='addNoteButton'>Add Note</button>
                <div id='allNotes'/>
            </div>
            
        </div>

    )
}
