const GenreList = ({ genreDetails, findGenreList }) => {
    return (
        <>
            <div style={{ margin: 30 + "px" }}>
                <button class="btn btn-secondary" onClick={findGenreList}>GENRE DETAILS</button>
                <br />
            </div>
            {Object.keys(genreDetails).length !== 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Genre</th>
                            <th>Occurences</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(genreDetails).map(([key, value]) => {
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>);
                        })}
                    </tbody>
                </table>)}
        </>
    );
};
export default GenreList;