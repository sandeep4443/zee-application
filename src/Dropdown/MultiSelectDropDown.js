import { useState } from 'react';
import MultiSelectData from './multiSelect.json';
import "./MultiSelect.css";


const MultiSelect = () => {

    const [data] = useState(MultiSelectData);
    const [displayData, setDisplayData] = useState(false);
    const [results, setResults] = useState([]);
    const [selValue, setSelValue] = useState([])

            let items=[];
    const enteredText = (event) => {
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

    const leave = () => {
        setDisplayData(false);
    }

    const selectedValue = (e) => {

       let value=e.target.innerText;
       console.log("items", items);
       items.push(value);
        setSelValue(items.push(value));
    }

console.log("selValue", selValue);
    return (
        <div className="instructions">
        {selValue && selValue.map(item => {
            return(
                <div>
            {item}
            </div>)
        })}
            <div className="dropdown-container">
                <div className="dropdown-button noselect">
                    <div className="dropdown-label">States</div>
                    <div className="dropdown-quantity">(<span className="quantity">Any</span>)</div>
                    <i className="fa fa-filter"></i>
                </div>
                <div className="dropdown-list">
                    <input
                        type="search"
                        placeholder="Search states"
                        className="dropdown-search"
                        onChange={enteredText}
                    />

                    {displayData && results.map((dat, index) => {
                        return (
                            <div>
                                <a id={`value ${index}`} key={index} onClick={selectedValue}>{dat.name}</a>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
};

export default MultiSelect;