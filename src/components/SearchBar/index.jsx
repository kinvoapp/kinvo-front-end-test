import React from 'react';
import { SearchContainer } from './styles';
import lupa from '../../assets/lupa.png';

const SearchBar = ({ value, onchange }) => {
    return (
        <SearchContainer>
            <img src={lupa} />
            <input type="text" value={value} onChange={onchange} />
        </SearchContainer>
    );
}

export default SearchBar;
