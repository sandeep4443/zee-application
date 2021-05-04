import { combineReducers } from 'redux';
import listInfoReducer from './listInfoReducer';
import selectedItemsReducer from './selectedItemsReducer';
import movieDetailReducer from './movieDetailReducer';

const rootReducr = {
    listInfoReducer,
    selectedItemsReducer,
    movieDetailReducer
};

const rootReducer = combineReducers(rootReducr)

export default rootReducer;
