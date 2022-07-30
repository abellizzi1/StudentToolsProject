
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './NotesPage.css';
import Note from '../componentsOld/Note.js';
import * as FaIcons from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../componentsOld/NotesList.js';

export default function NotesPage() {

    const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		}
	]);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
        <div>
            <div className='content'>
                <NotesList
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
		    </div>
        </div>
		
	)
}
