import { Carousel } from 'bootstrap'
import React, { Fragment } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CategoryPage = () => {


    const array = [
        {
            category: "AcademyWinner",
            value: "Academy Winner",
        },
        {
            category: "AcademyWinner",
            value: "Around the Globe",
        },
        {
            category: "AcademyWinner",
            value: "Academy Winner",
        },
        {
            category: "AcademyWinner",
            value: "User’s Choice",
        },
        {
            category: "AcademyWinner",
            value: "Handpicked",
        },
        {
            category: "AcademyWinner",
            value: "Classics",
        },
        {
            category: "AcademyWinner",
            value: "Family Friendly",
        },
        {
            category: "AcademyWinner",
            value: "Film Festival Favourtives",
        },
        {
            category: "AcademyWinner",
            value: "Film Festival Favourtives",
        },
        {
            category: "AcademyWinner",
            value: "Film Festival Favourtives",
        },
    ]



    return (
        <Fragment>
            <section className='pt-0'>
                <div className='innerContianer d-flex gap-2 align-items-center justify-content-center'>
                    <div className="dropdown">
                        <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>TV Series</h6>
                        </button>
                        <ul className="dropdown-menu" >
                            <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                            <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                            <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                        </ul>
                    </div>
                    <button data-name="topRated" className='Categorybtns Active'>
                        Top Rated
                    </button>
                    {array.map((elem, index) => {
                        return <button key={index} data-name={elem.category} className='Categorybtns Active'>
                            {elem.value}
                        </button>
                    })}
                </div>
            </section>
        </Fragment>
    )
}

export default CategoryPage
