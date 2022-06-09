import React from 'react'


function Note({ id, title, text, handleDeleteNote }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={() => handleDeleteNote(id)} className="note-delete">X</button>
    </div>
  )
}

export default Note;