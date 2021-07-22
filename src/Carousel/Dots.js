import React from 'react';
import CarouselImage from './CarouselImage';

const Dots = (
    {
        activeIndex,
        onclick
    }
) => {
    return (
        <div className="all-dots">
            {CarouselImage.map((s, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={event => onclick((event.target.value = index))}
                ></span>
            ))}
        </div>
    )
}

export default Dots
