import React from "react";
import '../styles/Header.scss'

function Header({ children }) {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                AD
            </div>
            <div className="navbar__menu">
                { children }
            </div>
        </nav>
    )
}

export { Header }