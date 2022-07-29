import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './NotesPage.css';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

export default function NotesPage() {

    useEffect(() => {
        sessionStorage.setItem("currentPage", "Notes");
        ReactDOM.render(
            React.createElement(Note, {noteIdx: null}), 
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

    function removeAllNotes() {
        noteIdx = 0;
        localStorage.setItem('noteIdx', noteIdx);
        localStorage.setItem('allNotes', null);
        ReactDOM.render(
            React.createElement(Note, {noteIdx: null}),
                document.getElementById('allNotes')
        );
    }

    return (
        <div>
            <div className = 'content'>
                <button onClick={addNote} className='addNoteButton'>Add Note</button>
                <button onClick={removeAllNotes} className='addNoteButton'>{<FaIcons.FaTrash />} Delete All</button>
                <button className='save-button'>{<FaIcons.FaSave />} Save</button>
                <div id='allNotes'/>
            </div>
            
        </div>

    )
}
