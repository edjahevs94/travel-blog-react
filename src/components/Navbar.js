import React from "react";
import logo from "../images/globe-icon-white-8.jpg"

export default function Navbar() {
    return(
        <nav className="nav">
            <div className="ms-3 mt-2">
                <div className="d-flex align-content-center">
                    <img src={logo} className="nav--logo" alt="logo" />
                    <p className="mt-1 ms-2 nav--title">my travel journal</p>
                </div>
            </div>
        </nav>
    )
}