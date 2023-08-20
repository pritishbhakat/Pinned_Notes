import React from "react";
import "../style/styles.css";
import EditNoteIcon from '@mui/icons-material/EditNote';

function Header(){
    return (
    <div>
    <header className="header">
    <h1> <EditNoteIcon/>  Pinned Notes</h1>
    </header>

    </div> 
    );
}

export default Header;