import React from 'react';
import PropTypes from 'prop-types';

const KeyBoard = ({ keyEvents }) => (
    <div style={ { margin: `${ 30 }px` } }>
        <input
          type="button"
          className="btn btn-success"
          value="Key Events"
          onClick={ () => keyEvents() }
        />
    </div>
);
export default KeyBoard;

KeyBoard.propTypes = {
  keyEvents:PropTypes.func
}
