import React, { useState } from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const arr = [
  {
    img: "client/src/assets/images/oppenheimer.png",
  },
  {
    img: "client/src/assets/images/sambhadur.png",
  },
  {
    img: "client/src/assets/images/96ec47c5bba1a99388ccc5c88666398e.png",
  },
  {
    img: "client/src/assets/images/da92a39b19b38d7c9b6e839bfff30d13.png",
  }

]


const data = [
  {
    Poster: 'client/src/assets/images/openhaimer.jpg',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/openhaimer.jpg',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/openhaimer.jpg',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/openhaimer.jpg',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/openhaimer.jpg',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/openhaimer.jpg',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  }
]


const responsiveone = {
  superlargedesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2.5,
  },
  mobile: {
    // margin:"200px",
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const responsive = {
  superlargedesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2.5,
  },
  mobile: {
    // margin:"200px",
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};



const WatchlistPage = () => {
  return (
    <>
      <section className='headersection'>
        <div className="container">
          <div className='header d-flex'>
            <h2>My Watchlist </h2>
            <div className='watchlistbtn d-flex align-items-center justify-content-center gap-3'>
              <img height={"40px"} width={"40px"} src="client/src/assets/images/addbtn.svg" alt="" />
              <p className='mb-0 d-flex align-items-center justify-content-center'>Create New Watchlist</p>
            </div>
          </div>
          <div className='watchlistCards d-flex'>
            <div className="watchlistCard">
              <div className='gap-2 d-flex align-items-center justify-content-between'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"><img src="client/src/assets/images/Icon (7).svg" alt="" /></div>
              </div>
              <Carousel className='cardContainer d-flex '
                responsive={responsiveone}
              >
                {arr.map((elem, index) =>
                  <div className='card d-flex' key={index} style={{ backgroundImage: `url(${elem.img})` }}>
                  </div>
                )}
              </Carousel>
              <div className='range'>
                <span>5 Titles Watched out of 10 till Feb</span>
                <progress value="70" max="100"></progress>
              </div>
            </div>
            <div className="watchlistCard">
              <div className='gap-2 d-flex align-items-center justify-content-between'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"><img src="client/src/assets/images/Icon (7).svg" alt="" /></div>
              </div>
              <Carousel className='cardContainer d-flex '
                responsive={responsiveone}
              >
                {arr.map((elem, index) =>
                  <div className='card d-flex' key={index} style={{ backgroundImage: `url(${elem.img})` }}>
                  </div>
                )}
              </Carousel>
              <div className='range'>
                <span>5 Titles Watched out of 10 till Feb</span>
                <progress value="70" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Previously Watched Titles</h3>
            <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <span><img height="100%" width="100%" src="client/src/assets/images/tir.svg" alt="" /></span></span>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={true} />)}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Top Suggestions Matches with your Taste</h3>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={false} />)}
          </Carousel>
        </div>
      </section>
      <CuratedSlider title={"Curated Lists Just For You"} />

    </>

  )
}

export default WatchlistPage
