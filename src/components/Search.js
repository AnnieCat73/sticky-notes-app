import React from 'react'

function Search({ handleSearchNote }) {
  return (
    <div>
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        id=""
        placeholder='Type here to search...'
        className="search"
      />
    </div>
  )
}

export default Search