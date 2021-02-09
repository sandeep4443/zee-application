const UpdateMovie = ({ updateMovieName, title, updateMovieTitle, updateMovieButtonDisabled }) => {
    return (
        <div>
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
            >
                Update Movie</button>
        </div>)
}
export default UpdateMovie;