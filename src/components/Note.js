import React from 'react'


function Note({ id, text, handleDeleteNote }) {
  return (
    <div className="note">
      <p>{text}</p>
      <button onClick={() => handleDeleteNote(id)} className="note-delete">X</button>
    </div>
  )
}

export default Note;