import React from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'


const Card = ({ index, Poster, Title, catagory, watch }) => {
    return (
        <>
            <div className="card " key={index}>
                <img height={"400px"} width={"400px"} src={Poster} alt="" />
                <div className='movieDetails d-flex justify-content-between flex-column'>
                    <div className=' d-flex justify-content-between'>
                        <span className='position-relative gap-1 h-75 w-auto d-flex justify-content-start align-items-start flex-column '>
                            <h4>{Title}</h4>
                            <p>{catagory}</p>
                        </span>
                        <span className='position-relative gap-1 h-75 w-auto d-flex flex-column justify-content-start align-items-center'>
                            <img height={"30px"} src="client/src/assets/images/TNS 1.svg" alt="" />
                            <span className="number">{watch}</span>
                        </span>
                    </div>
                    <Button><Link to="/watchlist">+ Add to Watchlist</Link></Button>
                </div>
            </div>
        </>
    )
}

export default Card
