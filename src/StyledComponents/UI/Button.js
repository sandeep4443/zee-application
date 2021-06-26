import React from 'react';
import styles from './Button.module.css';


const Button = ({ children, type, onClick }) => {
    return (
        <button type={type} className={styles.marg} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;