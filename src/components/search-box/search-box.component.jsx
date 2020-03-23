import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange})  => (

    <input 

        className='search'
        input='seacrh'
        placeholder={placeholder}
        onChange={handleChange}

    />    


);  