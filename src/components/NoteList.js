import React from 'react'
import Note from './Note';
import AddNote from './AddNote';

function NoteList({ notes, handleAddNote, handleDeleteNote }) {

  return (
    <div className='notelist-container'>
      <AddNote handleAddNote={handleAddNote} />
      <div className='notes-list'>
        {notes.map((note) => <Note
          id={note.id}
          title={note.title}
          text={note.text}
          handleDeleteNote={handleDeleteNote}
        />)}
      </div>


    </div>
  )
}

export default NoteList;
