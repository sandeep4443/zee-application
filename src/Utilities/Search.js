import React from 'react'

const Search = () => {
    return (
        <section className='search' style={{ marginTop: 30 + 'px' }}>
            <form>
                <input
                    type='text'
                    className='br-input'
                    placeholder='Search Employees'
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
