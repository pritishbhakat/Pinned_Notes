import React from "react";
import "../style/styles.css";

let date = new Date();
let year = date.getFullYear();

function Footer(){
    return (
    <div>
    <footer>
        <p>Copyright © {year}</p>
        <p>Developed By PRiTiSh 😎</p>
    </footer>

    </div> 
    );
}

export default Footer;