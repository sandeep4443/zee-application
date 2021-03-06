import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableList from './TableList';
import DuplicateMovies from './DuplicateMoviesList';
import GenreList from './GenreList';
import AddMovie from './AddMovie';
import UpdateMovie from './UpdateMovie';
import CheckBox from '../CheckBoxes/CheckBox';
import DropDowns from '../Dropdown/DropDowns';
import KeyEvents from '../KeyboardEvent/KeyEvents';
import Hooks from '../Hooks'
import BreakingBad from '../BreakingBad';
import AddRemove from '../AddRemove';
import Genres from '../GenreSelection';
import Calculator from '../Calculator';
import Expenses from '../Expenses/ExpenseItems';
import '../App.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieinfo: [],
      resultsFound: false,
      moviesCount: 0,
      newTitle: '',
      Release_Date: '',
      Distributor: '',
      Major_Genre: '',
      Director: '',
      duplicateMoviesList: [],
      duplicate: false,
      editMovieName: {},
      genreDetails: {},
      titleValue: '',
      updateMovieButtonDisabled: true,
    };
  }

  componentDidMount() {
    const { movieInfo } = this.props;
    this.setState({
      movieinfo: movieInfo.slice(0, 20),
    })
  }

  findMovies = e => {
    const movieinfo = this.props.movieInfo;
    const findValue = e.target.value;
    this.setState({ titleValue: findValue });
    const filterValue = movieinfo.filter((title) => {
      const titleMovies = title.Title;
      if (titleMovies !== null) {
        const movie = titleMovies.toString().toLowerCase();
        return movie.includes(findValue.toLowerCase());
      }
      return null;
    });
    this.setState({
      moviesCount: filterValue.length,
      resultsFound: true,
    });
    if (findValue !== '') {
      this.setState({ movieinfo: filterValue });
    } else {
      this.setState({
        movieinfo: this.props.movieInfo.slice(0, 20),
      });
    }
  };

  addMovie = () => {
    const {
      movieinfo, Title, Release_Date, Distributor, Major_Genre, Director,
    } = this.state;
    const newMovie = {
      Title, Release_Date, Distributor, Major_Genre, Director,
    };
    movieinfo.push(newMovie);
    this.setState({ movieinfo });
  };

  findDuplicateMoviesList = () => {
    const { duplicateMoviesList } = this.state;
    this.setState({ duplicate: true });
    this.props.movieInfo.forEach((el, i) => {
      this.props.movieInfo.forEach((element, index) => {
        if (i === index) return null;
        if (element.Title === el.Title) {
          if (!duplicateMoviesList.includes(el)) { duplicateMoviesList.push(el); }
        }
      });
    });
  };

  findGenreList = () => {
    const majorGenre = this.props.movieInfo.map((movie) => movie.Major_Genre);
    const genreDetails = {};
    majorGenre.forEach((value) => {
      if (genreDetails[value]) {
        genreDetails[value] += 1;
      } else {
        genreDetails[value] = 1;
      }
    });
    this.setState({ genreDetails });
  };

  updateMovieName = e => {
    if (e.target.value !== '') {
      this.setState({
        updateMovieButtonDisabled: false,
      })
    } else {
      this.setState({ updateMovieButtonDisabled: true })
    }
    this.setState({ newTitle: e.target.value });
  };

  updateMovieTitle = () => {
    const { movieinfo, newTitle, editMovieName } = this.state;
    const moviesUpdate = movieinfo.map((movie) => movie.Title);
    const isValid = moviesUpdate.includes(newTitle);
    if (isValid) {
      alert('Movie With Title Already Exists');
    } else {
      const editedTitie = { ...editMovieName, Title: newTitle };
      const newMovies = movieinfo.filter((movie) => movie !== editMovieName);
      this.setState({ movieinfo: [...newMovies, editedTitie] });
    }
    document.getElementById('updatetext').value = '';
  };

  editMovie = index => {
    const { movieinfo } = this.state;
    const editMovieName = movieinfo[index];
    this.setState({ editMovieName });
    if (this.state.editMovieName.Title !== '') {
      this.setState({ updateMovieButtonDisabled: false })
    } else {
      this.setState({ updateMovieButtonDisabled: true })
    }
  };

  deleteMovies = index => {
    const { movieinfo } = this.state;
    const deleteFilterValue = movieinfo.filter((movie) => movie !== movieinfo[index]);
    this.setState({ movieinfo: deleteFilterValue });
  };

  findGetValue = e => {
    const getTitle = e.target.value;
    this.setState({ [e.target.id]: getTitle });
  };

  checkbox = () => {
    this.props.history.push('/checkBoxes');
  };

  dropDown = () => {
    this.props.history.push('/dropDowns');
  };

  keyboard = () => {
    this.props.history.push('/keyboard');
  };

  hooks = () => {
    this.props.history.push('/hooks');
  };

  breakingBad = () => {
    this.props.history.push('/breakingBad');
  }

  spinner = () => {
    this.props.history.push('/spinner');
  }

  addRemove = () => {
    this.props.history.push('/addRemove');
  }

  genre = () => {
    this.props.history.push('/genres');
  }

  calculator = () => {
    this.props.history.push('/calculator');
  }

  expenses = () => {
    this.props.history.push('/expenses');
  }

  render() {
    const booleanValue = (this.state.moviesCount >= 0 && this.state.resultsFound);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Expenses
              expenses={this.expenses}
            />
          </div>
          <div className="col-md-4">
            <Genres
              genre={this.genre}
            />
          </div>
          <div className="col-md-4">
            <Hooks
              hooks={this.hooks}
            />
          </div>
          <div className="col-md-4">
            <BreakingBad
              breakingBad={this.breakingBad}
            />
          </div>
          <div className="col-md-4">
            <CheckBox
              checkbox={this.checkbox}
              pagination={this.pagination}
            />
          </div>
          <div className="col-md-4">
            <DropDowns
              dropDown={this.dropDown}
            />
          </div>
          <div className="col-md-4">
            <KeyEvents
              keyEvents={this.keyboard}
            />
          </div>
          <div className="col-md-4">
            <AddRemove
              addRemove={this.addRemove}
            />
          </div>
          <div className="col-md-4">
            <Calculator
              calculator={this.calculator}
            />
          </div>
        </div>
        <AddMovie
          findGetValue={this.findGetValue}
          addMovie={this.addMovie}
        />

        <UpdateMovie
          updateMovieName={this.updateMovieName}
          title={this.state.editMovieName.Title}
          updateMovieTitle={this.updateMovieTitle}
          updateMovieButtonDisabled={this.state.updateMovieButtonDisabled}
        />

        <TableList
          movieinfo={this.state.movieinfo}
          editMovie={this.editMovie}
          deleteMovies={this.deleteMovies}
          booleanValue={booleanValue}
          moviesCount={this.state.moviesCount}
          findMovies={this.findMovies}
          titleValue={this.state.titleValue}
        />

        <DuplicateMovies
          duplicateMoviesList={this.state.duplicateMoviesList}
          findDuplicateMoviesList={this.findDuplicateMoviesList}
        />

        <GenreList
          findGenreList={this.findGenreList}
          genreDetails={this.state.genreDetails}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movieInfo: state.listInfoReducer.moviesInfo
})

export default connect(mapStateToProps)(MainPage);

MainPage.propTypes = {
  movieInfo: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      US_Gross: PropTypes.number
    })
  ),
  history: PropTypes.object
}
