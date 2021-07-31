import React from 'react';
import Spinner from '../Utilities/Spinner';
import Employee from './Employee';
import './Employee.css'

const ListView = ({ items, isLoading }) => {
    return isLoading ?
        (
            <Spinner />
        ) : (
            <section className="employees">
                {items.map(item => (
                    <Employee key={item.id} item={item} />
                ))}
            </section>)
}

export default ListView

