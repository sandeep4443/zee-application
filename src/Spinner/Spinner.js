import React from "react";
import PropTypes from "prop-types";

const Spinner = ({ spinner }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="btn btn-success"
            value="Spinner"
            onClick={() => spinner()}
        />
    </div>
);
export default Spinner;

Spinner.propTypes = {
    spinner: PropTypes.func
};
