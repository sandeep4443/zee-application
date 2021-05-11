import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import Characters from './Characters/CharacterGrid';

const BreakingBadPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const results = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
            setItems(results.data);
            setLoading(false);
        }
        fetchItems();
    }, [query])
    return (
        <div className="breaking">
            <Header />
            <Search getQuery={q => setQuery(q)} />
            <Characters items={items} isLoading={isLoading} />
        </div>
    )
}

export default BreakingBadPage
