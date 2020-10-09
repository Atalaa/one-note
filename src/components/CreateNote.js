import React from 'react';
import { useState } from 'react';

const CreateNote = () => {
  const [note,setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setNote(prevNote => {
      return {
        ...prevNote, [name]: value
      };
    });
  }

  const submitNote = (e) => {
    e.preventDefault(); 
    
  }


  return (
    <div>
      <form>
        <input 
          name="title" 
          onChange={handleChange} 
          value={note.title} 
          placeholder="Title" 
        />

        <textarea 
          name="content" 
          onChange={handleChange} 
          value={note.content} 
          placeholder="Take a note..." 
          rows="3" 
        />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;