import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Utilities/Header';
import Search from '../Utilities/Search';
import ListView from './ListView';

const MainPage = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const results = await axios.get(`http://dummy.restapiexample.com/api/v1/employees`);
            const data = results.data.data;
            setItems(data);
            setLoading(false);
        }
        fetchItems();
    }, [setItems])
    console.log("items are", items);
    return (
        <div style={{ backgroundColor: 'lightblue' }} className="breaking">
            <Header />
            <Search />
            <ListView items={items} isLoading={isLoading} />
        </div>
    )
}

export default MainPage
