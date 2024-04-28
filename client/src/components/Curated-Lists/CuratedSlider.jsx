import React from 'react';
import "./CuratedSlider.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from '../buttons/Button';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CuratedSlider = ({ title }) => {
    const Lcard = [
        {
            cardID: 1,
            poster: "client/src/assets/images/openhaimer.jpg",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            cardID: 2,
            poster: "client/src/assets/images/Sambhadur.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
        {
            cardID: 3,
            poster: "client/src/assets/images/dune.png",
            content: "Biographical Movies Like Oppenheimer That’ll Impact You Deeply",
            watch: "91.5",
            paragraph: "6 Movies Ranked According to TNS Score",
        },
    ];
    return (
        <section>
            <div className="container">
                <div className='SectionLablediv d-flex justify-content-between align-items-center'>
                    <h3 className='SectionLable'>{title}<IoIosArrowForward /></h3>
                    <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <span><img height="100%" width="100%" src="client/src/assets/images/tir.svg" alt="" /></span></span>
                </div>
                <OwlCarousel className="CuratedCards d-flex"
                    items={4}
                    margin={20}
                    nav={false}
                    dots={false}
                    autoplay={true}
                    autoplayHoverPause={true}
                    responsive={{
                        0: {
                            items: 1,

                        },
                        768: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                        },
                    }}>
                    {Lcard.map((elem, index) => <Link to="/curatedPage">
                        <div className="card d-flex" key={index} style={{
                            background: `linear-gradient(to top, black, transparent), url(${elem.poster})`,
                        }}>
                            <div className='CardContainer'>
                                <div className="tag">
                                    Curated List
                                </div>
                                <h3>{elem.content}</h3>
                                <p>{elem.paragraph}</p>
                                <Button>
                                    See All Titles
                                    <MdArrowForward />
                                </Button>
                            </div>
                        </div>
                    </Link>
                    )}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default CuratedSlider;
