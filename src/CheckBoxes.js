import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selecItems } from './actions/selItems';
import MoviesList from "./movies.json";
import "./App.css";

const CheckBoxes = (props) => {
    const [movieinfo] = useState(MoviesList.slice(0, 10));
    const [selectedItems, setSelectedItems] = useState([]);
    const [enableCheckAll, setEnableCheckAll] = useState(false);


    const handleChange = (event) => {
        const { checked } = event.target;
        let values = document.getElementsByName("checkbox");
        let defaultValues = [];
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
        const selected = document.getElementsByName("checkbox");
        let count = 0;
        for (var i = 0; i <= selected.length; i++) {
            if (selected[i] && selected[i].checked && selected[i].checked === true) {
                count = count + 1;
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
        props.selItems(selectedItems);
        props.history.push("/pagination");
    };

    return (
        <div>
            <div>
                <input
                    id="selectAll"
                    name="checkboxAll"
                    type="checkbox"
                    checked={enableCheckAll}
                    onChange={handleChange}
                />

                <label>Select All</label>
            </div>
            <div>
                {movieinfo.map((item, index) => {
                    return (
                        <div>
                            <span class="list label-new">
                                <ul class="ngc">
                                    <li class="col-xs-2 borders">
                                        <input
                                            id={index + 1}
                                            name="checkbox"
                                            type="checkbox"
                                            onChange={handleCheckBoxChange}
                                            value={item.Title}
                                        />
                                        <label
                                            htmlFor={movieinfo + item.Title}>
                                            {item.Title}
                                        </label>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    );
                })}
                <div>
                    <input
                        type="button"
                        class="btn btn-primary export"
                        value="Navigate To Pagination"
                        onClick={() => pagination()}
                    />
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        selItems: (items) => {
            dispatch(selecItems(items))
        }
    }
}

export default connect(null, mapDispatchToProps)(CheckBoxes);