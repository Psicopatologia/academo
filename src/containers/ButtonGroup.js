import React from 'react'
import '../styles/ButtonGroup.scss'

function ButtonGroup({ children }) {
    return (
        <div className='buttonGroup'>
            { children }
        </div>
    )
}

export { ButtonGroup }