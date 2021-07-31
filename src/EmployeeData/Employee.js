import React from 'react';
import './Employee.css';

const Employee = ({ item }) => {
    const {
        employee_name: name,
        employee_age: age,
        employee_salary: salary
    } = item;
    return (
        <div className='employee'>
            <div className='employee-inner'>
                <div className='employee-front'>
                    <h1>{item.id}</h1>
                    <div>
                        <strong>Name:</strong> {name}
                    </div>
                    <div>
                        <strong>Age:</strong> {age}
                    </div>
                    <div>
                        <strong>Salary:</strong> {salary}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee