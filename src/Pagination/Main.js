import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import MovieCard from './MoviesCard';
import styles from '../App.css';

class Main extends Component {
  state = {
    allMovies: [],
    currentMovies: [],
    currentPage: null,
    totalPages: null,
  };

  componentDidMount() {
    const allMovies = this.props.movieInfo;
    this.setState({ allMovies });
  }

  onPageChanged = (data) => {
    const { allMovies } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentMovies = allMovies.slice(offset, offset + pageLimit);
    this.setState({
      currentPage,
      currentMovies,
      totalPages
    });
  };

  render() {
    const { selectedItems } = this.props;
    const {
      allMovies,
      currentMovies,
      currentPage,
      totalPages,
    } = this.state;
    const totalMovies = allMovies.length;
    if (totalMovies === 0) return null;
    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
    return (
      <>
        {selectedItems && selectedItems.length > 0
          && (
            <div style={{ margin: `${20}px` }}>

              <h2 className={headerClass}>
                <strong className="text-secondary">
                  Selected Items:
                            </strong>
              </h2>
              {selectedItems.map((item) => (
                <div className="row" key={item}>
                  <ul className="col-md-4">
                    <li className={styles.tableStyle, "borders"}>
                      {item}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        <div className="container mb-5">
          <div className="row d-flex flex-row py-5">
            <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <h2 className={headerClass}>
                  <strong className="text-secondary">
                    {totalMovies}
                  </strong>
                  {' '}
                                  Movies
                              </h2>
                {currentPage && (
                  <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page
                    {' '}
                    <span className="font-weight-bold">
                      {currentPage}
                    </span>
                    {' '}
                                  /
                    {' '}
                    <span className="font-weight-bold">
                      {totalPages}
                    </span>
                  </span>
                )}
              </div>
              <div className="d-flex flex-row py-4 align-items-center">
                <Pagination
                  totalRecords={totalMovies}
                  pageLimit={90}
                  pageNeighbours={1}
                  onPageChanged={this.onPageChanged}
                />
              </div>
            </div>
            {currentMovies.map((movie, index) => (
              <MovieCard
                {...this.props}
                value={index}
                movie={movie}
                key={index}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedItems: state.selectedItemsReducer.data,
  movieInfo: state.rootReducer.moviesInfo,
})

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  movieInfo: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      US_Gross: PropTypes.number
    })
  ),
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      US_Gross: PropTypes.number
    })
  ),
  selItems: PropTypes.func
}
