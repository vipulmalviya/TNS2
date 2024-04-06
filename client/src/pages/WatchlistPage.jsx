import React, { useState } from 'react'
import "./WatchlistPage.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from "./../components/buttons/Button.jsx";
import ButtonSec from "./../components/buttons/ButtonSec.jsx";
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';



const arr = [
  {
    img: "client/src/assets/images/7c40e7950bccd488ce91b53447207cad.png",
  },
  {
    img: "client/src/assets/images/7c40e7950bccd488ce91b53447207cad.png",
  },
  {
    img: "client/src/assets/images/7c40e7950bccd488ce91b53447207cad.png",
  }

]


const data = [
  {
    Poster: 'client/src/assets/images/da92a39b19b38d7c9b6e839bfff30d13.png',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/sambhadur.png',
    Title: 'title',
    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  },
  {
    Poster: 'client/src/assets/images/949842150786a7e1e3aeee4a1b3be7bd.png',
    Title: 'title',

    watch: "97.3",
    catagory: "Biography, Drama",
  }
]



const WatchlistPage = () => {
  return (
    <>
      <section className='headersection'>
        <div className="container">
          <div className='header d-flex'>
            <h2>My Watchlist </h2>
            <div className='d-flex align-items-center justify-content-center gap-3'>
              <img height={"30px"} width={"30px"} src="client/src/assets/images/addbtn.svg" alt="" />
              <p className='mb-0 d-flex align-items-center justify-content-center'>Create New Watchlist</p>
            </div>
          </div>
          <div className='watchlistCards d-flex'>
            <div className="watchlistCard">
              <div className='gap-2'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"></div>
              </div>
              <div className='cardContainer d-flex'>
                {arr.map((elem, index) =>
                  <div className='card d-flex' key={index} style={{ backgroundImage: `url(${elem.img})` }}>

                  </div>
                )}
              </div>
              <div className='range'>
                <p>5 Titles Watched out of 10 till Feb</p>
                <progress id="file" value="20" max="100" />
              </div>
            </div>
            <div className="watchlistCard">
              <div className='gap-2'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"></div>
              </div>
              <div className='cardContainer d-flex'>
                {arr.map((elem, index) =>
                  <div className='card d-flex' key={index} style={{ backgroundImage: `url(${elem.img})` }}>

                  </div>
                )}
              </div>
              <div className='range'>
                <p>5 Titles Watched out of 10 till Feb</p>
                <progress id="file" value="20" max="100" />
              </div>
            </div>
          </div>
        </div>
      </section >
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h2>Previously Watched Titles</h2>
            <div className="seeAllBtn">See All</div>
          </div>
          <OwlCarousel className="MovieCards d-flex"
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
                items: 3,
                nav: false,
              },
              1000: {
                items: 4,
                nav: false,
              },
            }}>
            {data.map((elem, index) => <div className="card " key={index}>
              <img height={"400px"} width={"400px"} src={elem.Poster} alt="" />
              <div className='movieDetails'>
                <span className='d-flex'>
                  <h3>{elem.Title}</h3>
                  <img height={"30px"} src="client/src/assets/images/TNS 1.svg" alt="" />
                </span>
                <span className='d-flex'>
                  <p>{elem.catagory}</p>
                  <span className="number">{elem.watch}</span>
                </span>
                <Button>+ Add to Watchlist</Button>
              </div>
            </div>)}
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h2>Top Suggestions Matches with your Taste</h2>
            <div className="seeAllBtn">See All</div>
          </div>
          <OwlCarousel className="MovieCards d-flex"
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
                items: 3,
                nav: false,
              },
              1000: {
                items: 4,
                nav: false,
              },
            }}>
            {data.map((elem, index) => <div className="card" key={index}>
              <img height={"400px"} width={"400px"} src={elem.Poster} alt="" />
              <div className='movieDetails'>
                <span className='d-flex'>
                  <h3>{elem.Title}</h3>
                  <img height={"30px"} src="client/src/assets/images/TNS 1.svg" alt="" />
                </span>
                <span className='d-flex'>
                  <p>{elem.catagory}</p>
                  <span className="number">{elem.watch}</span>
                </span>
                <ButtonSec><img height={"20px"} width={"20px"} src="client/src/assets/images/pen-line.svg" alt="" />Write a Review</ButtonSec>
              </div>
            </div>)}
          </OwlCarousel>
        </div>
      </section>
      <CuratedSlider title={"Curated Lists Just For You"}/>

    </>

  )
}

export default WatchlistPage
