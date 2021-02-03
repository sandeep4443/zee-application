import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import MainPage from "./MoviesList/MainPage";
import CheckBoxes from "./CheckBoxes";
import Pagination from "./Pagination/Pagination";
const App = () => {
  return (
    <Router>
              
      <Route path="/" exact strict component={MainPage} />
              
      <Route path="/checkBoxes" exact strict component={CheckBoxes} />
              
      <Route path="/pagination" exact strict component={Pagination} />
                
    </Router>
  );
};
export default App;
