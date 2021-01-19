import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import MainPage from "./MainPage";
import CheckBoxes from "./CheckBoxes";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact strict component={MainPage} />
        <Route path="/checkBoxes" exact strict component={CheckBoxes} />
      </div>
    </Router>
  );
};

export default App;
