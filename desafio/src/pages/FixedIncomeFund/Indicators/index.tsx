import React from 'react';

import { SnapshotByPortfolio } from '../../../@types/SnapshotByPortfolio';
import { Indicator } from '../../../components';
import { Container } from './styles';

interface IndicatorsProps {
  snapshotByPortfolio: SnapshotByPortfolio;
}

export const Indicators: React.FC<IndicatorsProps> = ({
  snapshotByPortfolio
}) => {
  return (
    <Container>
      <Indicator title="Saldo Bruto" value={snapshotByPortfolio.equity} />

      <Indicator
        title="Valor Aplicado"
        value={snapshotByPortfolio.valueApplied}
      />

      <Indicator title="Resultado" value={snapshotByPortfolio.equityProfit} />

      <Indicator
        title="Rentabilidade"
        value={snapshotByPortfolio.percentageProfit}
        percentage
      />

      <Indicator
        title="CDI"
        value={snapshotByPortfolio.indexerValue}
        percentage
      />

      <Indicator
        title="% Sobre CDI"
        value={snapshotByPortfolio.percentageOverIndexer}
        percentage
      />
    </Container>
  );
};
