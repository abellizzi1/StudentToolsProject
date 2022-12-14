import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';

const Note = ({ id, text, handleDeleteNote, handleChangeNote }) => {
	
    const [noteText, setNoteText] = useState(text);

    const handleChange = (event) => {
        var trueValue = event.target.value;
        setNoteText(trueValue);
        handleChangeNote(id, trueValue);
    }
    
    
    return (
		<div className='notes'>
			<textarea
                id={id}
                className='inputNote' 
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-toolbar'>
                <button 
                onClick={() => handleDeleteNote(id)}
                className='close-button'>
                    {<FaIcons.FaWindowClose />}
                </button>
			</div>
		</div>
	);
};

export default Note;