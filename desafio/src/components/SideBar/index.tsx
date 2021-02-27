import React from 'react';

import assetClassIcon from '../../assets/asset_class_icon.svg';
import fgcCoverIcon from '../../assets/fgc_cover_icon.svg';
import myEarningsIcon from '../../assets/my_earnings_icon.svg';
import myProductsIcon from '../../assets/my_products_icon.svg';
import portfolioProjectionIcon from '../../assets/portfolio_projection_icon.svg';
import portfolioSummarIcon from '../../assets/portfolio_summary_icon.svg';
import realProfitabilityIcon from '../../assets/real_profitability_icon.svg';
import riskVsReturnIcon from '../../assets/risk_vs_return_icon.svg';
import { SideBarItem } from './SideBarItem';
import { Container } from './styles';

export const SideBar: React.FC = () => {
  return (
    <Container>
      <SideBarItem
        title="Resumo Da Carteira"
        icon={portfolioSummarIcon}
        subItems={[]}
      />

      <SideBarItem title="Meus Produtos" icon={myProductsIcon} subItems={[]} />

      <SideBarItem title="Meus Proventos" icon={myEarningsIcon} subItems={[]} />

      <SideBarItem
        title="Classe de Ativos"
        icon={assetClassIcon}
        subItems={[
          { title: 'Ação', path: '/' },
          { title: 'Fundo', path: '/' },
          { title: 'Fundo Imobiliário', path: '/' },
          { title: 'Fundo Renda Fixa', path: '/ativos/renda-fixa' }
        ]}
      />

      <SideBarItem
        title="Rentabilidade Real"
        icon={realProfitabilityIcon}
        subItems={[]}
      />

      <SideBarItem
        title="Projeção da Carteira"
        icon={portfolioProjectionIcon}
        subItems={[]}
      />

      <SideBarItem
        title="Risco x Retorno"
        icon={riskVsReturnIcon}
        subItems={[]}
      />

      <SideBarItem title="Cobertura do FGC" icon={fgcCoverIcon} subItems={[]} />
    </Container>
  );
};
