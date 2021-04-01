import React from 'react';
import PropTypes from 'prop-types';

const DuplicateMovies = ({ duplicateMoviesList, findDuplicateMoviesList }) => (
    <>
        <div style={ { margin: `${ 30 }px` } }>
            <button
              className="btn btn-secondary"
              onClick={ findDuplicateMoviesList }
            >
                FIND DUPLICATES
            </button>
        </div>
        {duplicateMoviesList && duplicateMoviesList.length > 0 && (
        <h1>
            DUPLICATE MOVIES:
            {duplicateMoviesList.length}
        </h1>
        )}
        {duplicateMoviesList.length > 0
                && (
                    <div style={ { margin: `${ 20 }px` } }>
                        <table id="t01">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Director</th>
                                    <th>Release_Date</th>
                                    <th>Distributor</th>
                                    <th>Major_Genre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {duplicateMoviesList.map((details, index) => (
                                    <tr key={index}>
                                        <td>
                                            {details.Title}
                                            {' '}
                                        </td>
                                        <td>
                                            {details.Director}
                                            {' '}
                                        </td>
                                        <td>
                                            {details.Release_Date}
                                            {' '}
                                        </td>
                                        <td>
                                            {details.Distributor}
                                            {' '}
                                        </td>
                                        <td>
                                            {details.Major_Genre}
                                            {' '}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
    </>
); export default DuplicateMovies;

DuplicateMovies.propTypes = {
    duplicateMoviesList: PropTypes.arrayOf(
      PropTypes.shape({
        Title: PropTypes.string,
        US_Gross: PropTypes.number
      })
    ),
    findDuplicateMoviesList: PropTypes.func
  }
