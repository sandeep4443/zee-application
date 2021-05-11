import React, { useState } from 'react';
import './Spinner.css';

const SpinnerPage = () => {
    const [name, setName] = useState("circle");
    const startRotation = () => {
        setName("circle start-rotate")
        setTimeout(() => {
            setName("circle start-rotate stop-rotate")
        }, Math.floor(Math.random() * 3000) + 1)
    }
    return (
        <div className="back">
            <div className="arrow"></div>
            <ul className={name}>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">1</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">2</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">3</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">4</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">5</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">6</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">7</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">8</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">9</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">10</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">11</div>
                </li>
                <li>
                    <div className="text"
                        contentedtable="true"
                        spellCheck="false">12</div>
                </li>
            </ul>
            <button className="btn spin-button"
                onClick={startRotation}
            >SPIN</button>
        </div>
    )
}

export default SpinnerPage
