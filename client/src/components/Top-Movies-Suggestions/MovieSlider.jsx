import React, { useEffect, useState } from 'react';
import "./movieSlider.css";
import OwlCarousel from 'react-owl-carousel';
import Card from '../card/Card.jsx';
import useFetch from '../fetch/useFetch.jsx';
import { Link } from 'react-router-dom';




const MovieSlider = ({ title, type }) => {
    // const [movies, setMovies] = useState([]);
    // const apiKey = '07d7941833065b1ddd54a729aaa554e5';
    // const fetchMovieData = async () => {
    //     try {
    //         const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}`;
    //         const response = await fetch(url);
    //         const jsonData = await response.json();
    //         setMovies(jsonData.results);
    //     } catch (error) {
    //         console.error('Error fetching movie data:', error);
    //     }
    // };
    // useEffect(() => {
    //     fetchMovieData();
    // },[type]);


    const Lcard = [
        {
            id: 1,
            original_title:"Saltburn",
            poster_path: "client/src/assets/images/openhaimer.jpg",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 2,
            original_title:"Killers of the Flower Moon",
            poster_path: "client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 3,
            original_title:"12th Fail",
            original_name:"hero no 2",
            poster_path: "client/src/assets/images/da92a39b19b38d7c9b6e839bfff30d13.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 5,
            original_title:"Barbie",
            original_name:"hero no 2",
            poster_path: "client/src/assets/images/7c40e7950bccd488ce91b53447207cad.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 6,
            original_title:"Three of us",
            original_name:"hero no 2",
            poster_path: "client/src/assets/images/openhaimer.jpg",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        }
        ];
    // const { data, loading } = useFetch(`/discover/${type}`)

    // const skItem = () => {
    //     return (
    //         <div className="card">
    //             <div className='posterBlock skeleton' />
    //             <div className='textBlock skeleton'>
    //                 <span className='d-flex'>
    //                     <h4></h4>
    //                     <img height={"30px"} src="" alt="" />
    //                 </span>
    //                 <span className='d-flex'>
    //                     <p></p>
    //                     <span className="number"></span>
    //                 </span>
    //                 <button className='skeleton'><Link to=""></Link></button>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <section>
            <div className="container">
                <h3 className='SectionLable'>{title}{">"}</h3>
                { <OwlCarousel className="MovieCards flex"
                    items={5}
                    margin={10}
                    nav={true}
                    dots={false}
                    autoplay={true}
                    autoplayHoverPause={true}
                    responsive={{
                        0: {
                            items: 1,
                            nav: false,
                        },
                        768: {
                            items: 2,
                        },
                        1000: {
                            items: 4,
                        }
                    }}>
                    {Lcard.map((elem) =>
                        <Card key={elem.id} Poster={elem.poster_path} Title={elem.original_title || elem.original_name} catagory="movie" watch={elem.popularity} />
                    )}
                </OwlCarousel>}
            </div>
        </section>
    )
}

export default MovieSlider;
