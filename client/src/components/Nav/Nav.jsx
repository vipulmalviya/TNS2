import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <nav className='d-flex'>
                <div className="left d-flex">
                    <Link to="/" className="logo"><img height={"100%"} weight={"100%"} src="client/src/assets/images/Logo.svg" alt=""/></Link>
                </div>
                <div className="navM d-flex align-items-center justify-content-center">
                    <form action="" className='d-flex align-items-center justify-content-center'>
                        <img src="client/src/assets/images/search.svg" alt="" />
                        <input
                            // value={InputValue}
                            // onChange={onchangefunc}
                            type="text" placeholder='Search for anything... ' />
                    </form>
                </div>
                <div className="right d-flex">
                    <span className='Watchlist d-flex align-items-center'>
                        <p>My Watchlist</p>
                        <img height={"25%"} width={"25%"} src="client/src/assets/images/Ellipse 33.svg" alt="" />
                    </span>
                    <div className="hamburgur" >
                        <img height={"90%"} width={"90%"} src="client/src/assets/images/menu-alt.svg" alt="" />
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Nav
