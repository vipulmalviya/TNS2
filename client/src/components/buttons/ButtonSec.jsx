import React from 'react'
import "./Button.css"

const ButtonSec = ({ children }) => {
    return (
        <button className='mainbtnSec  d-flex'>
            {children}
        </button>
    )
}

export default ButtonSec
