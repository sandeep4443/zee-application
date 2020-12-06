

const searchTermReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_TERM':

            return {...state, searchTerm: action.searchTerm };  
        default:
            return state;
    }
};

export default searchTermReducer;