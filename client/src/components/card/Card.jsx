import React, { useState } from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'
import ButtonSec from '../buttons/ButtonSec'
import { LuPencilLine } from "react-icons/lu";


const Card = ({ index, Poster, Title, catagory, watch ,btn }) => {
    return (
        <>
            <div className="singlecard " key={index}>
                <img height={"400px"} width={"100%"} src={Poster} alt="" />
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
                    </div>{
                    btn
                        ?<Button><Link to="/watchlist">+ Add to Watchlist</Link></Button>
                            :<ButtonSec><Link to="/watchlist"> <LuPencilLine /> Write a Review </Link></ButtonSec>
                    }
                </div>
            </div>
        </>
    )
}

export default Card
