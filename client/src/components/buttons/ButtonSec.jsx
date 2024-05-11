import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const ButtonSec = ({blackbtn, children , linkprop }) => {
    return (
        <button className='mainbtnSec align-items-center d-flex'>
            <Link blackbtn className='d-flex align-items-center justify-content-center gap-2' to={linkprop}
            >
                {children}
            </Link>
        </button>
    )
}

export default ButtonSec
