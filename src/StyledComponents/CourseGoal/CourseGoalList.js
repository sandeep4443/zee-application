import React from 'react';

import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = ({ items, onDeleteItem }) => {
    return (
        <ul className="goal-list">
            {items.map(goal => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
