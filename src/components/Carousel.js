import React, { useState } from 'react'
import { carouselContent } from '../utils/CarouselContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Carousel = () => {

    const [currImg, setCurrImg] = useState(0);
    // const slideImage = document.querySelectorAll(".slide-image");
    // let currentActiveSlide = 0;
    // const navigationDots = document.querySelector(".navigation-dots");

    const setActiveClass = () => {

        // let firstDot = document.querySelector(".first-dot");
        // let secondDot = document.querySelector(".second-dot");

        // let currentActive = document.querySelector(".single-dot.active");
        // currentActive.classList.remove("active");

        // navigationDots.children[currImg].classList.add("active");
        // if (currImg === 1) {
        //     firstDot.classList.add("active");
        // }
        // if (currImg === 0) {
        //     secondDot.classList.add("active");
        // }

    }

    return (

        <div className="container">
            <div className="carousel">
                <div className="carousel-inner">
                    {/* style={{ backgroundImage: `url(${carouselContent[currImg].image})` }} */}

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
            </div>
            <div className="navigation-dots">
                <div className={currImg === 0 ? "single-dot active" : "single-dot"}></div>
                <div className={currImg === 1 ? "single-dot active" : "single-dot"}></div>
            </div>


            <div className="carousel-content">
                <h4>{carouselContent[currImg].title}</h4>
                <p className="content-paragraph">{carouselContent[currImg].subtitle}</p>
            </div>
        </div>


    )
}

export default Carousel;
