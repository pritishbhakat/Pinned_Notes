import React, { useState } from "react";
import "../style/styles.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded,setExpanded]= useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    //setExpanded(false);
    event.preventDefault();
  }

  const handleClick = ()=>{
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {expanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? "3" : "1"}
        />
        <Zoom in={expanded}>
        <Fab onClick={submitNote}><AddIcon/></Fab>

        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
