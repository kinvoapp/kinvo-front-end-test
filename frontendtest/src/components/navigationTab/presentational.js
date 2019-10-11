import React from 'react';

import './styles.css';
import '../../styles.css';

import walletOverviewIcon from './images/walletOverviewIcon.svg';
import fgcCoveredIcon from './images/fgcCoveredIcon.svg';
import myProceedsIcon from './images/myProceedsIcon.svg';
import myProductsIcon from './images/myProductsIcon.svg';
import productClassAnalysisIcon from './images/productClassAnalysisIcon.svg';
import realProftabilityIcon from './images/realProftabilityIcon.svg';
import riskReturnIcon from './images/riskReturnIcon.svg';
import walletProjectionIcon from './images/walletProjectionIcon.svg';

import NavigationTabItems from './components/NavigationTabItems';
import { Container } from './styles';

function NavigationTab() {
  return (

    <Container>

      <NavigationTabItems
        iconSource={walletOverviewIcon}
        label="Resumo da Carteira"
      />

      <NavigationTabItems
        iconSource={myProductsIcon}
        label="Meus Produtos"
      />

      <NavigationTabItems
        iconSource={myProceedsIcon}
        label="Meus Proventos"
      />

      <NavigationTabItems
        isActive="true"
        iconSource={productClassAnalysisIcon}
        label="Análise por Classe de Produto"
      />

      <NavigationTabItems
        iconSource={realProftabilityIcon}
        label="Rentabilidade Real"
      />

      <NavigationTabItems
        iconSource={walletProjectionIcon}
        label="Projeção da Carteira"
      />

      <NavigationTabItems
        iconSource={riskReturnIcon}
        label="Risco x Retorno"
      />

      <NavigationTabItems
        iconSource={fgcCoveredIcon}
        label="Cobertura do FGC"
      />

    </Container>

  );
}

export default NavigationTab;
