import MoviesList from '../movies.json';

const initState = { moviesInfo: MoviesList };
const listInfoReducer = (state = initState) => state;
export default listInfoReducer;