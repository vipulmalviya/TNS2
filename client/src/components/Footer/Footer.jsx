import React, { useState } from 'react'
import "./Footer.css"

const Footer = () => {


    return (
        <footer className='footer'>
            <div className="footerT d-flex">
                <div className='Flogo'>
                    <img src="client/src/assets/images/Logo.svg" alt="" />
                </div>
                <div className='social d-flex'>
                    <img src="client/src/assets/images/facebook.svg" alt="" />
                    <img src="client/src/assets/images/instagram.svg" alt="" />
                    <img src="client/src/assets/images/tweeter.svg" alt="" />
                </div>
            </div>
            <div className="footerM d-flex">
                <div className='footerM-l'>
                    <h2 className=''>
                        Still couldn’t figure out?<br /> What to watch?<br />
                        <span> Join our Fight-Club</span>
                    </h2>
                    <p>It’s free to join and helps finding underrated titles, around like minded there is a sense of cinema.</p>
                    <div className='footerbtns d-flex'>
                        <button><img src="client/src/assets/images/in.svg" alt="" /></button>
                        <button><img src="client/src/assets/images/Frame 50.svg" alt="" /></button>
                    </div>
                </div>
                <div className='footerM-r d-flex' >
                    <div>
                        <h3 className=''>Usefull links</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>About Thenextstream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy an Advance for us</p>
                                <p>Contact</p>
                            </div>
                            <div className='links'>
                                <p>About Thenextstream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy an Advance for us</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="search">
                            <input type="email" className="input-with-icon" placeholder='Bandiya would love to see your emails' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerB d-flex'>
                <p>© 2024 Silvertounge. All Rights Reserved.</p>
                <button><img src="client/src/assets/images/topbtn.svg" alt="" /></button>
            </div>
        </footer>
    )
}

export default Footer
