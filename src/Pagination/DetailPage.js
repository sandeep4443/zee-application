import { connect } from 'react-redux';
const DetailPage = ({ pageDetails }) => {
  
    const {    
            Title,
            US_Gross,
            Worldwide_Gross,
            Distributor,
            Director,
            Major_Genre,
            Production_Budget,
            Release_Date,
            IMDB_Rating,
            IMDB_Votes,
            Rotten_Tomatoes_Rating
         } = pageDetails.movie;

    return (
        <div style={{margin: 30 + 'px'}}>
        <h2>Details of Movie: {Title}</h2>
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
                        <td>{Title} </td>
                        <td>{US_Gross} </td>
                        <td>{Worldwide_Gross}</td>
                        <td>{Distributor} </td>
                        <td>{Director}</td>
                        <td>{Major_Genre} </td>
                        <td>{Production_Budget}</td>
                        <td>{Release_Date}</td>
                        <td>{IMDB_Rating}</td>
                        <td>{IMDB_Votes}</td>
                        <td>{Rotten_Tomatoes_Rating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pageDetails: state.movieDetailReducer.data
    }
}

export default connect(mapStateToProps)(DetailPage);