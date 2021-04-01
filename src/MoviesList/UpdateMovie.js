import React from 'react';
import PropTypes from 'prop-types';

const UpdateMovie = ({
  updateMovieName, title, updateMovieTitle, updateMovieButtonDisabled,
}) => (
    <div style={ { margin: `${ 30 }px` } }>
        <input
          type="text"
          id="updatetext"
          onChange={ updateMovieName }
          defaultValue={ title }
        />

        <button
          className="btn btn-primary"
          onClick={ updateMovieTitle }
          disabled={ updateMovieButtonDisabled }
          style={ { marginLeft: `${ 20 }px` } }
        >
            Update Movie
        </button>
    </div>
)
export default UpdateMovie;

UpdateMovie.propTypes = {
  updateMovieName: PropTypes.func,
  updateMovieTitle: PropTypes.func,
  updateMovieButtonDisabled: PropTypes.bool,
  title: PropTypes.string
}
