import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';
import selectedItemsReducer from './reducers/selectedItemsReducer';
import movieDetailReducer from './reducers/movieDetailReducer';

const rootReducr = combineReducers({ rootReducer, selectedItemsReducer, movieDetailReducer })
const store = createStore(rootReducr);

export default store;
