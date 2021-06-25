import React from "react";
import PropTypes from "prop-types";

const ExpensesList = ({ expenses }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Expenses List"
            onClick={() => expenses()}
        />
    </div>
);
export default ExpensesList;

ExpensesList.propTypes = {
    expenses: PropTypes.func
};