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

const navigationItems = [
  {
    iconSource: walletOverviewIcon,
    label: 'Resumo <br/> da Carteira',
  },
  {
    iconSource: myProductsIcon,
    label: 'Meus <br/> Produtos',
  },
  {
    iconSource: myProceedsIcon,
    label: 'Meus<br />Proventos',
  },
  {
    iconSource: productClassAnalysisIcon,
    isActive: true,
    label: 'Análise por <br/> Classe de Produto',
  },
  {
    iconSource: realProftabilityIcon,
    label: 'Rentabilidade <br/> Real',
  },
  {
    iconSource: walletProjectionIcon,
    label: 'Projeção <br/> da Carteira',
  },
  {
    iconSource: riskReturnIcon,
    label: 'Risco <br/> x Retorno',
  },
  {
    iconSource: fgcCoveredIcon,
    label: 'Cobertura <br/> do FGC',
  },
];

  return (

    <Container>

      {navigationItems.map(
        (itemInfo) => (
          <NavigationTabItems {...itemInfo} />
        ),
      )}

    </Container>

  );
}

export default NavigationTab;
