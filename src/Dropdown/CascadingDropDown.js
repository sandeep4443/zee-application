import { useState } from 'react';
import CountriesData from "./cascadingDropDownData.json";


const CascadingDropdown = () => {

	const [countries] = useState(CountriesData);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [country, selectedCountry] = useState();
	const [state, selectedState] = useState();
	const [city, selectedCity] = useState();

	const changeCountry = (event) => {
		selectedCountry(event.target.value);

		setStates(countries.find(cntry => cntry.name === event.target.value).states);
	}

	const changeState = (event) => {
		selectedState(event.target.value);
		const stats = countries.find(cntry => cntry.name === country).states;
		setCities(stats.find(stat => stat.name === event.target.value).cities);
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
					<select placeholder="Country" value={country} onChange={changeCountry}>
						<option>--Choose Country--</option>
						{countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div className="col-md-4">
					<label>State</label>
					<select placeholder="State" value={state} onChange={changeState}>
						<option>--Choose State--</option>
						{states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div className="col-md-4">
					<label>City</label>
					<select placeholder="City" value={city} onChange={selCity}>
						<option>--Choose City--</option>
						{cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		</div>
	)
}


export default CascadingDropdown;