import { createStore, combineReducers } from "redux";
import rootReducer from "../src/reducers/rootReducer";
import selectedItemsReducer from "../src/reducers/selectedItemsReducer";
import movieDetailReducer from "../src/reducers/movieDetailReducer";

const rootReducr = combineReducers({ rootReducer, selectedItemsReducer, movieDetailReducer })
const store = createStore(rootReducr);

export default store;