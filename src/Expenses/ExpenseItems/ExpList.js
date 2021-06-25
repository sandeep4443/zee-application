import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpList.css';

const ExpList = ({ filteredExpenses }) => {

    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Items Found</h2>
    }
    return (
        <ul className="expenses-list">
            {filteredExpenses.map(({ title, date, amount, id }) => (
                <ExpenseItem
                    title={title}
                    date={date}
                    amount={amount}
                    key={id}
                />

            ))}
        </ul>
    )
}

export default ExpList
