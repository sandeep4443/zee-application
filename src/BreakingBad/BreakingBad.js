import React from "react";
import PropTypes from "prop-types";

const BreakingBad = ({ breakingBad }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="btn btn-success"
            value="Breaking Bad"
            onClick={() => breakingBad()}
        />
    </div>
);
export default BreakingBad;

BreakingBad.propTypes = {
    breakingBad: PropTypes.func
};
