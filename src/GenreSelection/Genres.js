import React, { useState } from 'react';
import { useSelector } from "react-redux";
import GenreItem from './GenreItems';

const Categories = () => {
    const moviesList = useSelector(state => state.listInfoReducer.moviesInfo);
    const [genValue, setGenValue] = useState('');
    const filterList = moviesList.filter(movie => movie.Major_Genre !== null);

    const onGenreSelection = (event) => {
        const { value } = event.target;
        setGenValue(value);

    }

    let genreList = moviesList.filter(genre => {
        return genre.Major_Genre === genValue;
    });

    return (
        <div style={{ margin: 30 + 'px' }}>
            <div>
                <label>Category</label>
                <select
                    value={genValue}
                    onChange={onGenreSelection}
                >
                    <option>--Select Genre Category--</option>
                    {Array.from(new Set(filterList.map(obj => obj.Major_Genre))).map(genre => {
                        return <option value={genre} key={genre}>{genre}</option>
                    })}
                </select>
            </div>
            <GenreItem genreList={genreList} genValue={genValue} />
        </div>
    )
}

export default Categories;
