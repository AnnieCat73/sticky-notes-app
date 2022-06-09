import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './index.css';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: ""
  }]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />

      <Footer />
    </div>
  )
};

export default App;
