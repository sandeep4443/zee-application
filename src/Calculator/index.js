import React from "react";
import PropTypes from "prop-types";
import Calculator from "./Calculator";

const CalculatorIndex = ({ calculator }) => (
    <>
        <Calculator calculator={calculator} />
    </>
);

export default CalculatorIndex;

CalculatorIndex.propTypes = {
    calculator: PropTypes.func
};