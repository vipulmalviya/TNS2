import React, { Fragment } from 'react'
import "../App.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from "./../components/buttons/Button.jsx"
import ButtonSec from "./../components/buttons/ButtonSec.jsx"
import HandSlider from '../components/top-hand-pick-slider/HandSlider.jsx';
import MovieSlider from '../components/Top-Movies-Suggestions/MovieSlider.jsx';
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';

const Home = () => {
  return (
    <Fragment>
      <section className='homeCarousel position-relative'>
        <Carousel className='w-100' >
          <Carousel.Item>
            <img style={{ height: "90vh", width: "100%", objectFit: "cover", }} src="client/src/assets/images/openhaimer.jpg" alt="" />
            <Carousel.Caption className='Caption d-flex flex-column justify-content-center align-items-start'>
              <img height={"100%"} width={"100%"} src="client/src/assets/images/oplog.svg" alt="" className='mb-3 movieLogo'></img>
              <div className='w-100 aboutMovie d-flex justify-content-start align-items-center mb-2'>
                <p className='mb-0'>movie</p>
                <p className='mb-0'>2023</p>
                <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                  <img height={"10%"} width={"10%"} src="client/src/assets/images/Icon (5).svg" alt="" />
                  <p className='d-flex align-items-start justify-content-center m-0'>23465</p>
                </span>
              </div>
              <p className='movieDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus natus id quidem</p>
              <div className='movieBtns w-100 gap-3 d-flex'>
                <Button>
                  <img height={"17px"} width={"17px"} src="client/src/assets/images/play.svg" alt="" />
                  <Link to="/SingleMoviePage">stream now</Link>
                </Button>
                <ButtonSec>
                  <img height={"17px"} width={"17px"} src="client/src/assets/images/plus-large.svg" alt="" />
                  <Link to="/curatedPage">add to watchlist</Link>
                </ButtonSec>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: "90vh", width: "100%", objectFit: "cover", }} src="client/src/assets/images/openhaimer.jpg" alt="" />
            <Carousel.Caption className='Caption d-flex flex-column justify-content-center align-items-start'>
              <img height={"100%"} width={"100%"} src="client/src/assets/images/oplog.svg" alt="" className='mb-3 movieLogo'></img>
              <div className='w-100 aboutMovie d-flex justify-content-start align-items-center mb-2'>
                <p className='mb-0'>movie</p>
                <p className='mb-0'>2023</p>
                <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                  <img height={"10%"} width={"10%"} src="client/src/assets/images/Icon (5).svg" alt="" />
                  <p className='d-flex align-items-start justify-content-center m-0'>23465</p>
                </span>
              </div>
              <p className='movieDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus natus id quidem</p>
              <div className='movieBtns w-100 gap-3 d-flex'>
                <Button>
                  <img height={"17px"} width={"17px"} src="client/src/assets/images/play.svg" alt="" />
                  <Link to="/SingleMoviePage">stream now</Link>
                </Button>
                <ButtonSec>
                  <img height={"17px"} width={"17px"} src="client/src/assets/images/plus-large.svg" alt="" />
                  <Link to="/curatedPage">add to watchlist</Link>
                </ButtonSec>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: "90vh", width: "100%", objectFit: "cover", }} src="client/src/assets/images/openhaimer.jpg" alt="" />
            <Carousel.Caption className='Caption d-flex flex-column justify-content-center align-items-start'>
              <img height={"100%"} width={"100%"} src="client/src/assets/images/oplog.svg" alt="" className='mb-3 movieLogo'></img>
              <div className='w-100 aboutMovie d-flex justify-content-start align-items-center mb-2'>
                <p className='mb-0'>movie</p>
                <p className='mb-0'>2023</p>
                <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                  <img height={"10%"} width={"10%"} src="client/src/assets/images/Icon (5).svg" alt="" />
                  <p className='d-flex align-items-start justify-content-center m-0'>23465</p>
                </span>
              </div>
              <p className='movieDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus natus id quidem</p>
              <div className='movieBtns w-100 gap-3 d-flex'>
                <Button>
                  <img height={"17px"} width={"17px"} src="client/src/assets/images/play.svg" alt="" />
                  <Link to="/SingleMoviePage">stream now</Link>
                </Button>
                <ButtonSec>
                  <img height={"17px"} width={"17px"} src="client/src/assets/images/plus-large.svg" alt="" />
                  <Link to="/curatedPage">add to watchlist</Link>
                </ButtonSec>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className='carftSection'>
        <div className="container">
          <h4 className='SectionLable mb-4'>
            Craft Your Watchlist {">"}
          </h4>
          <div className='pcontainer d-flex align-items-center'>
            <h2>Create a Watchlist that value your taste and time.!</h2>
            <ButtonSec>Let’s see what you’ve got</ButtonSec>
          </div>
        </div>
      </section>
      <HandSlider />
      <MovieSlider type={"movie"} title={"Top Movies Suggestions "} />
      <MovieSlider type={"tv"} title={"Top Tv Series Suggestions"} />
      <CuratedSlider title={"Curated Lists Just For You "}/>
    </Fragment >
  )
}

export default Home
