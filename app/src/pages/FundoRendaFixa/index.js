import React from 'react';
import styled from 'styled-components';
import HeaderCards from './components/headerCards';
import ProfitabilityChart from './components/profitabilityChart';

export default function RendaFixa() {
  return (
    <Container>
      <h1>Renda Fixa</h1>
      <Header>
        <HeaderCards />
      </Header>
      <Charts>
        <h1>Rentabilidade dos titulos</h1>
        <ProfitabilityChart />
      </Charts>
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

const Header = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Charts = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;

  h1 {
    color: #707b81;
    margin-bottom: 15px;
  }
`;
