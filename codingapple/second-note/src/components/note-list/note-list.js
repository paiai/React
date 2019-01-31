import React from 'react';
import './note-list.scss';
import Note from './note/note';

class NoteList extends React.Component {

    static defaultProps = {
        Notes: []
    }
    render() {
        const noteListReturn = (notes) => {
            return notes.map((note, idx) => {
                return (
                    <Note 
                        key={idx}
                        noteNumber={idx}
                        title={note.title} 
                        text={note.text} 
                        date={note.date} 
                        edited={note.edited} 
                        changeNote={this.props.changeNote}
                    />
                );
            });
        };

        return (
            <div id="note-list-container">
                <div id="note-list">{noteListReturn(this.props.notes)}</div>
            </div>
        );
    }
}

export default NoteList;