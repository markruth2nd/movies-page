import React, { Component } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";


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
            <a href="/">  
                        <div className="logo">
                            <a href={"/"} className="">
                                <img className="smallLogo" src={logo} alt="logo" />
                            </a>
                        </div>
                        </a>
                    </div>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/comedies">Comedies</a></li>
                    <li><a href="/games">Games</a></li>
                    <li><a href="/anime">Anime</a></li>
                    <li><a href="/movierequest">Movie Request</a></li>
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