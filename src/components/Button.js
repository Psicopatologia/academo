import React from 'react';
import '../styles/Button.scss'

function Button(props) {
    return (
        <button
            onClick={props.click}
            className={`btn btn--${props.color} ${props.className}`}>
                {props.children}
            </button>
    )
}

export { Button };