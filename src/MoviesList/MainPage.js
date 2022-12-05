import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableList from './TableList';
import DuplicateMovies from './DuplicateMoviesList';
import GenreList from './GenreList';
import AddMovie from './AddMovie';
import UpdateMovie from './UpdateMovie';
import SideMenu from './SideMenu';
import '../App.css';


const MainPage = ({history}) => {

  const movieInfo = useSelector(state => state.listInfoReducer.moviesInfo);

  const [newMovieInfo, setMovieInfo] = useState([]);
  const [resultsFound, setResultsFound] = useState(false);
  const [moviesCount, setMoviesCount] = useState(0);
  const [Title, setNewTitle] = useState('');
  const [duplicateMoviesList, setDuplicateMoviesList] = useState([]);
  const [newEditMovieName, setEditMovieName] = useState({});
  const [genreDetails, setGenreDetails] = useState({});
  const [titleValue, setTitleValue] = useState('');
  const [originalValue, setValue] = useState({
    Release_Date: '',
    Title: '',
    Distributor: '',
    Major_Genre: '',
    Director: ''
  });
  const [updateMovieButtonDisabled, setUpdateMovieButtonDisabled] = useState(true);
  const [editableMovie, setEditableMovie] = useState(false);

  const booleanValue = (moviesCount >= 0 && resultsFound);

  useEffect(() => {
    setMovieInfo(movieInfo.slice(0, 20));
  }, [movieInfo]);

  const findMovies = e => {
    const findValue = e.target.value;
    setTitleValue(findValue);
    const filterValue = movieInfo.filter((title) => {
      const titleMovies = title.Title;
      if (titleMovies !== null) {
        const movie = titleMovies.toString().toLowerCase();
        return movie.includes(findValue.toLowerCase());
      }
      return null;
    });
    setMoviesCount(filterValue.length);
    setResultsFound(true);

    if (findValue !== '') {
      setMovieInfo(filterValue)
    } else {
      setMovieInfo(movieInfo.slice(0, 20));
    }
  };

  const addMovie = () => {
    let pushedElements = [];
    const newMovie = {
      Title: originalValue.Title,
      Release_Date: originalValue.Release_Date,
      Distributor: originalValue.Distributor,
      Major_Genre: originalValue.Major_Genre,
      Director: originalValue.Director,
    };
    pushedElements.push(...newMovieInfo, newMovie);
    setMovieInfo(pushedElements);
  };


  const findGetValue = e => {
    const getTitle = e.target.value;
    setValue({ ...originalValue, [e.target.id]: getTitle });
  };

  const findDuplicateMoviesList = () => {
    const moviesList = [];
    movieInfo.forEach((el, i) => {
      movieInfo.forEach((element, index) => {
        if (i === index) return null;
        if (element.Title === el.Title) {
          if (!moviesList.includes(el)) {
            moviesList.push(el);
          }
        }
      });
    });
    const duplicateMoviesList = moviesList.reduce((acc, curr) => {
      if (acc[curr.Title]) {
        acc[curr.Title] = 1;
      } else {
        acc[curr.Title] =  ++acc[curr.Title];
      }
      return acc;
    }, {});
    setDuplicateMoviesList(duplicateMoviesList)
  };

  const findGenreList = () => {
    const genreDetails = movieInfo.reduce((acc, curr) => {
      if (acc[curr.Major_Genre]) {
        acc[curr.Major_Genre] = ++acc[curr.Major_Genre];
      } else {
        acc[curr.Major_Genre] = 1;
      }
      return acc;
    }, {});
    setGenreDetails(genreDetails);
  };

  const updateMovieName = e => {
    newMovieInfo.forEach((element) => {
      if ((element.Title !== e.target.value) && editableMovie) {
        setUpdateMovieButtonDisabled(false);
      } else {
        setUpdateMovieButtonDisabled(true);
      }
    });
    setNewTitle(e.target.value);
  };

  const updateMovieTitle = () => {
    const moviesUpdate = newMovieInfo.map((movie) => movie.Title);
    const isValid = moviesUpdate.includes(Title);
    if (isValid) {
      alert('Movie With Title Already Exists');
      setUpdateMovieButtonDisabled(true);
    } else {
      const editedTitle = { ...newEditMovieName, Title };
      const newMovies = newMovieInfo.filter((movie) => movie !== newEditMovieName);
      setMovieInfo([...newMovies, editedTitle])
    }
    document.getElementById('updatetext').value = '';
  };

  const editMovie = index => {
    setEditableMovie(true);
    const editMovieName = newMovieInfo[index];
    setEditMovieName(editMovieName);
    newMovieInfo.forEach((element) => {
      if (newEditMovieName.Title !== '' && !!editMovieName.Title.includes(element.Title)) {
        setUpdateMovieButtonDisabled(false);
      } else {
        setUpdateMovieButtonDisabled(true);
      }
    });
  };

  const deleteMovies = index => {
    const deleteFilterValue = newMovieInfo.filter((movie) => movie !== movieInfo[index]);
    setMovieInfo(deleteFilterValue);
  };

  const checkbox = () => {
    history.push('/checkBoxes');
  };

  const dropDown = () => {
    history.push('/dropDowns');
  };

  const keyboard = () => {
    history.push('/keyboard');
  };

  const hooks = () => {
    history.push('/hooks');
  };

  const breakingBad = () => {
    history.push('/breakingBad');
  }

  const addRemove = () => {
    history.push('/addRemove');
  }

  const genre = () => {
    history.push('/genres');
  }

  const calculator = () => {
    history.push('/calculator');
  }

  const expenses = () => {
    history.push('/expenses');
  }

  const styles = () => {
    history.push('/styles');
  }

  const addUser = () => {
    history.push('/addUser')
  }
  const empData = () => {
    history.push('./employee');
  }

  const cards = () => {
    history.push('./cards');
  }

  const iplFixtures = () => {
    history.push('./fixtures');
  }

  return (
    <>

      <SideMenu
        addUser={addUser}
        styles={styles}
        expenses={expenses}
        genre={genre}
        hooks={hooks}
        breakingBad={breakingBad}
        checkbox={checkbox}
        dropDown={dropDown}
        keyboard={keyboard}
        addRemove={addRemove}
        calculator={calculator}
        empData={empData}
        cards={cards}
        iplFixtures={iplFixtures}
      />

      <div style={{ marginLeft: 5 + '%' }}>
        <AddMovie
          findGetValue={findGetValue}
          addMovie={addMovie}
        />

        <UpdateMovie
          updateMovieName={updateMovieName}
          title={newEditMovieName.Title}
          updateMovieTitle={updateMovieTitle}
          updateMovieButtonDisabled={updateMovieButtonDisabled}
        />

        <TableList
          movieinfo={newMovieInfo}
          editMovie={editMovie}
          deleteMovies={deleteMovies}
          booleanValue={booleanValue}
          moviesCount={moviesCount}
          findMovies={findMovies}
          titleValue={titleValue}
        />

        <DuplicateMovies
          duplicateMoviesList={duplicateMoviesList}
          findDuplicateMoviesList={findDuplicateMoviesList}
        />

        <GenreList
          findGenreList={findGenreList}
          genreDetails={genreDetails}
        />

      </div>
    </>
  );

}

export default MainPage;
