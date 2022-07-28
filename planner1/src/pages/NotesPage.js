import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './NotesPage.css';
import Note from '../components/Note.js';

export default function NotesPage() {

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
                document.getElementById('allAssignments')
        );
    }

    return (
        <div>
            <div className = 'content'>
                <div id='allNotes'/>

                <div className = 'notes'>
                    <div className = 'note-toolbar'>
                    </div>
                    <p>fffffffff</p>
                </div>
            </div>
            
        </div>

    )
}
