/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';

const DuplicateMovies = ({ duplicateMoviesList, findDuplicateMoviesList }) => (
    <>
        <div style={{ margin: `${30}px` }}>
            <div>
                <button className="btn btn-secondary" onClick={findDuplicateMoviesList}>Duplicate Movies</button>
                <br />
            </div>
            {Object.keys(duplicateMoviesList).length !== 0 && (
                <table border="2" style={{ marginTop: `${30}px` }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Occurences</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(duplicateMoviesList).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
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
