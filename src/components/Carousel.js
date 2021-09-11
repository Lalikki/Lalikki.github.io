import React, { useState } from 'react'
import { carouselContent } from '../utils/CarouselContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {

    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="container">
            <div className="carousel">
                <div className="carousel-inner">
                    {/* style={{ backgroundImage: `url(${carouselContent[currImg].image})` }} */}

                    <div className="left-carousel" onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} size="3x"></FontAwesomeIcon>
                    </div>
                    <div className="center-carousel">
                        <img src={carouselContent[currImg].image} alt="" />
                    </div>
                    <div className="right-carousel" onClick={() => {
                        currImg < carouselContent.length - 1 && setCurrImg(currImg + 1);
                    }}>
                        <FontAwesomeIcon icon={faArrowRight} size="3x"></FontAwesomeIcon>
                    </div>

                </div>
            </div>
            <div className="carousel-content">
                <h4>{carouselContent[currImg].title}</h4>
                <p className="content-paragraph">{carouselContent[currImg].subtitle}</p>
            </div>
        </div>


    )
}

export default Carousel;
