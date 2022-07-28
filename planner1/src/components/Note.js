import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const MultilineEdit = ({ value, setValue }) => {
    const [editingValue, setEditingValue] = React.useState(value);
  
    const onChange = (event) => setEditingValue(event.target.value);
  
    const onKeyDown = (event) => {
      if (event.key === "Enter" || event.key === "Escape") {
        event.target.blur();
      }
    };
  
    const onBlur = (event) => {
      if (event.target.value.trim() === "") {
        setEditingValue(value);
      } else {
        setValue(event.target.value);
      }
    };
  
    const onInput = (target) => {
      if (target.scrollHeight > 33) {
        target.style.height = "5px";
        target.style.height = target.scrollHeight - 16 + "px";
      }
    };
  
    const textareaRef = React.useRef();
  
    React.useEffect(() => {
      onInput(textareaRef.current);
    }, [onInput, textareaRef]);
  
    return (
      <textarea
        rows={1}
        aria-label="Field name"
        value={editingValue}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onInput={(event) => onInput(event.target)}
        ref={textareaRef}
      />
    );
  };
  
  const EditableText = () => {
    const [multilineValue, setMultilineValue] = React.useState(
      "This is the multi-line version!"
    );
  
    return (
      <div id="container">
        <MultilineEdit value={multilineValue} setValue={setMultilineValue} />
      </div>
    );
  };

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
        
        if (this.props.noteIdx != null)
        {
            var noteIndex = this.props.noteIdx;

            const ret = (
                <div id={ReactHtmlParser(noteIndex)} className = 'notes'>
                    <div className = 'note-toolbar'>
                    </div>
                    <EditableText />
                </div>
            );

            notesArr.push(noteIndex);
            notesArr.push("");
        }

        if (localStorage.getItem('allNotes') != null)
        {
            var notesArrTemp = JSON.parse(localStorage.getItem('allNotes'));
            var i = 0;
            while (i < notesArrTemp.length)
            {
                notesArr.push(notesArrTemp[i]);
                i++;
            }

            i = 0;
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
                        <EditableText />
                    </div>
                );
                this.state.notes.push(tempRet);
            }
        }

        
        localStorage.setItem('allNotes', JSON.stringify(notesArr));

        return (
            this.state.notes
        )
    }

}

export default Note;