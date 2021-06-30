import React from "react";
import PropTypes from "prop-types";

const MainPage = ({ carousel }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Carousel"
            onClick={() => carousel()}
        />
    </div>
);
export default MainPage;

MainPage.propTypes = {
    carousel: PropTypes.func
};