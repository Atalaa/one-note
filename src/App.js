import React, { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote'

const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote}/>
      {
        notes.map(noteItem => {
          return (
            <Note title={noteItem.title} content={noteItem.content}/>    
          )
        })
      }
      <Footer />
    </div>
  );
};

export default App;
