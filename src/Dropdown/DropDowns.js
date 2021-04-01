import React from 'react';
import PropTypes from 'prop-types';

const DropDowns = ({ dropDown }) => (
    <div style={ { margin: `${ 30 }px` } }>
        <input
          type="button"
          className="btn btn-success"
          value="Move to DropDowns"
          onClick={ () => dropDown() }
        />
    </div>
);
export default DropDowns;

DropDowns.propTypes = {
  dropDown:PropTypes.func
}
