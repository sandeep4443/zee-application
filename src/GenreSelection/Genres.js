import React, { useState } from 'react';
import { useSelector } from "react-redux";
import GenreItem from './GenreItems';

const Categories = () => {
    const moviesList = useSelector(state => state.listInfoReducer.moviesInfo);
    const [genValue, setGenValue] = useState('');
    const [imdbRating, setImdbRating] = useState();
    const [votes, setVotes] = useState();
    const [fetchData, setFetchData] = useState(false);
    const filterList = moviesList.filter(movie => movie.Major_Genre !== null);

    const onGenreSelection = (event) => {
        const { value } = event.target;
        setGenValue(value);
    }

    const onImdbRating = (event) => {
        const { value } = event.target;
        setImdbRating(value);
    }

    const onVotes = (event) => {
        const { value } = event.target;
        setVotes(value);
    }

    const fetchMoviesData = () => {
        if (votes === undefined) {
            setVotes(0)
        }
        if (imdbRating === undefined) {
            setImdbRating(0);
        }
        setFetchData(true);
    }

    let genreList = moviesList.filter(genre => {
        return ((genre.Major_Genre === genValue && genre.IMDB_Rating >= imdbRating) && genre.IMDB_Votes >= votes);
    });

    return (
        <div style={{ margin: 30 + 'px' }} className="row">
            <div className="col-md-3">
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
            <div className="col-md-3">
                <input
                    id="imdbRating"
                    placeholder="Enter IMDB Rating"
                    type="number"
                    value={imdbRating}
                    name="subject"
                    onChange={onImdbRating}
                />
            </div>
            <div className="col-md-3">
                <input
                    id="votes"
                    type="number"
                    placeholder="Enter Vote"
                    value={votes}
                    name="subject"
                    onChange={onVotes}
                />
            </div>
            <div className="col-md-3">
                <button
                    className="buttonStyle"
                    disabled={genValue === ''}
                    onClick={fetchMoviesData}
                >SEARCH</button>
            </div>
            <GenreItem genreList={genreList} genValue={genValue} fetchData={fetchData} />
        </div>
    )
}

export default Categories;
