import React from 'react';
import CarouselImage from './CarouselImage';

const CarouselContent = (
    {
        activeIndex
    }
) => {
    return (
        <section>
            {CarouselImage.map(({ urls, title, description }, index) => (
                <div key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={urls} alt="" />
                    <h3 className="slide-title">{title}</h3>
                    <p className="slide-text">{description}</p>
                </div>
            ))}
        </section>
    )
}

export default CarouselContent;
