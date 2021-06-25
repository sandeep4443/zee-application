import React, { useState } from 'react';
import CountriesData from './cascadingDropDownData.json';

const CascadingDropdown = () => {
    const [countries] = useState(CountriesData);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [country, selectedCountry] = useState();
    const [state, selectedState] = useState();
    const [city, selectedCity] = useState();

    const changeCountry = (event) => {
        const { value } = event.target;
        selectedCountry(value);
        if (value === "--Choose Country--") {
            selectedState("");
            selectedCity("");
        }
        let arr = countries.find((cntry) => cntry.name === event.target.value);
        if (arr !== undefined) {
            setStates(arr.states);
        } else {
            setStates("");
        }
    }

    const changeState = (event) => {
        const { value } = event.target;
        if (value === "--Choose State--") {
            selectedCity("");
        }
        selectedState(event.target.value);
        const stats = countries.find((cntry) => cntry.name === country).states;
        let arr = stats.find((stat) => stat.name === event.target.value);
        if (arr !== undefined) {
            setCities(arr.cities);
        } else {
            setCities("");
        }

    }

    const selCity = (event) => {
        selectedCity(event.target.value);
    }

    return (
        <div id="container">
            <h2>Cascading or Dependent Dropdown using React</h2>
            <div className="row">
                <div className="col-md-4">
                    <label>Country</label>
                    <select value={country} onChange={changeCountry}>
                        <option>--Choose Country--</option>
                        {countries.map((e, key) => <option key={key}>{e.name}</option>)}
                    </select>
                </div>

                <div className="col-md-4">
                    <label>State</label>
                    <select placeholder="State" value={state} onChange={changeState}>
                        <option>--Choose State--</option>
                        {states && states.map((e, key) => <option key={key}>{e.name}</option>)}
                    </select>
                </div>

                <div className="col-md-4">
                    <label>City</label>
                    <select value={city} onChange={selCity}>
                        <option>--Choose City--</option>
                        {cities && cities.map((e, key) => <option key={key}>{e}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CascadingDropdown;
