import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// Components
import EquityCard from '../../components/EquityCard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MyBonds from '../../components/MyBonds';

// Interfaces
import {
  emptyPortfolio,
  // emptyChartData,
  emptyProductsData,
  SnapshotByPortfolio,
  // DailyEquityByPortfolioChartData,
  SnapshotByProduct
} from '../../interfaces/api.interface';

// Styles
import { EquitiesList, PageTitle } from './styles';

const Bonds: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<SnapshotByPortfolio>({
    ...emptyPortfolio
  });

  const [productsData, setProductsData] = useState<SnapshotByProduct[]>([
    { ...emptyProductsData }
  ]);

  useEffect(() => {
    api.then(response => {
      const portfolioSnapshot = response.data.data.snapshotByPortfolio;
      setPortfolioData(portfolioSnapshot);

      const productsSnapshot = response.data.data.snapshotByProduct;
      setProductsData(productsSnapshot);
    });
  });

  const {
    equity,
    valueApplied,
    equityProfit,
    percentageProfit,
    indexerValue,
    percentageOverIndexer
  } = portfolioData;

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="mainContent">
          <PageTitle>Renda Fixa</PageTitle>
          <EquitiesList>
            <EquityCard title="Saldo Bruto" value={equity} prefix />
            <EquityCard title="Valor Aplicado" value={valueApplied} prefix />
            <EquityCard title="Resultado" value={equityProfit} prefix />
            <EquityCard title="Rentabilidade" value={percentageProfit} suffix />
            <EquityCard title="CDI" value={indexerValue} suffix />
            <EquityCard
              title="% Sobre CDI"
              value={percentageOverIndexer}
              suffix
            />
          </EquitiesList>

          <MyBonds data={productsData} />
        </div>
      </div>
    </>
  );
};

export default Bonds;
