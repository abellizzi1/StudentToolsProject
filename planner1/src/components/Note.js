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
                var noteContent = notesArr[i];
                i++;
            }
        }

        if (this.props.noteIdx != null)
        {
            var noteIndex = this.props.noteIdx;
        }

        return (
            this.state.notes
        )
    }

}

export default Note;