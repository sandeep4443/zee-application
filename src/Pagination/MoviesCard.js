import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pageDetails } from '../actions/pageDetails';

const MovieCard = ({
  movie, value, history, detailPage,
}) => {
  const navigateDetailPage = () => {
    detailPage({ movie, value });
    history.push(`/pagination/${value + 1}/${movie.Title}`);
  }
  return (
    <>
      <div className="col-sm-6 col-md-4 country-card" onClick={() => navigateDetailPage()}>
        <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
          <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
            <img
              src="https://www.countryflags.io/kp/flat/64.png"
              className="d-block h-100"
              alt="img"
            />
          </div>
          <div className="px-3">
            <span className="country-region text-secondary text-uppercase">
              <a>{movie.Title}</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  detailPage: (items) => {
    dispatch(pageDetails(items))
  },
})

export default connect(null, mapDispatchToProps)(MovieCard);

MovieCard.propTypes = {
  movie: PropTypes.object,
  value: PropTypes.string,
  history: PropTypes.object,
  detailPage: PropTypes.func
}
