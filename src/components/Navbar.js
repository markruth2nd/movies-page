import React from "react";
import "../styles/Navbar.css";


function Navbar() {
    return (
       <>
        <nav>
            <div id="logo">
            <a href="index.html">Search4Movies</a>
            </div>
            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Comedies</a></li>
                    <li><a href="index.html">Anime</a></li>
                    <li><a href="index.html">Movie Request</a></li>
                </ul>
            </div>
        </nav>
       </>
    )
}

export default Navbar;