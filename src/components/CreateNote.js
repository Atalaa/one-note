import React from 'react';
import { useState } from 'react';

const CreateNote = (props) => {
  
  const [note,setNote] = useState({ //note object
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setNote(prevNote => {
      return { //new object
        ...prevNote, 
        [name]: value //add new value at the end 
      };
    });
  }

  const submitNote = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "", 
      content:""
    });
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

        <button onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNote;