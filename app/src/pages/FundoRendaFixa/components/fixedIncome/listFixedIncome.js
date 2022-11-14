/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import FixedIncomeCards from './FixedIncomeCards';

export default function ListFixedIncome({ data, searchText, searchSort }) {
  // realiza busca por texto
  const dataFiltered = searchText
    ? data.filter((item) => {
        return item.fixedIncome.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
      })
    : data;

  return (
    <ul>
      {searchSort && searchSort.target.value === 'rentabilidade'
        ? // ordena lista por rentabilidade
          dataFiltered
            .sort((a, b) => b.position.profitability - a.position.profitability)
            .map((item, i) => {
              return (
                <Card item={item} key={i}>
                  <FixedIncomeCards data={item} />
                </Card>
              );
            })
        : searchSort && searchSort.target.value === 'valorInves'
        ? // ordena lista por valor investido
          dataFiltered
            .sort((a, b) => b.position.valueApplied - a.position.valueApplied)
            .map((item, i) => {
              return (
                <Card item={item} key={i}>
                  <FixedIncomeCards data={item} />
                </Card>
              );
            })
        : dataFiltered.map((item, i) => {
            return (
              <Card item={item} key={i}>
                <FixedIncomeCards data={item} />
              </Card>
            );
          })}
    </ul>
  );
}

const Card = styled.li`
  width: 100%;
  display: flex;
  padding: 15px;
  border-bottom: 2px solid #eef2f4;
  font-size: 11px;
  font-weight: 600;
  color: #4e5b61;
`;
