/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';

const TableList = ({
    movieinfo,
    editMovie,
    deleteMovies,
    booleanValue,
    moviesCount,
    findMovies,
    titleValue,
}) => (
    <div style={{ margin: `${20}px` }}>
        <div>
            <label>Enter Title:</label>
            <input type="text" id="fname" name="fname" onChange={findMovies} />
        </div>
        {(booleanValue && titleValue !== '') && (
            <h3>
                {moviesCount}
 results found
            </h3>
        )}
        <table id="t01">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Release_Date</th>
                    <th>Distributor</th>
                    <th>Major_Genre</th>
                    <th>Edit Movie</th>
                    <th>Delete Movie</th>
                </tr>
            </thead>
            <tbody>
                {movieinfo.map((details, index) => (
                    <tr key={index}>
                        <td>
                            {details.Title}
                        </td>
                        <td>
                            {details.Director}
                        </td>
                        <td>
                            {details.Release_Date}
                        </td>
                        <td>
                            {details.Distributor}
                        </td>
                        <td>
                            {details.Major_Genre}
                        </td>
                        <td>
                            <button onClick={() => { editMovie(index); }} className="bStyle">Edit</button>
                        </td>
                        <td>
                            <button onClick={() => { deleteMovies(index); }} className="bStyle">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TableList;

TableList.propTypes = {
    movieinfo: PropTypes.arrayOf(
        PropTypes.shape({
            Title: PropTypes.string,
            US_Gross: PropTypes.number
        })
    ),
    editMovie: PropTypes.func,
    deleteMovies: PropTypes.func,
    booleanValue: PropTypes.bool,
    moviesCount: PropTypes.number,
    findMovies: PropTypes.func,
    titleValue: PropTypes.string
}
