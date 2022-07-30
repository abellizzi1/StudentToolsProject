import './NotesPage.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Note from '../components/Note.js';
import * as FaIcons from 'react-icons/fa';

export default function NotesPage() {

    useEffect(() => {
		sessionStorage.setItem('currentPage', 'Notes');

		const savedNotes = JSON.parse(
			localStorage.getItem('allNotesData')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
		console.log(localStorage.getItem('allNotesData'));
	}, []);

	const [notes, setNotes] = useState([
	]);

    const addNote = () => {
		const newNote = {
			id: nanoid(),
			text: ''
		};
		const newNotes = [...notes, newNote];
		notes.push(newNote);
		setNotes(newNotes);
		localStorage.setItem('allNotesData', JSON.stringify(notes));
	};

    const changeNote = (id, text) => {
        var i = 0;
		const notesTemp = notes;
		while (i < notesTemp.length)
		{
			if (notesTemp[i].id === id)
			{
				notesTemp[i].text = text;
				setNotes(notesTemp);
				break;
			}
			i++;
		}
		localStorage.setItem('allNotesData', JSON.stringify(notes));
    }

    const deleteAllNotes = () => {
        setNotes([]);
		localStorage.setItem('allNotesData', null);
    }

    const deleteNote = (id) => {
		var i = 0;
		const notesTemp = notes;
		while (i < notesTemp.length)
		{
			if (notesTemp[i].id === id)
			{
				notesTemp.splice(i, 1);
				setNotes(notesTemp);
				break;
			}
			i++;
		}
		localStorage.setItem('allNotesData', JSON.stringify(notes));
		window.location.reload();
	};

    return(
            <div className='content'>
                <button onClick={addNote} className='addNoteButton'>Add Note</button>
                <button onClick={deleteAllNotes} className='addNoteButton'>{<FaIcons.FaTrash />} Delete All</button>
				<div>
					{notes.map((note) => (
						<Note
							id={note.id}
							text={note.text}
							handleDeleteNote={deleteNote}
							handleChangeNote={changeNote}
						/>
					))}
				</div>
            </div>
    )
}
