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
import AddRemoveElements from './AddRemove/AddElements';
import Genres from './GenreSelection/Genres';
import Calci from './Calculator/Calci';
import Expenses from './Expenses/ExpenseItems/ExpensesList';
import StyledComponent from './StyledComponents/StyledComponent';
import Users from './AddUser/User';
import Carousel from './Carousel/Carousel';
import Employee from './EmployeeData/MainPage';
import Card from './Cards/Card';


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
        <Route path="/addRemove" exact strict component={AddRemoveElements} />
        <Route path="/genres" exact strict component={Genres} />
        <Route path="/calculator" exact strict component={Calci} />
        <Route path="/expenses" exact strict component={Expenses} />
        <Route path="/styles" exact strict component={StyledComponent} />
        <Route path="/addUser" exact strict component={Users} />
        <Route path="/carousel" exact strict component={Carousel} />
        <Route path="/employee" exact strict component={Employee} />
        <Route path="/cards" exact strict component={Card} />
    </Router>
);
export default App;
