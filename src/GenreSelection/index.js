import React from "react";
import PropTypes from "prop-types";
import GenreSelection from './GenreSelection';


const GenreSelectionIndex = ({ genre }) => (
    <>
        <GenreSelection genre={genre} />
    </>
);

export default GenreSelectionIndex;

GenreSelectionIndex.propTypes = {
    genre: PropTypes.func
};