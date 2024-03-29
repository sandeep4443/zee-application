import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selecItems } from '../actions/selItems';
import styles from '../App.css';


const CheckBoxes = ({ history }) => {

  const moviesInfo = useSelector(state => state.listInfoReducer.moviesInfo);
  const dispatch = useDispatch();

  const [movieinfo] = useState(moviesInfo.slice(0, 5));
  const [selectedItems, setSelectedItems] = useState([]);
  const [enableCheckAll, setEnableCheckAll] = useState(false);



  const handleChange = (event) => {
    const { checked } = event.target;
    const values = document.getElementsByName('checkbox');
    const defaultValues = [];
    for (let i = 0; i < values.length; i++) {
      if (checked === true) {
        setEnableCheckAll(true);
        values[i].checked = true;
        defaultValues.push(values[i].defaultValue);
        setSelectedItems(defaultValues);
      } else {
        values[i].checked = false;
        setEnableCheckAll(false);
        setSelectedItems([]);
      }
    }
  }

  const handleCheckBoxChange = () => {
    const array = [];
    const selected = document.getElementsByName('checkbox');
    let count = 0;
    for (let i = 0; i <= selected.length; i++) {
      if (selected[i] && selected[i].checked && selected[i].checked === true) {
        count += 1;
        array.push(selected[i].value);
        setSelectedItems(array);
      }
    }
    if (count === selected.length) {
      setEnableCheckAll(true);
    } else {
      setEnableCheckAll(false);
    }
  }

  const pagination = () => {
    dispatch(selecItems(selectedItems));
    history.push('/pagination');
  };

  return (
    <div style={{ margin: `${30}px` }}>
      <div className="row">
        <div className="col-md-4">
          <input
            id="selectAll"
            name="checkboxAll"
            type="checkbox"
            checked={enableCheckAll}
            onChange={handleChange}
          />
          <label className={styles.tableStyle}>Select All</label>
        </div>

        {movieinfo.map((item, index) => (
          <ul className="col-md-4" key={index}>
            <li className={styles.tableStyle}>
              <input
                id={index + 1}
                name="checkbox"
                type="checkbox"
                onChange={handleCheckBoxChange}
                value={item.Title}
              />
              <label
                htmlFor={movieinfo + item.Title}
              >
                {item.Title}
              </label>
            </li>
          </ul>
        ))}
      </div>

      <div>
        <input
          type="button"
          className="buttonStyle"
          value="Navigate To Pagination"
          onClick={() => pagination()}
        />
      </div>
    </div>
  );
}

export default CheckBoxes;

CheckBoxes.propTypes = {
  history: PropTypes.object
}