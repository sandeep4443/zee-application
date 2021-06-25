import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expense.css';

const ExpenseItem = ({ date, amount, title }) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate month={month} day={day} year={year} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;
