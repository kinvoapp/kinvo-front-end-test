import React from 'react';

import AssetButtonsSection from './components/AssetButtonsSection';
import WalletContainer from './components/WalletContainer';

import { Container, BodyContainerLabel } from './styles';

function BodyContainer() {
  return (
    <Container>
      <BodyContainerLabel>Análise por Classe de Ativos</BodyContainerLabel>
      <AssetButtonsSection />
      <div>
        <WalletContainer />
      </div>
    </Container>
  );
}

export default BodyContainer;
