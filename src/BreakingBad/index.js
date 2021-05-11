import React from "react";
import PropTypes from "prop-types";
import BreakingBad from './BreakingBad';


const BreakingBadIndex = ({ breakingBad }) => (
    <>
        <BreakingBad breakingBad={breakingBad} />
    </>
);

export default BreakingBadIndex;

BreakingBadIndex.propTypes = {
    breakingBad: PropTypes.func
};