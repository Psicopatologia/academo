import React from "react";
import '../styles/DropdownUser.scss'

function DropdownUser({ children, active }) {
    return (
        <div className={`dropdownUser ${active ? 'dropdownUser--active':''}`}>
            { children }
        </div>
    )
}

export { DropdownUser }