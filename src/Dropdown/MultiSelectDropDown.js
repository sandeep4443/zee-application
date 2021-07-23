import React, { useState } from 'react';
import MultiSelectData from './multiSelect.json';
import './MultiSelect.css';

const MultiSelect = () => {
    const [data] = useState(MultiSelectData);
    const [displayData, setDisplayData] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [results, setResults] = useState([]);
    const [selValue] = useState([]);
    const [itemsHere, setItemsHere] = useState(false);
    const [enableContent, setEnableContent] = useState(false);

    const searchText = (event) => {
        setDisplayData(true);
        const { value } = event.target;
        setTextValue(value);
        const filterValue = data.filter((title) => {
            const countryNames = title.name;
            if (countryNames !== null) {
                const names = countryNames.toString().toLowerCase();
                // return names.includes(value.toLowerCase());
                return names.indexOf(value.toLowerCase()) !== -1;
            }
        });
        /**
         * to get a list of selected items we are using filtered function
         */
        const filtered = filterValue.filter(el => {
            return selValue.indexOf(el.name) !== -1;
        });

        /**
         * filteredItems will display items hiding already selected items
         */
        const filteredItems = filterValue.filter(el => {
            return filtered.indexOf(el) === -1;
        });
        setResults(filteredItems);
    }


    const selectedValue = (e) => {
        const value = e.target.innerText;
        setDisplayData(false);
        setTextValue('');
        selValue.push(value);
        if (selValue.length >= 1) {
            setItemsHere(true)
        } else {
            setItemsHere(false)
        }
    }

    const contentEnabled = () => {
        setEnableContent(true);
    }

    return (
        <div className="instructions">
            {(itemsHere && selValue) && selValue.map((item) => (
                <div key={item}>
                    <div>{item}</div>
                </div>
            ))}
            <div className="dropdown">
                <button onClick={contentEnabled} className="dropbtn">Dropdown</button>

                {enableContent && <div id="myDropdown" className="dropdown-content">
                    <input
                        type="search"
                        id="myInput"
                        placeholder="Search states"
                        className="dropdown-search"
                        onChange={searchText}
                        value={textValue}
                    />

                    {displayData && results.map((dat, index) => (
                        <div key={index}>
                            <a id={`value ${index}`} key={index} onClick={selectedValue}>{dat.name}</a>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
};

export default MultiSelect;
