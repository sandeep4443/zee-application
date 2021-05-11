import React from "react";
import PropTypes from "prop-types";
import Spinner from './Spinner';


const SpinnerIndex = ({ spinner }) => (
    <>
        <Spinner spinner={spinner} />
    </>
);

export default SpinnerIndex;

SpinnerIndex.propTypes = {
    spinner: PropTypes.func
};