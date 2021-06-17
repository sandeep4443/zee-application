import React from 'react'

const GenreItems = ({ genreList, genValue, fetchData }) => {
    let list = genreList.sort((a, b) => (a.Title > b.Title) ? 1 : ((b.Title > a.Title) ? -1 : 0));
    return (
        <div>
            {(fetchData && genreList.length > 0) && <strong>{genValue} : {genreList.length}</strong>}
            {(fetchData && genreList.length > 0) &&
                <table id="t01">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>US_Gross</th>
                            <th>MPAA_Rating</th>
                            <th>Major_Genre</th>
                            <th>IMDB_Rating</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list && list.map((genre, index) => (
                            <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {genre.Title}
                                </td>
                                <td>
                                    {genre.US_Gross}
                                </td>
                                <td>
                                    {genre.MPAA_Rating}
                                </td>
                                <td>
                                    {genre.Major_Genre}
                                </td>
                                <td>
                                    {genre.IMDB_Rating}
                                </td>
                                <td>
                                    {genre.IMDB_Votes}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {fetchData && genreList.length === 0 &&
                <div>No Results Found</div>}
        </div>
    )
}

export default GenreItems

