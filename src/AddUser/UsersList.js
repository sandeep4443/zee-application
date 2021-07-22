import React from 'react';
import styles from './User.module.css';

const UsersList = ({ userInfo }) => {
    let users = userInfo.map(user => user);
    return (
        <div className={styles['users__controls']}>
            {users.map(user => {
                return (
                    <div className={styles['users__user']}>{user[0].name} is {user[0].age} old</div>
                )
            })}
        </div>
    )
}

export default UsersList;
