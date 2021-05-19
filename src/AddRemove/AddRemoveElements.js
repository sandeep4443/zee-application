import React from "react";
import PropTypes from "prop-types";

const AddRemoveElements = ({ addRemove }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Add Remove Elements"
            onClick={() => addRemove()}
        />
    </div>
);
export default AddRemoveElements;

AddRemoveElements.propTypes = {
    addRemove: PropTypes.func
};
