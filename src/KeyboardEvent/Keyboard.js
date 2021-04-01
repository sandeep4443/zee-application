import React, { useState, useEffect } from 'react';
import Button from './Buttons';
import styles from './Keyboard.css';

const Keyboard = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
  });

  const handleEscKey = (event) => {
    document.getElementById(event.key ? event.key : '').click();
  }

  const add = (value) => {
    setScore(score + value);
  }


  const routes = [
    { length: 1, value: 1 },
    { length: 2, value: 2 },
    { length: 3, value: 4 },
    { length: 4, value: 7 },
    { length: 5, value: 10 },
    { length: 6, value: 15 },
    { length: 7, value: 18 },
    { length: 8, value: 22 },
    { length: 9, value: 27 }
  ];

  const buttons = routes.map((route, index) => (
    <Button keys={route.length} value={route.value} onClick={add} key={index}>
      { route.length}
    </Button>
  ));

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.score}>{score}</h1>
      </div>
      <div className={styles.body}>{buttons}</div>
    </div>
  );
}

export default Keyboard;
