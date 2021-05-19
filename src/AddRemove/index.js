import React from "react";
import PropTypes from "prop-types";
import AddRemove from "./AddRemoveElements";

const AddRemoveElements = ({ addRemove }) => (
    <>
        <AddRemove addRemove={addRemove} />
    </>
);

export default AddRemoveElements;

AddRemoveElements.propTypes = {
    hooks: PropTypes.func
};