import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selecItems } from '../actions/selItems';

const CheckBoxes = ({
    movieInfo,
    selItems,
    history
}) => {
    const [movieinfo] = useState(movieInfo.slice(0, 5));
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
        selItems(selectedItems);
        history.push("/pagination");
    };

    return (
        <div style={{ margin: 30 + 'px' }}>
            <div className="row">
                <div className="col-md-4">
                    <input
                        id="selectAll"
                        name="checkboxAll"
                        type="checkbox"
                        checked={enableCheckAll}
                        onChange={handleChange}
                    />
                    <label class="tableStyle">Select All</label>
                </div>

                {movieinfo.map((item, index) => {
                    return (
                        <ul className="col-md-4">
                            <li className="borders tableStyle">
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
                    );
                })}
            </div>

            <div>
                <input
                    type="button"
                    class="btn btn-primary export"
                    value="Navigate To Pagination"
                    onClick={() => pagination()}
                />
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

const mapStateToProps = (state) => {
    return {
        movieInfo: state.rootReducer.moviesInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxes);