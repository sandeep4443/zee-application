import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MainPage from './MoviesList/MainPage';
import CheckBoxes from './CheckBoxes/CheckBoxes';
import Main from './Pagination/Main';
import DetailPage from './Pagination/DetailPage';
import DropDown from './Dropdown';
import KeyBoard from './KeyboardEvent/Keyboard';
import Hooks from './Hooks/DataLoader/DataLoader';
import BreakingBadDetail from './BreakingBad/BreakingBadPage';
import Spinner from './Spinner/SpinnerPage';

const App = () => (
    <Router>
        <Route path="/" exact strict component={MainPage} />
        <Route path="/checkBoxes" exact strict component={CheckBoxes} />
        <Route path="/pagination" exact strict component={Main} />
        <Route exact path="/pagination/:id/:value" strict component={DetailPage} />
        <Route path="/dropDowns" exact strict component={DropDown} />
        <Route path="/keyboard" exact strict component={KeyBoard} />
        <Route path="/hooks" exact strict component={Hooks} />
        <Route path="/breakingBad" exact strict component={BreakingBadDetail} />
        <Route path="/spinner" exact strict component={Spinner} />
    </Router>
);
export default App;
