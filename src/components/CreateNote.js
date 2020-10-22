import React, { useState } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Fab, Zoom } from '@material-ui/core';



const CreateNote = (props) => {
  
  const [note,setNote] = useState({ //note object
    title: "",
    content: ""
  });

  const [expandedArea, setExpandedArea] = useState(false);

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
    //handle if note is empty and click add
    props.onAdd(note);
    setNote({
      title: "", 
      content:""
    });
  }


  return (
    <div>
      <form className="create-note">

        {
          expandedArea &&
          <input 
            name="title" 
            onChange={handleChange} 
            value={note.title} 
            placeholder="Title" 
          />
        }

        <textarea 
          name="content" 
          onChange={handleChange} 
          onClick={handleExpansion}
          value={note.content} 
          placeholder="Take a note..." 
          rows={expandedArea ? 3 : 1} 
        />

        <Zoom in={expandedArea}>
          <Fab onClick={submitNote}>
            <AddRoundedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;