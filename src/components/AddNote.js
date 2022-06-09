import { useState } from 'react'
import React from 'react'

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("")

  const handleChange = (e) => {
    setNoteText(e.target.value);
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }

  }
  return (
    <div className="app-control">

      <button
        className="add-btn"
        onClick={handleSaveClick}>+ New Note
      </button>


      <div className="note new">
        <textarea
          value={noteText}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          id=""
          cols="30"
          rows="12">
        </textarea>
        <span className="note-delete">X</span>
      </div>
    </div>

  )
}

export default AddNote