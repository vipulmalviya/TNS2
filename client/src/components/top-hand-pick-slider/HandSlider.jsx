import React, { Fragment, useEffect, useState } from 'react'
import "./HandSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useFetch from '../../components/fetch/useFetch.jsx';
import { IoIosArrowForward } from 'react-icons/io';

const HandSlider = ({ title, type }) => {

    // document.querySelector(".owl-prev span").innerHTML = ">";


    // const [movies, setMovies] = useState([]);
    // const apiKey = '07d7941833065b1ddd54a729aaa554e5';
    // const fetchMovieData = async () => {
    //     try {
    //         const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&size=10`;
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

    // const { data, loading } = useFetch("/movie/upcoming")



    const Lcard = [
        {
            id: 1,
            poster_path: "client/src/assets/images/saltburn.png",
        },
        {
            id: 2,
            poster_path: "client/src/assets/images/KillersOfTheFlowerMoon.png",
        },
        {
            id: 3,
            poster_path: "client/src/assets/images/12fail.png",
        },
        {
            id: 4,
            poster_path: "client/src/assets/images/Barbie.png",
        },
        {
            id: 5,
            poster_path: "client/src/assets/images/ThreeOfUs.png",
        },
        {
            id: 6,
            poster_path: "client/src/assets/images/Sambhadur.png",
        },
        {
            id: 7,
            poster_path: "client/src/assets/images/wonka.png",
        },
        {
            id: 8,
            poster_path: "client/src/assets/images/salaar.png",
        },
        {
            id: 9,
            poster_path: "client/src/assets/images/killerSoup.png",
        },
        {
            id: 10,
            poster_path: "client/src/assets/images/napoleo.png",
        },
    ];

    return (
        <section>
            <div className="container">
                <h3 className='SectionLable '>Top Hand-Pick Suggestions <IoIosArrowForward /> </h3>
                <OwlCarousel className="HandCards d-flex"
                    items={4}
                    margin={20}
                    responsiveClass={false}
                    nav={true}
                    autoplay={false}
                    dots={false}
                    autoplayHoverPause={false}
                    responsive={{
                        0: {
                            items: 1,
                            // margin:250,
                            nav: false,
                        },
                        800: {
                            items: 2,
                            // margin: 100,
                        },
                        1000: {
                            items: 3,
                        }

                    }}>
                    {Lcard.map((elem, index) => <div className="card d-flex align-align-items-center justify-content-center" key={index}>
                        <h1 className='d-flex align-align-items-center justify-content-center'>{index + 1}</h1>
                        <img height={"100%"} width={"100%"} src={elem.poster_path} alt="" />
                    </div>)}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default HandSlider
