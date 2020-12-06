import React from "react";
import "./App.css";
import MoviesList from "./movies.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      movieinfo: MoviesList.slice(0, 20),
      Title: "",
      newTitle: "",
      Release_Date: "",
      Distributor: "",
      Major_Genre: "",
      Director: "",
      duplicateMoviesList: [],
      duplicate: false,
      editMovieName: {},
      genreDetails: {},
    };
  }

  findMovies = (e) => {
    const findValue = e.target.value;
    const enterValue = findValue.toLowerCase();
    const findValueLength = findValue.length;
    const filterValue = this.state.movieinfo.filter((movie) => {
      const findtitle = movie.Title;
      const titleLowerCase = findtitle ? findtitle.toLowerCase() : "";
      const titleSlice = titleLowerCase.slice(0, findValueLength);
      return enterValue === titleSlice;
    });
    this.setState({ movieinfo: filterValue });
  };

  addMovie = () => {
    const {
      movieinfo,
      Title,
      Release_Date,
      Distributor,
      Major_Genre,
      Director,
    } = this.state;
    const newMovie = {
      Title,
      Release_Date,
      Distributor,
      Major_Genre,
      Director,
    };
    movieinfo.push(newMovie);
    this.setState({ movieinfo });
  };

  findDuplicateMoviesList = () => {
    const { duplicateMoviesList } = this.state;
    this.setState({ duplicate: true });
    MoviesList.forEach((el, i) => {
      MoviesList.forEach((element, index) => {
        if (i === index) return null;
        if (element.Title === el.Title) {
          if (!duplicateMoviesList.includes(el)) duplicateMoviesList.push(el);
        }
      });
    });
  };

  findGenreList = () => {
    const { movieinfo } = this.state;
    const major_genre = movieinfo.map((movie) => movie.Major_Genre);
    const unique_genre = major_genre.filter(
      (genre, index) => genre !== null && index === major_genre.indexOf(genre)
    );
    const gen = {};
    let count = 0;
    unique_genre.forEach((genre) => {
      major_genre.forEach((totalGen) => {
        if (genre === totalGen) {
          count += 1;
          gen[genre] = count;
        }
      });
    });
    this.setState({ genreDetails: gen });
  };

  updateMovieName = (e) => {
    console.log("value is", e.target.value);
    this.setState({ newTitle: e.target.value });
  };

  updateMovieTitle = () => {
    const { movieinfo, newTitle, editMovieName } = this.state;
    const moviesUpdate = movieinfo.map((movie) => {
      return movie.Title;
    });
    const isValid = moviesUpdate.includes(newTitle);
    if (isValid) {
      alert("Movie With Title Already Exists");
    } else {
    const editedTitie = { ...editMovieName, Title: newTitle };
    const newMovies = movieinfo.filter((movie) => movie !== editMovieName);
    console.log("edited title", editedTitie);
    console.log("new movies", newMovies);
    this.setState({ movieinfo: [...newMovies, editedTitie] });
    }
  };

  deleteMovies = (index) => {
    const { movieinfo } = this.state;
    const deleteFilterValue = movieinfo.filter((movie) => {
      return movie !== movieinfo[index];
    });
    this.setState({ movieinfo: deleteFilterValue });
  };

  editMovie = (index) => {
    const { movieinfo } = this.state;
    const editMovieName = movieinfo[index];
    this.setState({
      editMovieName,
      editable: true,
    });
  };

  findGetValue = (e) => {
    const getTitle = e.target.value;
    this.setState({ [e.target.id]: getTitle });
  };

  render() {
    console.log(
      "this.state.genreDetails",
      Object.keys(this.state.genreDetails)
    );
    return (
      <>
        <div>
          <label>Enter Title:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={this.findMovies}
          ></input>
        </div>
        <div style={{ margin: 20 + "px" }}>
          <table id="t01">
            <thead>
              <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Release_Date</th>
                <th>Distributor</th>
                <th>Major_Genre</th>
                <th>Edit Movie</th>
                <th>Delete Movie</th>
              </tr>
            </thead>

            <tbody>
              {this.state.movieinfo.map((details, index) => {
                return (
                  <tr>
                    <td>{details.Title} </td>
                    <td>{details.Director} </td>
                    <td>{details.Release_Date} </td>
                    <td>{details.Distributor} </td>
                    <td>{details.Major_Genre} </td>
                    <td>
                      <button
                        onClick={() => {
                          this.editMovie(index);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.deleteMovies(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <input
            type="text"
            id="updatetext"
        
            onChange={this.updateMovieName}
          />
          <button onClick={this.updateMovieTitle}>Update Movie</button>
        </div>

        <div>
          <div>
            <div>
              <label>Enter Title:</label>
              <input type="text" id="Title" onChange={this.findGetValue} />
              <br />
            </div>

            <div>
              <label>Enter Release_Date:</label>
              <input
                type="text"
                id="Release_Date"
                onChange={this.findGetValue}
              />
              <br />
            </div>

            <div>
              <label>Enter Distributor:</label>
              <input
                type="text"
                id="Distributor"
                onChange={this.findGetValue}
              />
              <br />
            </div>

            <div>
              <label>Enter Major_Genre:</label>
              <input
                type="text"
                id="Major_Genre"
                onChange={this.findGetValue}
              />
              <br />
            </div>

            <div>
              <label>Enter Director:</label>
              <input type="text" id="Director" onChange={this.findGetValue} />
              <br />
            </div>
          </div>
          <button onClick={this.addMovie}>ADD MOVIE</button>
          <div style={{ margin: 30 + "px" }}>
            <button onClick={this.findDuplicateMoviesList}>
              FIND DUPLICATES
            </button>
          </div>
          <div style={{ margin: 30 + "px" }}>
            <button onClick={this.findGenreList}>GENRE DETAILS</button>

            <br />
           
          </div>
          {this.state.duplicateMoviesList.length > 0 && (
            <h1>DUPLICATE MOVIES: {this.state.duplicateMoviesList.length}</h1>
          )}
          {this.state.duplicate && (
            <div style={{ margin: 20 + "px" }}>
              <table id="t01">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Release_Date</th>
                    <th>Distributor</th>
                    <th>Major_Genre</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.duplicateMoviesList.map((details, index) => {
                    return (
                      <tr>
                        <td>{details.Title} </td>
                        <td>{details.Director} </td>
                        <td>{details.Release_Date} </td>
                        <td>{details.Distributor} </td>
                        <td>{details.Major_Genre} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <div>{Object.entries(this.state.genreDetails)}</div>

        </div>
      </>
    );
  }
}

export default App;
