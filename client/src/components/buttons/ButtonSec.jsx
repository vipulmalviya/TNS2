import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const ButtonSec = ({ children , linkprop }) => {
    return (
        <button className='mainbtnSec align-items-center d-flex'>
            <Link className='d-flex align-items-center justify-content-center gap-1' to={linkprop}>
                {children}
            </Link>
        </button>
    )
}

export default ButtonSec
