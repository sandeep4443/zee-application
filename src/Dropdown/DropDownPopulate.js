import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const DropDowns = () => {

  const moviesInfo = useSelector(state => state.listInfoReducer.moviesInfo);
  const dropDownItems = moviesInfo.slice(0, 5);
  const [dropDown1Update, setDropDown1Item] = useState();
  const [dropDown2Update, setDropDown2Item] = useState();

  const d2Items = dropDownItems.filter((item) => item.Title !== dropDown1Update)

  const d1Items = dropDownItems.filter((item) => item.Title !== dropDown2Update);

  const onDropDown1Update = (event) => {
    const { value } = event.target;
    setDropDown1Item(value);
  }

  const onDropDown2Update = (event) => {
    const { value } = event.target;
    setDropDown2Item(value);
  }

  return (
    <div className="container">
      <strong>Hide value when selected in another dropdown</strong>
      <div className="row">
        <div className="col-md-4">
          <label>Option 1</label>
          <select id="dropdown1" value={dropDown1Update} onChange={onDropDown1Update}>
            <option value="">Select Option 1</option>
            {d1Items.map((item, value) => (
              <option key={value} value={item.Title}>{item.Title}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label>Option 2</label>
          <select id="dropdown2" value={dropDown2Update} onChange={onDropDown2Update}>
            <option value="">Select Option 2</option>
            {d2Items.map((item, value) => (
              <option key={value} value={item.Title}>{item.Title}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default DropDowns;

