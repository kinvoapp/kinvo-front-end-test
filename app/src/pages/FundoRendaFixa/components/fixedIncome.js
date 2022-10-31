import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../../services/axios';
import FixedIncomeWrapper from './fixedIncomeWrapper';

export default function FixedIncome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setData(res.data.data.snapshotByProduct);
        console.log(data);
      })
      .catch((e) => {
        return e;
      });
  });

  return (
    <>
      <SearchFor>
        <h3>Minhas Rendas Fixas</h3>
        <div>.</div>
      </SearchFor>
      <ul>
        {data.map((item) => {
          return (
            <Card item={item}>
              <FixedIncomeWrapper
                title={item.fixedIncome.name}
                class={item.fixedIncome.bondType}
                valorInves={item.position.valueApplied}
                saldoBruto={item.position.equity}
                rentabilidade={item.position.profitability}
                porcCart={item.position.portfolioPercentage}
                cdi={item.position.indexerValue}
                sobreCdi={item.position.percentageOverIndexer}
                dataVenc={item.due.date}
                dataAteVenc={item.due.daysUntilExpiration}
              />
            </Card>
          );
        })}
      </ul>
    </>
  );
}

const SearchFor = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 2px solid #eef2f4;

  h3 {
    color: #707b81;
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
