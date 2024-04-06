import React, { Fragment, useEffect, useState } from 'react'
import "./HandSlider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useFetch from '../../components/fetch/useFetch.jsx';

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
            original_title:"hero no 1",
            poster_path: "client/src/assets/images/openhaimer.jpg",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 2,
            original_title:"hero no 1",
            poster_path: "client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 3,
            original_title:"hero no 1",
            original_name:"hero no 2",
            poster_path: "client/src/assets/images/da92a39b19b38d7c9b6e839bfff30d13.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 5,
            original_title:"hero no 1",
            original_name:"hero no 2",
            poster_path: "client/src/assets/images/7c40e7950bccd488ce91b53447207cad.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            id: 6,
            original_title:"hero no 1",
            original_name:"hero no 2",
            poster_path: "client/src/assets/images/openhaimer.jpg",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            popularity: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
    ];

    return (
        <section>
            <div className="container">
                <h3 className='SectionLable'>Top Hand-Pick Suggestions {">"}</h3>
                <div className='arrows'>
                </div>
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
                            nav:false,
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
