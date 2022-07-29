import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import * as FaIcons from 'react-icons/fa';

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
            var notesArr= JSON.parse(localStorage.getItem('allNotes'));
            var i = 0;

            while (i < notesArr.length)
            {
                var tempNoteIdx = notesArr[i];
                i++;
                var tempNoteContent = notesArr[i];
                i++;

                var tempInputIdx = "n" + tempNoteIdx;
                const tempRet = (
                    <div id={ReactHtmlParser(tempNoteIdx)} className = 'notes'>
                        <div className = 'note-toolbar'>
                            <button className='close-button'>{<FaIcons.FaSave />}</button>
                            <button className='close-button'>{<FaIcons.FaWindowClose />}</button>
                        </div>
                        <form>
                          <textarea className='inputNote' rows= "25" cols="100" id={ReactHtmlParser(tempInputIdx)} maxlength="1000" name={ReactHtmlParser(tempInputIdx)} placeholder="Type here to edit note"></textarea>
                        </form>
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
                        <button className='close-button'>{<FaIcons.FaSave />}</button>
                        <button className='close-button'>{<FaIcons.FaWindowClose />}</button>
                    </div>
                    <form>
                      <textarea className='inputNote' rows= "25" cols="100" id={ReactHtmlParser(tempInputIdx)} maxlength="1000" name={ReactHtmlParser(tempInputIdx)} placeholder="Type here to edit note"></textarea>
                    </form>
                </div>
            );

            notesArr.push(noteIndex);
            notesArr.push("");
            this.state.notes.push(ret);
        }

        localStorage.setItem('allNotes', JSON.stringify(notesArr));
        console.log(localStorage.getItem('allNotes'));

        return (
            this.state.notes
        )
    }

}

export default Note;