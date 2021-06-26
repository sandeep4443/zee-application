import React from "react";
import PropTypes from "prop-types";

const AddUser = ({ addUser }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Add User"
            onClick={() => addUser()}
        />
    </div>
);
export default AddUser;

AddUser.propTypes = {
    addUser: PropTypes.func
};