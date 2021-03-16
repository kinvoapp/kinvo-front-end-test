import { SearchContainer, SearchIcon, SearchInput } from './style';
import { useState } from 'react';

const SearchSrc = '/images/searchIcon.svg';

export default function Search(props: { onSearch: (text: string) => void, cancelSearch: () => void }) {
  const [search, setSearch] = useState('');
  return (
    <SearchContainer>
      <SearchIcon image={SearchSrc} onClick={() => props.onSearch(search)} />
      <SearchInput
        onChange={(event) => {setSearch(event.target.value), event.target.value === '' && props.cancelSearch()} }
        placeholder={'Pesquise pelo título da aplicação'}
        onKeyPress={(event) => {
          if(event.key === 'Enter'){
            props.onSearch(search)
          }
        }}
      />
    </SearchContainer>
  );
}
