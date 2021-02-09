import { connect } from 'react-redux'; 
import { pageDetails } from '../actions/pageDetails';

const MovieCard = ({ movie, value, history, detailPage }) => {
    const navigateDetailPage = () => {
        detailPage({ movie, value });
        history.push(`/pagination/${value + 1}/${movie.Title}`);
    }
    return (
        <>
            <div className="col-sm-6 col-md-4">
                <div className="border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
                    <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
                    </div>
                    <div className="px-3">
                        <span className="text-dark d-block font-weight-bold">
                        <a onClick={() => navigateDetailPage()}>{movie.Title}</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        detailPage: (items) => {
            dispatch(pageDetails(items))
        }
    }
}

export default connect(null, mapDispatchToProps)(MovieCard);
