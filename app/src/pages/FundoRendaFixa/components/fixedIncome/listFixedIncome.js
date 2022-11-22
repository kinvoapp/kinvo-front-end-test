/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import FixedIncomeCards from './FixedIncomeCards';
import Pagination from './pagination';

export default function ListFixedIncome({ data, searchText, searchSort }) {
  // realiza busca por texto
  const dataFiltered = searchText
    ? data.filter((item) => {
        return item.fixedIncome.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
      })
    : data;

  // variaveis de páginação
  const [currentPage, setCurrentPage] = useState(0);
  const dataPerPage = 5;
  const pages = Math.ceil(dataFiltered.length / dataPerPage);
  const startIndex = currentPage * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = dataFiltered.slice(startIndex, endIndex);

  return (
    <>
      <List>
        {searchSort && searchSort.target.value === 'rentabilidade'
          ? // ordena lista por rentabilidade
            currentData
              .sort(
                (a, b) => b.position.profitability - a.position.profitability
              )
              .map((item, i) => {
                return (
                  <Card item={item} key={i}>
                    <FixedIncomeCards data={item} />
                  </Card>
                );
              })
          : searchSort && searchSort.target.value === 'valorInves'
          ? // ordena lista por valor investido
            currentData
              .sort((a, b) => b.position.valueApplied - a.position.valueApplied)
              .map((item, i) => {
                return (
                  <Card item={item} key={i}>
                    <FixedIncomeCards data={item} />
                  </Card>
                );
              })
          : currentData.map((item, i) => {
              return (
                <Card item={item} key={i}>
                  <FixedIncomeCards data={item} />
                </Card>
              );
            })}
      </List>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

const List = styled.ul`
  li:nth-child(odd) {
    background-color: #ffffff;
  }
  li:nth-child(even) {
    background-color: #f8fafb;
  }
`;

const Card = styled.li`
  width: 100%;
  display: flex;
  padding: 15px;
  border-bottom: 2px solid #eef2f4;
  font-size: 11px;
  font-weight: 600;
  color: #4e5b61;
`;
