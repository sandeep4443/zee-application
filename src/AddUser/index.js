import React from "react";
import PropTypes from "prop-types";
import AddUser from "./AddUser";

const AddUserIndex = ({ addUser }) => (
    <>
        <AddUser addUser={addUser} />
    </>
);

export default AddUserIndex;

AddUserIndex.propTypes = {
    addUser: PropTypes.func
};