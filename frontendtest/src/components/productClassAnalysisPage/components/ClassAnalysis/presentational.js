import React from 'react';
import SummaryCard from './components/SummaryCard';
import { Container } from './styles';

function ClassAnalysis() {
  return (
    <Container>

      <SummaryCard
        summaryTitle="SALDO BRUTO"
        summaryValue="R$ 12.709,14"
      />

      <SummaryCard
        summaryTitle="VALOR APLICADO"
        summaryValue="R$ 10.023,12"
      />

      <SummaryCard
        summaryTitle="GANHO DE CAPITAL"
        summaryValue="R$ 2.686,01"
      />

      <SummaryCard
        summaryTitle="TOTAL DISTRIBUIDOS"
        summaryValue="R$ 800,0"
      />

      <SummaryCard
        summaryTitle="YIELD"
        summaryValue="15%"
      />

    </Container>
  );
}

export default ClassAnalysis;
