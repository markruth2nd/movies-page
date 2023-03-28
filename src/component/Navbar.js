import React, { Component } from "react";
import "../styles/Navbar.css";


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
    return (
       <>
        <nav>
            <div id="logo">
            <a href="index.html">Search4Movies</a>
            </div>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="index.html">Comedies</a></li>
                    <li><a href="index.html">Games</a></li>
                    <li><a href="index.html">Anime</a></li>
                    <li><a href="index.html">Movie Request</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
       </>
    )
}
}

export default Navbar;