import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ checkbox }) => (
  <div style={{ margin: `${30}px` }}>
    <input
      type="button"
      className="buttonStyle"
      value="Move to Checkboxes"
      onClick={() => checkbox()}
    />
  </div>
); export default Buttons;

Buttons.propTypes = {
  logout: PropTypes.func
}
