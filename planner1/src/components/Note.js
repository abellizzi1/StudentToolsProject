import React from 'react'
import ReactHtmlParser from 'react-html-parser';

class Note extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            notes: []
        }
    }

    render() {
        this.state.notes = [];
        var notesArr = [];
        

        if (localStorage.getItem('allNotes') != null)
        {
            notesArr = JSON.parse(localStorage.getItem('allNotes'));
            var i = 0;
            while (i < notesArr.length)
            {
                var tempNoteIdx = notesArr[i];
                i++;
                var tempNoteContent = notesArr[i];
                i++;

                const tempRet = (
                    <div id={ReactHtmlParser(tempNoteIdx)} className = 'notes'>
                        <div className = 'note-toolbar'>
                        </div>
                        <p>{ReactHtmlParser(tempNoteContent)}</p>
                    </div>
                );
                this.state.notes.push(tempRet);
            }
        }

        if (this.props.noteIdx != null)
        {
            var noteIndex = this.props.noteIdx;

            const ret = (
                <div id={ReactHtmlParser(noteIndex)} className = 'notes'>
                    <div className = 'note-toolbar'>
                    </div>
                    <p></p>
                </div>
            );

            this.state.notes.push(ret);
            notesArr.push(noteIndex);
            notesArr.push(" ");
            localStorage.setItem('allNotes', JSON.stringify(notesArr));
        }

        return (
            this.state.notes
        )
    }

}

export default Note;