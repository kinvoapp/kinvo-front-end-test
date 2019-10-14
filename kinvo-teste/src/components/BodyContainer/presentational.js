import React from 'react';

import AssetButtonsSection from './components/AssetButtonsSection';
import WalletContainer from './components/WalletContainer';

import { Container, BodyContainerLabel, PortfolioContainer } from './styles';

function BodyContainer() {
  return (
    <Container>
      <BodyContainerLabel>Análise por Classe de Ativos</BodyContainerLabel>
      <PortfolioContainer>
        <AssetButtonsSection />
        <WalletContainer />
      </PortfolioContainer>
    </Container>
  );
}

export default BodyContainer;
