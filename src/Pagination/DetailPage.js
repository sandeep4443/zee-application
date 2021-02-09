import { connect } from 'react-redux';
const DetailPage = ({ pageDetails }) => {
    console.log("props are", pageDetails.movie);
    return (
        <div>details page</div>
    )
}

const mapStateToProps = (state) => {
    return {
        pageDetails: state.movieDetailReducer.data
    }
}

export default connect(mapStateToProps)(DetailPage);