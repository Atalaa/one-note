import React, { useState } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Fab, Zoom } from '@material-ui/core';



const CreateNote = (props) => {
  
  const [note,setNote] = useState({ //note object
    title: "",
    content: ""
  });

  const [expandedArea, setExpandedArea] = useState(false);

  // e is the event object passed into the event handler
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNote(prevNote => {
      return { //new object
        ...prevNote, 
        [name]: value //add new value/element at the end 
      };
    });
  }

  const handleExpansion = () => {
    setExpandedArea(true);
  }

  const submitNote = (e) => {
    e.preventDefault();

    if(note.title === "" && note.content === ""){
      return;
    }
    props.onAdd(note);
    setNote({
      title: "", 
      content:""
    });
  }


  return (
    <div>
      <form onSubmit={submitNote} className="create-note">

        <input 
          name="title" 
          onClick={handleExpansion}
          onChange={handleChange} 
          value={note.title} 
          placeholder="Title" 
        />
        
        {
          expandedArea &&
          <textarea 
            name="content" 
            onChange={handleChange} 
            value={note.content} 
            placeholder="Take a note..." 
            rows="3"
          />
        }

        <Zoom in={expandedArea}>
          <Fab type="submit">
            <AddRoundedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;