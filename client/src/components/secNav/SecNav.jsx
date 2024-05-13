import React, { useState } from 'react'
import "./SecNav.css"
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
const SecNav = ({ NavFunc , show}) => {

    // const [Nav, setNav] = useState(false)


    return (
        <header className='SecNavHeader'>
            <nav className=' d-flex align-items-center'>
                <div className="left d-flex">
                    <Link to="" className="logo"><img height={"100%"} weight={"100%"} src="./src/assets/images/originallogo.svg" alt="" /></Link>
                </div>
                <div onClick={NavFunc} className=" Navright d-flex align-items-center justify-content-end">
                    { show ? <IoClose /> :  <img src="./src/assets/images/menu-alt-1.svg" alt="" />}
                </div>
            </nav >
        </header >
    )
}

export default SecNav
