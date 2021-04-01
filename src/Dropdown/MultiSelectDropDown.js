import React, { useState } from 'react';
import MultiSelectData from './multiSelect.json';
import './MultiSelect.css';

const MultiSelect = () => {
    const [data] = useState(MultiSelectData);
    const [displayData, setDisplayData] = useState(false);
    const [results, setResults] = useState([]);
    const [selValue, setSelValue] = useState([])

    const items = [];
    const searchText = (event) => {
        setDisplayData(true);
        const { value } = event.target;
        const filterValue = data.filter((title) => {
            const countryNames = title.name;
            if (countryNames !== null) {
                const names = countryNames.toString().toLowerCase();
                return names.includes(value.toLowerCase());
            }
            return null;
        });
        setResults(filterValue);
    }

    const selectedValue = (e) => {
        const value = e.target.innerText;
        items.push(value);
        setSelValue(items.push(value));
    }

    return (
        <div className="instructions">
            {selValue && selValue.map((item) => (
                <div key={item}>
                    {item}
                </div>
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
