import React, { useState } from 'react'
import { carouselContent } from '../utils/CarouselContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {

    const [currImg, setCurrImg] = useState(0);
    console.log(currImg)


    const setActiveClass = () => {
        let firstDot = document.querySelector(".first-dot");
        let secondDot = document.querySelector(".second-dot");

        let currentActive = document.querySelector(".single-dot.active");
        currentActive.classList.remove("active");

        if (currImg === 1) {
            firstDot.classList.add("active");
        }
        if (currImg === 0) {
            secondDot.classList.add("active");
        }

    }

    return (
        <div className="container">
            <div className="carousel">
                <div className="carousel-inner">
                    {/* style={{ backgroundImage: `url(${carouselContent[currImg].image})` }} */}

                    <div className="left-carousel" onClick={() => {
                        if (currImg > 0) {
                            setCurrImg(currImg - 1);
                            setActiveClass();
                        }

                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} size="3x"></FontAwesomeIcon>
                    </div>
                    <div className="center-carousel">
                        <img src={carouselContent[currImg].image} alt="" />
                    </div>
                    <div className="right-carousel" onClick={() => {
                        if (currImg < carouselContent.length - 1) {

                            setCurrImg(currImg + 1);
                            setActiveClass();
                        }

                    }}>
                        <FontAwesomeIcon icon={faArrowRight} size="3x"></FontAwesomeIcon>
                    </div>

                </div>
            </div>
            <div className="navigation-dots">
                <div className="single-dot active first-dot"></div>
                <div className="single-dot second-dot"></div>

            </div>

            <div className="carousel-content">
                <h4>{carouselContent[currImg].title}</h4>
                <p className="content-paragraph">{carouselContent[currImg].subtitle}</p>
            </div>
        </div>


    )
}

export default Carousel;
