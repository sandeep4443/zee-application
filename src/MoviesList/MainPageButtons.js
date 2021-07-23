import React from 'react';
import CheckBox from '../CheckBoxes/CheckBox';
import DropDowns from '../Dropdown/DropDowns';
import KeyEvents from '../KeyboardEvent/KeyEvents';
import Hooks from '../Hooks'
import BreakingBad from '../BreakingBad';
import AddRemove from '../AddRemove';
import Genres from '../GenreSelection';
import Calculator from '../Calculator';
import Expenses from '../Expenses/ExpenseItems';
import Styles from '../StyledComponents';
import Carousel from '../Carousel';
import AddUser from '../AddUser';

const MainPageButtons = ({
    carousel,
    addUser,
    styles,
    expenses,
    genre,
    hooks,
    breakingBad,
    checkbox,
    dropDown,
    keyboard,
    addRemove,
    calculator
}) => {
    return (
        <> <div className="row">
            <div className="col-md-4">
                <Carousel
                    carousel={carousel}
                />
            </div>
            <div className="col-md-4">
                <AddUser
                    addUser={addUser}
                />
            </div>
            <div className="col-md-4">
                <Styles
                    styles={styles}
                />
            </div>
            <div className="col-md-4">
                <Expenses
                    expenses={expenses}
                />
            </div>
            <div className="col-md-4">
                <Genres
                    genre={genre}
                />
            </div>
            <div className="col-md-4">
                <Hooks
                    hooks={hooks}
                />
            </div>
            <div className="col-md-4">
                <BreakingBad
                    breakingBad={breakingBad}
                />
            </div>
            <div className="col-md-4">
                <CheckBox
                    checkbox={checkbox}
                // pagination={pagination}
                />
            </div>
            <div className="col-md-4">
                <DropDowns
                    dropDown={dropDown}
                />
            </div>
            <div className="col-md-4">
                <KeyEvents
                    keyEvents={keyboard}
                />
            </div>
            <div className="col-md-4">
                <AddRemove
                    addRemove={addRemove}
                />
            </div>
            <div className="col-md-4">
                <Calculator
                    calculator={calculator}
                />
            </div>
        </div></>
    )
}

export default MainPageButtons
