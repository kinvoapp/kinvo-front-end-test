import React, { useState, useEffect } from 'react';

import { DailyEquityByPortfolio } from '../../@types/DailyEquityByPortfolio';
import { SnapshotByPortfolio } from '../../@types/SnapshotByPortfolio';
import { SnapshotByProduct } from '../../@types/SnapshotByProduct';
import { Indicator } from '../../components';
import { api } from '../../services';
import { Container, ContainerIndicators, Title } from './styles';

interface FixedIncomeFundState {
  snapshotByPortfolio: SnapshotByPortfolio;
  dailyEquityByPortfolioChartData: DailyEquityByPortfolio[];
  snapshotByProduct: SnapshotByProduct[];
}

export const FixedIncomeFund: React.FC = () => {
  const [
    fixedIncomeData,
    setFixedIncomeData
  ] = useState<FixedIncomeFundState>();

  useEffect(() => {
    async function loadFixedIncomeData() {
      try {
        const response = await api.get('getFixedIncomeClassData');

        const { data } = response.data;
        setFixedIncomeData(data);
      } catch (error) {
        if (error.response) {
          const { response } = error;

          switch (response.status) {
            case 404:
              // TODO add react-toastify
              // eslint-disable-next-line no-alert
              alert('Dados não encontrados');
              break;
            case 500:
            default:
              // TODO add react-toastify
              // eslint-disable-next-line no-alert
              alert('Ocorreu um erro no servidor');
          }
        }
      }
    }

    loadFixedIncomeData();
  }, []);

  return (
    <Container>
      <Title>Renda Fixa</Title>

      <p>{`Dados: ${!!fixedIncomeData}`}</p>
      {fixedIncomeData && (
        <ContainerIndicators>
          <Indicator
            title="Saldo Bruto"
            value={fixedIncomeData.snapshotByPortfolio.equity}
          />

          <Indicator
            title="Valor Aplicado"
            value={fixedIncomeData.snapshotByPortfolio.valueApplied}
          />

          <Indicator
            title="Resultado"
            value={fixedIncomeData.snapshotByPortfolio.equityProfit}
          />

          <Indicator
            title="Rentabilidade"
            value={fixedIncomeData.snapshotByPortfolio.percentageProfit}
            percentage
          />

          <Indicator
            title="CDI"
            value={fixedIncomeData.snapshotByPortfolio.indexerValue}
            percentage
          />

          <Indicator
            title="% Sobre CDI"
            value={fixedIncomeData.snapshotByPortfolio.percentageOverIndexer}
            percentage
          />
        </ContainerIndicators>
      )}
    </Container>
  );
};
