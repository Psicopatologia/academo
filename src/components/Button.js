import React from 'react';
import '../styles/Button.scss'

function Button(props) {
    return (
        <button onClick={props.click} className={`btn ${props.className}`}>{ props.children }</button>
    )
}

export { Button };