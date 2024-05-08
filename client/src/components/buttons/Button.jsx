import React from 'react'
import "./Button.css"

const Button = ({children ,sty,col,onClickprop,colorProp,value}) => {
  return (
    <button data-value={value} onClick={onClickprop} className={`add mainbtn align-items-center d-flex ${colorProp ? "bg-white" : "" }`} style={{background:sty ,color:col}}>
      {children}
    </button>
  )
}

export default Button
