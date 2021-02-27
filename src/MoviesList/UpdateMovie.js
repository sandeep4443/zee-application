const UpdateMovie = ({ updateMovieName, title, updateMovieTitle, updateMovieButtonDisabled }) => {
    return (
        <div style={{margin: 30 + 'px'}}>
            <input
                type="text"
                id="updatetext"
                onChange={updateMovieName}
                defaultValue={title}
            />

            <button
                class="btn btn-primary"
                onClick={updateMovieTitle}
                disabled={updateMovieButtonDisabled}
                style={{marginLeft: 20+'px'}}
            >
                Update Movie</button>
        </div>
        )
}
export default UpdateMovie;