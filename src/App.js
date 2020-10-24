import React, { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import CreateNote from './components/CreateNote'

const App = () => {

  const [notes, setNotes] = useState([]);
  
  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [
        ...prevNotes, 
        newNote //add new note/element at the end
      ];
    });
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((currentItem, index) => {
        return index !== id;
      })
    });
  };

  return (
    <div>
      <Header />
      <CreateNote 
        onAdd={addNote} 
        maxNotes={notes}
        />

      <div>
      {
        notes.map((noteItem, index) => {
          return (
            <Note 
              key={index} 
              id={index} 
              title={noteItem.title} 
              content={noteItem.content}
              onDelete={deleteNote}
              />    
          )
        })
      }
      </div>
    </div>
  );
};

export default App;
