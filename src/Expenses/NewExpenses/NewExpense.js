import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {

    const expenseDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        onAddExpense(data);
    }

    return (
        <div className="new-expense">
            <ExpenseForm saveExpenseData={expenseDataHandler} />
        </div>
    )
}

export default NewExpense;

