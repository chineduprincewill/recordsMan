import React, { useState } from 'react'

const Search = ({ onSearch }) => {

    const [search, setSearch] = useState('');

    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
    }

    return (
        <div className='p-2'>
            <input 
                type="text" 
                className='bg-transparent w-full text-white border-b border-gray-500 p-1'
                placeholder='search'
                value={search}
                onChange={(e) => onInputChange( e.target.value )}
            />
        </div>
    )
}

export default Search