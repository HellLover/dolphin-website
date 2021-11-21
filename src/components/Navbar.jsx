import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";

function Navbar() {
    return(
        <navbar className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <img src={Logo} alt="logo" className="logo" />
                </li>
                <li className="nav-item">
                    <a href="https://discord.com/api/oauth2/authorize?client_id=713713873915478036&permissions=8&scope=bot" target="_blank" rel="noreferrer">Invite</a>
                </li>
                <li className="nav-item">
                    <a href="https://discord.gg/TYhSGhWGvm" target="_blank" rel="noreferrer">Support</a>
                </li>
                <li className="nav-item">
                    <a href="/" rel="noreferrer">Commands</a>
                </li>
                <li className="nav-item">
                    <button className="btn">
                        <i class='bx bx-log-in'></i>
                        <a href="/">Login</a>
                    </button>
                </li>
            </ul>
        </navbar>
    )
}

export default Navbar;