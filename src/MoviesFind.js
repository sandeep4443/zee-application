import React from 'react';

const moviesData = [
    { Title: "You can count on me", Production_Budget: 100000, Release_Date: "jan 10 2010", Distributor: "Paramount vantage", Major_Genre: "Drama", Director: "kvprasad" },
    { Title: "Narasimha", Production_Budget: 150000, Release_Date: "march 15 1999", Distributor: "Prasad", Major_Genre: "Family_Oriented", Director: "mahadev" },
    { Title: "Simhabaludu", Production_Budget: 200000, Release_Date: "july 30 2015", Distributor: "koti", Major_Genre: "Action", Director: "ram" },
    { Title: "Ninnu_kore", Production_Budget: 130000, Release_Date: "sep 2 2000", Distributor: "sanjay", Major_Genre: "Love", Director: "suri" }
]
class Moviefind extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movieinfo: moviesData,
            Title : '',
            Production_Budget: '',
            Release_Date: '',
            Distributor: '',
            Major_Genre: '',
            Director: ''
        }
    }


    findSearchData = (e) => {
        const findValue = e.target.value;
        const enterValue = findValue.toLowerCase();
        const findValueLength = findValue.length;
        const filterValue = moviesData.filter((movie) =>{
            const findtitle = movie.Title;
            const titleLowerCase = findtitle.toLowerCase();
            const titleSlice = titleLowerCase.slice(0, findValueLength );
            return enterValue === titleSlice
        });
        this.setState({movieinfo :filterValue });       
    }

    getDelete = (index) => {
        const {movieinfo } = this.state;
        const deleteFilterValue = movieinfo.filter((movie) => {
                return movie !== movieinfo[index];          
        });
        this.setState({movieinfo :deleteFilterValue });
    }

    findGetValue = (e) => {
        const getTitle = e.target.value;
        this.setState({[e.target.id]: getTitle});

    }

    addGetData = () => {
        const {movieinfo, Title,
        Production_Budget,
        Release_Date,
        Distributor,
        Major_Genre,
        Director } = this.state;

        const newMovie =  { Title: Title, Production_Budget: Production_Budget , Release_Date: Release_Date, Distributor: Distributor, Major_Genre: Major_Genre, Director: Director }
        movieinfo.push(newMovie);
        this.setState({movieinfo:movieinfo });       
    }




    render() {
        return (
            <div>
                <p>Display All movie information</p>
                <input type='text' onChange={this.findSearchData} />Find Movie<br />
                
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Production_Budget</th>
                            <th>Release_Date</th>
                            <th>Distributor</th>
                            <th>Major_Genre</th>
                            <th>Director</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movieinfo.map((details,index) => {
                            return (
                                <tr>
                                    <td>{details.Title} </td>
                                    <td>{details.Production_Budget} </td>
                                    <td>{details.Release_Date} </td>
                                    <td>{details.Distributor} </td>
                                    <td>{details.Major_Genre} </td>
                                    <td>{details.Director} </td>
                                    <td><button onClick={() => {this.getDelete(index)} } >Delete</button></td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>

                <input type='text' id='Title' onChange={this.findGetValue} />Title<br />
                <input type='text' id='Production_Budget' onChange={this.findGetValue} />Production_Budget<br />
                <input type='text' id='Release_Date' onChange={this.findGetValue} />Release_Date<br />
                <input type='text' id='Distributor' onChange={this.findGetValue} />Distributor<br />
                <input type='text' id='Major_Genre' onChange={this.findGetValue} />Major_Genre<br />
                <input type='text' id='Director' onChange={this.findGetValue} />Director<br />
                <button onClick={this.addGetData} >Add Data</button>
            </div>
        )
    }
}

export default Moviefind;