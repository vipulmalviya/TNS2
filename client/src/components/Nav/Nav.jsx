import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { MdArrowForward, MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
const Nav = () => {

    const [Nav, setNav] = useState(false)
    const [show, setShow] = useState(false)

    function NavFunc(params) {
        setNav(!Nav)
    }

    return (
        <header>
            <nav className='d-flex align-items-center'>
                <div className="left d-flex">
                    <Link to="/" className="logo"><img height={"100%"} weight={"100%"} src="client/src/assets/images/originallogo.svg" alt="" /></Link>
                </div>
                <div className="navM align-items-center justify-content-end">
                    <form action="" className='d-flex align-items-center justify-content-center'>
                        <CiSearch />
                        <input
                            type="text" placeholder='Search for anything... ' />
                    </form>
                </div>
                <div className="rightt d-flex gap-3">
                    <span className='Watchlist d-flex align-items-center'>
                        <p>My Watchlist</p>
                        <img data-toggle="tooltip" title="My Profile"  height={"20%"} width={"20%"} src="client/src/assets/images/Ellipse 33.svg" alt="" />
                    </span>
                    <div className="hamburgur" onClick={NavFunc} >
                        <img height={"30px"} width={"30px"} src="client/src/assets/images/menu-alt-1.svg" alt="" />
                    </div>
                </div>
                <div className={`p-2 side-menu d-flex align-items-center justify-content-start flex-column ${Nav ? "open" : ""}`}>
                    <IoMdClose className='closebtn' onClick={NavFunc} />
                    <div className='w-75 d-flex justify-content-center flex-column '>
                        <div className="dropdown">
                            <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h2>Movies</h2>
                                {/* { true ?<MdOutlineKeyboardArrowUp /> :<MdKeyboardArrowDown>} */}
                            </button>
                            <ul className="dropdown-menu" >
                                <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                                <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                                <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h2>TV Series</h2>
                            </button>
                            <ul className="dropdown-menu" >
                                <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                                <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                                <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                            </ul>
                        </div>
                        <ul className='navbar-nav'>
                            <li><Link to="/WatchlistPage" className="dropdown-item" type="button">Curated Lists</Link></li>
                            <li><button className="dropdown-item" type="button">Weekend Watchlists</button></li>
                            <li><button className="dropdown-item" type="button">Film’s Club</button></li>
                            <li><button className="dropdown-item" type="button">Viewer’s Guide</button></li>
                        </ul>
                        {/* <br />
                        <br />
                        <hr />
                        <div className='logoutdiv d-flex align-items-center gap-2  m-lg-5'>
                            <RiLogoutBoxLine />
                            <h6>log out</h6>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Nav
