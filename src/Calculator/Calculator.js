import React from "react";
import PropTypes from "prop-types";

const CalculatorButton = ({ calculator }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Calculator"
            onClick={() => calculator()}
        />
    </div>
);
export default CalculatorButton;

CalculatorButton.propTypes = {
    calculator: PropTypes.func
};