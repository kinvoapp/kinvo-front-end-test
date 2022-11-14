import React from 'react';
import styled from 'styled-components';
import HeaderCards from './components/headerCards/headerCards';
import ProfitabilityChart from './components/charts/profitabilityChart';
import FixedIncome from './components/fixedIncome/fixedIncome';

export default function RendaFixa() {
  return (
    <Container>
      <h1>Renda Fixa</h1>
      <Header>
        <HeaderCards />
      </Header>
      <Charts>
        <h3>Rentabilidade dos Titulos</h3>
        <ProfitabilityChart />
      </Charts>
      <MyFixedIncome>
        <FixedIncome />
      </MyFixedIncome>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  padding: 20px 15px;

  h1 {
    color: #4c309b;
  }
`;

const Header = styled.section`
  display: flex;
  margin: 20px 0;
`;

const Charts = styled.section`
  background: #fff;
  padding: 15px;
  border-radius: 10px;

  h3 {
    color: #707b81;
    margin-bottom: 15px;
  }
`;

const MyFixedIncome = styled.section`
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
`;
