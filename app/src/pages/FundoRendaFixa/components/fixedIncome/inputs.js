/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function Inputs({ searchText, setSearchText, setSearchSort }) {
  return (
    <SearchFor>
      <select onChange={setSearchSort}>
        <option defaultValue>Ordenar por</option>
        <option value="rentabilidade">Rentabilidade</option>
        <option value="valorInves">Valor inves.</option>
      </select>

      <input
        type="search"
        value={searchText}
        onChange={(ev) => setSearchText(ev.target.value)}
      />
    </SearchFor>
  );
}

const SearchFor = styled.div`
  display: flex;
  align-items: center;

  input,
  select {
    height: 30px;
    color: #707b81;
    margin-left: 15px;
    border: 1px solid #d6d9dd;
    border-radius: 10px;
    padding: 4px;
  }
`;
