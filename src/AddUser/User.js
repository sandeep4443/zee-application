import React, { useState } from 'react';
import Users from './Users';
import UsersList from './UsersList';
import styles from './User.module.css';
import Carousel from '../Carousel/Carousel';

const User = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [userInfo, setUserInfo] = useState([])

    const obj = [{
        name,
        age
    }];

    const nameHandler = e => {
        const { value } = e.target
        setName(value);
    }

    const ageHandler = e => {
        const { value } = e.target
        setAge(value);
    }

    const submitChanges = () => {
        userInfo.push(obj);
        setUserInfo(userInfo);
        setName('');
        setAge('');
    }


    return (
        <>
            <Carousel />
            <div className={styles['user-exp']}>
                <Users
                    name={name}
                    age={age}
                    nameHandler={nameHandler}
                    ageHandler={ageHandler}
                    submitChanges={submitChanges}
                />

            </div>
            <div className={styles['user-exp']}>
                <UsersList
                    userInfo={userInfo}
                />
            </div>
        </>
    )
}

export default User;
