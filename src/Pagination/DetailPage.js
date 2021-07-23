import React from 'react';
import { useSelector } from 'react-redux';

const DetailPage = () => {
    const pageDetails = useSelector(state => state.movieDetailReducer.data);

    // if (pageDetails !== undefined) {
    //     const {
    //         Title,
    //         US_Gross,
    //         Worldwide_Gross,
    //         Distributor,
    //         Director,
    //         Major_Genre,
    //         Production_Budget,
    //         Release_Date,
    //         IMDB_Rating,
    //         IMDB_Votes,
    //         Rotten_Tomatoes_Rating,
    //     } = pageDetails.movie;
    // }

    return pageDetails !== undefined ?
        (
            <div style={{ margin: `${30}px` }}>
                <h2>
                    Details of Movie:
                    {pageDetails.movie.Title}
                </h2>
                <table id="t01">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>US Gross</th>
                            <th>Worldwide Gross</th>
                            <th>Distributor</th>
                            <th>Director</th>
                            <th>Major_Genre</th>
                            <th>Production Budget</th>
                            <th>Release_Date</th>
                            <th>IMDB Rating</th>
                            <th>IMDB Votes</th>
                            <th>Rotten Tomatoes Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {pageDetails.movie.Title}
                            </td>
                            <td>
                                {pageDetails.movie.US_Gross}
                            </td>
                            <td>{pageDetails.movie.Worldwide_Gross}</td>
                            <td>
                                {pageDetails.movie.Distributor}
                            </td>
                            <td>{pageDetails.movie.Director}</td>
                            <td>
                                {pageDetails.movie.Major_Genre}
                            </td>
                            <td>{pageDetails.movie.Production_Budget}</td>
                            <td>{pageDetails.movie.Release_Date}</td>
                            <td>{pageDetails.movie.IMDB_Rating}</td>
                            <td>{pageDetails.movie.IMDB_Votes}</td>
                            <td>{pageDetails.movie.Rotten_Tomatoes_Rating}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ) : (
            <h1>Go back to previous page</h1>
        )

}

export default DetailPage;

