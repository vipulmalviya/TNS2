import React, { Fragment, useEffect, useState } from 'react'
import "./HandSlider.css"

const HandSlider = ({ title, type }) => {

    return (
        <section className='HandCards'>
            <div className='container'>
                <div id="carouselExample" className="carousel slide">
                    <h3 className='SectionLable'>Top Hand-Picked Suggestions</h3>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <div className="card d-flex flex-row">
                                <h2>1</h2>
                                <img src="client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png" alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card d-flex flex-row">
                                <h2>2</h2>
                                <img src="client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png" alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card d-flex flex-row">
                                <h2>3</h2>
                                <img src="client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png" alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card d-flex flex-row">
                                <h2>3</h2>
                                <img src="client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png" alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card d-flex flex-row">
                                <h2>3</h2>
                                <img src="client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section >
    )
}

export default HandSlider
