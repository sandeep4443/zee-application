import React, { useState } from 'react';
import MultiSelectData from './multiSelect.json';
import './MultiSelect.css';

const MultiSelect = () => {
    const [data] = useState(MultiSelectData);
    const [displayData, setDisplayData] = useState(false);
    const [results, setResults] = useState([]);
    const [selValue] = useState([]);
    const [itemsHere, setItemsHere] = useState(false);

    const searchText = (event) => {
        setDisplayData(true);
        const { value } = event.target;
        const filterValue = data.filter((title) => {
            const countryNames = title.name;
            if (countryNames !== null) {
                const names = countryNames.toString().toLowerCase();
                // return names.includes(value.toLowerCase());
                return names.indexOf(value.toLowerCase()) !== -1;
            }
        });

        /**
         * to get a list of selected items we are using filtered const
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
        selValue.push(value);
        if (selValue.length >= 1) {
            setItemsHere(true)
        } else {
            setItemsHere(false)
        }
    }


    return (
        <div className="instructions">
            {(itemsHere && selValue) && selValue.map((item) => (
                <ol key={item}>
                    <li>{item}</li>
                </ol>
            ))}
            <div className="dropdown-container">
                <div className="dropdown-button noselect">
                    <div className="dropdown-label">States</div>
                    <div className="dropdown-quantity">
                        (
                        <span className="quantity">Any</span>
                        )
                    </div>
                    <i className="fa fa-filter" />
                </div>
                <div className="dropdown-list">
                    <input
                        type="search"
                        placeholder="Search states"
                        className="dropdown-search"
                        onChange={searchText}
                    />

                    {displayData && results.map((dat, index) => (
                        <div key={index}>
                            <a id={`value ${index}`} key={index} onClick={selectedValue}>{dat.name}</a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
};

export default MultiSelect;
