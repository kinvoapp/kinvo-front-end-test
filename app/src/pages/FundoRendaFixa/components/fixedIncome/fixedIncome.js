import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../../../services/axios';
import Inputs from './inputs';
import ListFixedIncome from './listFixedIncome';

export default function FixedIncome() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchSort, setSearchSort] = useState('');

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setData(res.data.data.snapshotByProduct);
      })
      .catch(() => {
        return null;
      });
  }, [data]);

  return (
    <>
      <Header>
        <h3>Minhas Rendas Fixas</h3>
        <Inputs
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchSort={setSearchSort}
        />
      </Header>
      <ListFixedIncome
        data={data}
        searchText={searchText}
        searchSort={searchSort}
      />
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 2px solid #eef2f4;

  h3 {
    color: #707b81;
  }
`;
