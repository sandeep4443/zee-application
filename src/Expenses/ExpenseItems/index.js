import React from "react";
import PropTypes from "prop-types";
import Expenses from "./Expenses";

const ExpensesIndex = ({ expenses }) => (
    <>
        <Expenses expenses={expenses} />
    </>
);

export default ExpensesIndex;

ExpensesIndex.propTypes = {
    expenses: PropTypes.func
};