import React from "react";
import PropTypes from "prop-types";
import Styles from "./Styles";

const StylesIndex = ({ styles }) => (
    <>
        <Styles styles={styles} />
    </>
);

export default StylesIndex;

StylesIndex.propTypes = {
    styles: PropTypes.func
};