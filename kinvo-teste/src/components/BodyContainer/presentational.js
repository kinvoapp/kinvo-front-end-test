import React from 'react';

import AssetButtonsSection from './components/AssetButtonsSection';
import WalletContainer from './components/WalletContainer';

import { Container, BodyContainerLabel, PortfolioContainer } from './styles';

function BodyContainerPresentational(props) {
  const { apiData } = props;

  return (
    <Container>
      <BodyContainerLabel>Análise por Classe de Ativos</BodyContainerLabel>
      <PortfolioContainer>
        <AssetButtonsSection />
        <WalletContainer apiData={apiData} />
      </PortfolioContainer>
    </Container>
  );
}

export default BodyContainerPresentational;
