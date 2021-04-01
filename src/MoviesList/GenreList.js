import React from 'react';
import PropTypes from 'prop-types';

const GenreList = ({ genreDetails, findGenreList }) => (
    <div style={ { margin: `${ 30 }px` } }>
        <div>
            <button className="btn btn-secondary" onClick={ findGenreList }>GENRE DETAILS</button>
            <br />
        </div>
        {Object.keys(genreDetails).length !== 0 && (
        <table border="2">
            <thead>
                <tr>
                    <th>Genre</th>
                    <th>Occurences</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(genreDetails).map(([ key, value ]) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        )}
    </div>
);
export default GenreList;

GenreList.propTypes = {
    genreDetails: PropTypes.object,
    findGenreList: PropTypes.func
  }
