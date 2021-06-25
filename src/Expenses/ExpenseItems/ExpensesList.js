import React, { useState } from 'react';
import ExpList from './ExpList';
import Card from '../UI/Card';
import NewExpense from '../NewExpenses/NewExpense';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './ExpenseList.css';

const DUMMY_DATA = [
    {
        id: 1,
        title: 'The Wonder Kid',
        amount: 98.20,
        date: new Date(2019, 1, 14)
    },
    {
        id: 2,
        title: 'The Anonymous Kid',
        amount: 98.20,
        date: new Date(2020, 11, 15)
    },
    {
        id: 3,
        title: 'The unKnown Kid',
        amount: 94.20,
        date: new Date(2019, 9, 23)
    },
    {
        id: 4,
        title: 'Inscidious',
        amount: 198.20,
        date: new Date(2018, 6, 11)
    },
    {
        id: 5,
        title: 'The Kid',
        amount: 98.20,
        date: new Date(2021, 11, 15)
    },
    {
        id: 6,
        title: 'Kid',
        amount: 98.20,
        date: new Date(2022, 11, 15)
    },
];

const ExpensesList = () => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [expenses, setExpenses] = useState(DUMMY_DATA);


    const onAddExpense = (expense) => {
        setExpenses(prevState => (
            [expense, ...prevState]
        ))
    }
    const filterHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }


    const filteredExpenses = expenses.filter(expense => (
        expense.date.getFullYear().toString() === filteredYear
    ));


    return (
        <>
            <NewExpense onAddExpense={onAddExpense} />
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpList filteredExpenses={filteredExpenses} />
            </Card>
        </>

    )
}

export default ExpensesList;
