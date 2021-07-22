import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import CarouselContent from './CarouselContent';
import CarouselImage from './CarouselImage';
import './Carousel.css';

const len = CarouselImage.length - 1;
const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 3000);
        return () => clearInterval(interval)
    }, [activeIndex]);

    return (
        <div className="carousel-container">
            <CarouselContent activeIndex={activeIndex} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                onClick={activeIndex => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Carousel
