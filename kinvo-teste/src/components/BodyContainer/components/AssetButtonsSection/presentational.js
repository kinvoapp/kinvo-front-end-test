import React from 'react';

import { Container } from './styles';
import AssetClassButton from './components/AssetClassButton';

function AssetClassSetOfButtons() {
  return (
    <Container>
      <AssetClassButton className="Ações" getState />
      <AssetClassButton className="Nome da Classe" getState={false} />
      <AssetClassButton className="Nome da Classe" getState={false} />
      <AssetClassButton className="Nome da Classe" getState={false} />
    </Container>
  );
}

export default AssetClassSetOfButtons;
