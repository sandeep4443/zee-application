import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
    const classes = 'car ' + className
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card
