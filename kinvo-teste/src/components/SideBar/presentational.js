import React from 'react';

import SidebarButton from './components/SidebarButton';

import portfolioOverview from './images/resumo-da-carteira.svg';
import myProducts from './images/meus-produtos.svg';
import myProceeds from './images/meus-proventos.svg';
import productAnalysis from './images/analise-produto.svg';
import realProfitability from './images/rentabilidade-real.svg';
import portfolioProjection from './images/projecao-carteira.svg';
import returnRisk from './images/risco-retorno.svg';
import fgcSecurity from './images/cobertura-fgc.svg';
import { Container } from './styles';

function SidebarSetOfButtons() {
  const sidebarContent = [
    {
      imageSource: portfolioOverview,
      name: 'Resumo <br /> Da Carteira',
      active: false,
    },
    {
      imageSource: myProducts,
      name: 'Meus <br/> Produtos',
      active: false,
    },
    {
      imageSource: myProceeds,
      name: 'Meus <br/> Proventos',
      active: false,
    },
    {
      imageSource: productAnalysis,
      name: 'Análise por <br/> Classe de Produto',
      active: true,
    },
    {
      imageSource: realProfitability,
      name: 'Rentabilidade <br/> Real',
      active: false,
    },
    {
      imageSource: portfolioProjection,
      name: 'Projeção <br/> da Carteira',
      active: false,
    },
    {
      imageSource: returnRisk,
      name: 'Risco <br/> x Retorno',
      active: false,
    },
    {
      imageSource: fgcSecurity,
      name: 'Cobertura <br/> do FGC',
      active: false,
    },
  ];

  return (
    <Container>
      {sidebarContent.map((conteudo) => {
        const { imageSource, name, active } = conteudo;
        return (
          <SidebarButton
            imgSrc={imageSource}
            name={name}
            active={active}
          />
        );
      })}
    </Container>
  );
}

export default SidebarSetOfButtons;
