import React from 'react'

const GenreSelection = ({ genre }) => (
    <div style={{ margin: `${30}px` }}>
        <input
            type="button"
            className="buttonStyle"
            value="Category Selection"
            onClick={() => genre()}
        />
    </div>
);

export default GenreSelection;
