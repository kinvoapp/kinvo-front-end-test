import React from 'react';

import SidebarButton from './components/SidebarButton';

import purpleButton from './images/button-4-1.png';
import emptyButton from './images/empty-button-1.png';
import { Container } from './styles';

function SidebarSetOfButtons() {
  return (
    <Container>
      <SidebarButton
        imgSrc={emptyButton}
        name="Resumo da Carteira"
        active={false}
      />
      <SidebarButton
        imgSrc={emptyButton}
        name="Meus Produtos"
        active={false}
      />
      <SidebarButton
        imgSrc={emptyButton}
        name="Meus Proventos"
        active={false}
      />
      <SidebarButton
        imgSrc={purpleButton}
        name="Análise por Classe de Produto"
        active
      />
      <SidebarButton
        imgSrc={emptyButton}
        name="Rentabilidade Real"
        active={false}
      />
      <SidebarButton
        imgSrc={emptyButton}
        name="Projeção da Carteira"
        active={false}
      />
      <SidebarButton
        imgSrc={emptyButton}
        name="Cobertura do FGC"
        active={false}
      />
    </Container>
  );
}

export default SidebarSetOfButtons;
