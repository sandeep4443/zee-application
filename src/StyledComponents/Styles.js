import React from "react";
import PropTypes from "prop-types";

const Styles = ({ styles }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Styled Components"
            onClick={() => styles()}
        />
    </div>
);
export default Styles;

Styles.propTypes = {
    styles: PropTypes.func
};