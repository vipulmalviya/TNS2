import React from 'react'
import "./Button.css"

const Button = ({children ,sty,  col}) => {
  return (
    <button className='mainbtn d-flex' style={{background:sty ,color:col}}>
      {children}
    </button>
  )
}

export default Button
