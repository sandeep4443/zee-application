import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import MainPage from "./MoviesList/MainPage";
import CheckBoxes from "./CheckBoxes/CheckBoxes";
import Main from "./Pagination/Main";
import DetailPage from "./Pagination/DetailPage";
import DropDown from "./Dropdown";
const App = () => {
  return (
    <Router>
      <Route path="/" exact strict component={MainPage} />
      <Route path="/checkBoxes" exact strict component={CheckBoxes} />
      <Route path="/pagination" exact strict component={Main} />
      <Route exact path="/pagination/:id/:value" strict component={DetailPage} />
      <Route path="/dropDowns" exact strict component={DropDown} />
    </Router>
  );
};
 export default App;