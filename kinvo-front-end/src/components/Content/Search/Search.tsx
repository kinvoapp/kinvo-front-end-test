import React, { FormEvent, useState } from 'react'
import { Wrapper, DropdownButton, SearchInput } from './styles';
import dropdown from '../../../assets/svg/content/dropdown.svg';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../../store/modules/search/actions';

export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();
    
    dispatch(searchResult(search));
  }


  return (
    <Wrapper>
      <DropdownButton>
        Ordenar por
        <img src={dropdown} alt='dropdown'></img>
      </DropdownButton>
      <form onKeyUp={handleSubmit} onSubmit={handleSubmit}>
        <SearchInput value ={search} onChange={event => setSearch(event.target.value)}/>
      </form>    
    </Wrapper>
  )
}
  