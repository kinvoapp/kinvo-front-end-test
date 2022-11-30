import React from 'react';
import styled from 'styled-components';
import HeaderCards from './components/headerCards/headerCards';
import ProfitabilityChart from './components/charts/profitabilityChart';
import FixedIncome from './components/fixedIncome/fixedIncome';
import PortfolioBreakdownByType from './components/charts/portfolioBreakdownByType';
import PortfolioBreakdownByTytle from './components/charts/portfolioBreakdownByTytle';

export default function RendaFixa() {
  return (
    <Container>
      <h1>Renda Fixa</h1>
      <Header>
        <HeaderCards />
      </Header>
      <ProfitabilityCharts>
        <h3>Rentabilidade dos Titulos</h3>
        <ProfitabilityChart />
      </ProfitabilityCharts>
      <MyFixedIncome>
        <FixedIncome />
      </MyFixedIncome>
      <DoughnutCharts>
        <div>
          <h3>Divisão de Carteira Por Tipo</h3>
          <PortfolioBreakdownByType />
        </div>
        <div>
          <h3>Divisão de Carteira Por Título</h3>
          <PortfolioBreakdownByTytle />
        </div>
      </DoughnutCharts>
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

const ProfitabilityCharts = styled.section`
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

const DoughnutCharts = styled.section`
  display: flex;
  justify-content: space-between;

  h3 {
    color: #707b81;
    padding: 15px;
    border-bottom: 2px solid #eef2f4;
  }

  div {
    width: 49.4%;
    background: #fff;
    border-radius: 10px;
  }
`;
