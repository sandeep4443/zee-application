import React, { useState } from 'react';
import styles from './User.module.css';

const Users = ({
    name,
    age,
    nameHandler,
    ageHandler,
    submitChanges
}) => {

    return (
        <>
            <div className={styles['users__controls']}>
                <div className={styles['users__control']}>
                    <label>UserName</label>
                    <input type="text" value={name} onChange={nameHandler} />
                </div>
                <div className={styles['users__control']}>
                    <label>Age</label>
                    <input type="number" value={age} onChange={ageHandler} />
                </div>

            </div>
            <div className={styles['users__actions']}>
                <input
                    type="button"
                    onClick={submitChanges}
                    value="Add User"
                    disabled={name === '' && age === ''}
                />
            </div>
        </>
    )
}

export default Users
