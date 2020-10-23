import React, { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
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
      <CreateNote onAdd={addNote} />
      <div className="container">
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
      <Footer />
    </div>
  );
};

export default App;
