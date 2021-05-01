import React from "react";
import PropTypes from "prop-types";
import Hooks from "./HooksPractice";

const HooksIndex = ({ hooks }) => (
    <>
        <Hooks hooks={hooks} />
    </>
);

export default HooksIndex;

HooksIndex.propTypes = {
    hooks: PropTypes.func
};
