import React from "react";
import '../styles/Header.scss'

function Header({ children }) {
    return (
        <nav className="navbar">
            <a className="navbar__logo" href="/">
                AD
            </a>
            <div className="navbar__menu">
                { children }
            </div>
        </nav>
    )
}

export { Header }