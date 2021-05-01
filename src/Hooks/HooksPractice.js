import React from "react";
import PropTypes from "prop-types";

const HooksPractice = ({ hooks }) => (
    <div style={{ margin: `${30}px` }}>
    <input
            type="button"
            className="btn btn-success"
            value="Hooks Practise"
            onClick={() => hooks()}
        />
    </div>
);
export default HooksPractice;

HooksPractice.propTypes = {
    hooks: PropTypes.func
};
