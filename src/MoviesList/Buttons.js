import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ logout }) => (
    <div style={ { margin: `${ 30 }px` } }>
        <input
          type="button"
          className="btn btn-success"
          value="Move to Checkboxes"
          onClick={ () => logout() }
        />
    </div>
); export default Buttons;

Buttons.propTypes = {
  logout:PropTypes.func
}
