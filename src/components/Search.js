import React from 'react'

function Search({ handleSearchNote, handleToggleDarkMode }) {
  return (
    <div className="search-container">
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        id=""
        placeholder='Type here to search...'
        className="search"
      />
      <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="toggle">Toggle Mode</button>
    </div>
  )
}

export default Search