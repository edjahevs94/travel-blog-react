import React from "react";
import logo from "../images/globe-icon-white-8.jpg"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo} className="nav--logo" alt="logo" />
            <p>my travel journal</p>
        </nav>
    )
}