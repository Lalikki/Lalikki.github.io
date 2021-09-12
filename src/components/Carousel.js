import React, { useState } from 'react'
import { carouselContent } from '../utils/CarouselContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const foxInTheBoxLink = "https://lalikki.github.io/FoxInTheBox/";
const yelpCampLink = "https://boiling-oasis-93205.herokuapp.com/";

const Carousel = () => {

    const [currImg, setCurrImg] = useState(0);

    return (

        <div className="carousel">
            <div className="carousel-inner">
                <div className="left-carousel" onClick={() => {
                    if (currImg > 0) {
                        setCurrImg(currImg - 1);
                    }

                }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="3x"></FontAwesomeIcon>
                </div>
                <div className="center-carousel">
                    <img className="slide-image" src={carouselContent[currImg].image} alt="" />
                </div>
                <div className="right-carousel" onClick={() => {
                    if (currImg < carouselContent.length - 1) {
                        setCurrImg(currImg + 1);
                    }

                }}>
                    <FontAwesomeIcon icon={faArrowRight} size="3x"></FontAwesomeIcon>
                </div>

            </div>

            {/* Navigation dots */}
            <div className="navigation-dots">
                <div className={currImg === 0 ? "single-dot active" : "single-dot"}></div>
                <div className={currImg === 1 ? "single-dot active" : "single-dot"}></div>
            </div>

            {/* Carousel text content */}
            <div className="carousel-content mt-2 mb-5">
                <h4><a href={currImg === 0 ? yelpCampLink : foxInTheBoxLink} className="portfolio-links">{carouselContent[currImg].title}</a></h4>
                <p className="content-paragraph">{carouselContent[currImg].subtitle}</p>
            </div>
        </div>


    )
}

export default Carousel;
