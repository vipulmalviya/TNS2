import React, { Fragment } from 'react'
import "../App.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from "./../components/buttons/Button.jsx"
import ButtonSec from "./../components/buttons/ButtonSec.jsx"
import HandSlider from '../components/top-hand-pick-slider/HandSlider.jsx';
import MovieSlider from '../components/Top-Movies-Suggestions/MovieSlider.jsx';
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import Card from '../components/card/Card.jsx';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home = () => {

  const Lcard = [
    {
      id: 1,
      Titlelogo: "client/src/assets/images/oppenheimerlogo.svg",
      Genre: [
        "Biography, ",
        "Drama"
      ],
      Runtime: "2h 55m",
      Release_Date: "2023",
      Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
      poster_path: "client/src/assets/images/openhaimer.jpg",
      popularity: "92.5",
    },
    {
      id: 2,
      Titlelogo: "client/src/assets/images/thebatman.svg",
      Genre: [
        "Action, ",
        "Crime"
      ],
      Runtime: "2h 55m",
      Release_Date: "2022",
      Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints Batman is called to intervene when the mayor of Gotham City is murdered. Soon...",
      poster_path: "client/src/assets/images/batmanhome.png",
      popularity: "92.5",
    },
    {
      id: 3,
      Titlelogo: "client/src/assets/images/dunelogo.svg",
      Genre: [
        "Sci-fi, ",
        "Adventure"
      ],
      Runtime: "2h 55m",
      Release_Date: "2021",
      Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
      poster_path: "client/src/assets/images/dunehome.png",
      popularity: "92.5",
    },
    {
      id: 4,
      Titlelogo: "client/src/assets/images/jokerlogo.svg",
      Genre: [
        "Crime ",
        "Thriller"
      ],
      Runtime: "2h 55m",
      Release_Date: "20219",
      Accolades: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak....",
      poster_path: "client/src/assets/images/jokerhome.png",
      popularity: "92.5",
    },
    {
      id: 5,
      Titlelogo: "client/src/assets/images/avatarlogo.svg",
      Genre: [
        "Action, ",
        "Sci-fi"
      ],
      Runtime: "2h 55m",
      Release_Date: "2022",
      Accolades: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora...",
      poster_path: "client/src/assets/images/Avatarhome.png",
      popularity: "92.5",
    },
    {
      id: 6,
      Titlelogo: "client/src/assets/images/theGreenKnightlogo.svg",
      Genre: [
        "Advanture, ",
        "Horror"
      ],
      Runtime: "2h 55m",
      Release_Date: "2021",
      Accolades: "Sir Gawain, King Arthur's young nephew, embarks on an adventurous journey and deals with ghosts, thieves and giants as he sets out to defeat Green Knight, a giant...",
      poster_path: "client/src/assets/images/theGreenKnighthome.png",
      popularity: "92.5",
    },
    {
      id: 7,
      Titlelogo: "client/src/assets/images/saltburnlogo.svg",
      Genre: [
        "Comedy, ",
        "Thriller"
      ],
      Runtime: "2h 55m",
      Release_Date: "2023",
      Accolades: "Distraught by his classmate Oliver's unfortunate living situation, Felix, a rich student, invites him over to his estate. Soon, a series of horrifying events engulf...",
      poster_path: "client/src/assets/images/saltburnhome.png",
      popularity: "92.5",
    }

  ];


  return (
    <Fragment>
      <section className='homeCarousel position-relative'>
        <Carousel className='w-100' >
          {Lcard.map((elem, index) => <Carousel.Item key={index}>
            <Link rel="stylesheet" to="/SingleMoviePage">
              <img style={{ height: "100vh", width: "100%", objectFit: "cover", }} src={elem.poster_path} alt="" />
            </Link>
            <Carousel.Caption className='Caption d-flex flex-column justify-content-center align-items-start'>
              <Link rel="stylesheet" to="/SingleMoviePage">
                <img height={"100%"} width={"100%"} src={elem.Titlelogo} alt="" className='mb-3 movieLogo'></img>
              </Link>

              <div className='w-100 aboutMovie d-flex justify-content-start align-items-center mb-2'>
                <p className='mb-0'>{elem.Genre}</p>
                <p className='mb-0'>{elem.Release_Date}</p>
                <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                  <img height={"15%"} width={"15%"} src="client/src/assets/images/Icon (5).svg" alt="" />
                  <p className='d-flex align-items-start justify-content-center m-0'>{elem.popularity}</p>
                </span>
              </div>
              <p className='movieDescription'>{elem.Accolades}</p>
              <div className='movieBtns w-100 gap-3 d-flex'>
                <Button>
                  <FaPlay style={{ color: "black", }} />
                  <Link to="/WatchlistPage">stream now</Link>
                </Button>
                <ButtonSec>
                  <img height={"20px"} width={"20px"} src="client/src/assets/images/plus-large.svg" alt="" />
                  <Link to="/WatchlistPage">add to watchlist</Link>
                </ButtonSec>
              </div>
            </Carousel.Caption>
          </Carousel.Item>)}
        </Carousel>
      </section>
      <section className='carftSection'>
        <div className="container">
          <h4 className='SectionLable mb-4 align-align-items-center '>
            Craft Your Watchlist
            <IoIosArrowForward />
          </h4>
          <div className='pcontainer d-flex align-items-center'>
            <h2>Create a Watchlist that value your <br /> taste and time.!</h2>
            <ButtonSec>Let’s see what you’ve got</ButtonSec>
          </div>
        </div>
      </section>
      <HandSlider />
      <MovieSlider type={"movie"} title={"Top Movies Suggestions "} />
      <MovieSlider type={"tv"} title={"Top Tv Series Suggestions"} />
      {/* <section className='container position-relative '>
        <div className="slides w-100 overflow-x-scroll text-nowrap">
          <OwlCarousel className=" w-100  d-flex gap-2 cursor-pointer">
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
            <Card index={1} Poster={"client/src/assets/images/openhaimer.jpg"} Title={"thala"} catagory={"thala for a reson"} watch={"7"} />
          </OwlCarousel>
        </div>
      </section> */}
      <CuratedSlider title={"Curated Lists Just For You "} />
    </Fragment >
  )
}

export default Home
