import * as S from 'components/styled/lib';
import { ReactComponent as SearchSvg } from 'assets/images/search.svg';
import { useCallback, useState } from 'react';

function getFilteredRows(rows, searchTerm) {
  if (searchTerm.length <= 0) return rows;

  const isolatedTerms = searchTerm.toLowerCase().split(' ');

  return rows.filter((row) => {
    let filtered = false;
    isolatedTerms.every((term) => {
      if (term.length <= 0) return false;

      filtered =
        row.fixedIncome.bondType.toLowerCase().includes(term) ||
        row.fixedIncome.name.toLowerCase().includes(term);

      return !filtered;
    });
    return filtered;
  });
}

function debounce(callback, wait) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), wait);
  };
}

const FixedIncomeTableSearchBar = ({ rows, setFilteredRows }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
      debounce(setFilteredRows, 300)(getFilteredRows(rows, e.target.value));
    },
    [rows, setFilteredRows],
  );

  return (
    <S.SearchBarWrapper>
      <S.SearchBar value={inputValue} onChange={handleChange} />
      <SearchSvg />
    </S.SearchBarWrapper>
  );
};

export default FixedIncomeTableSearchBar;
