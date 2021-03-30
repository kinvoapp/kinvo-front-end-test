import React from 'react';

// Components
import NavItem from '../NavItem';

// Styles
import { SidebarComponent } from './styles';

// Assets
import portfolioIcon from '../../assets/icons/portfolio-icon.svg';
import productsIcon from '../../assets/icons/products-icon.svg';
import earningsIcon from '../../assets/icons/earnings-icon.svg';
import equitiesClassIcon from '../../assets/icons/equities-class-icon.svg';
import realProfitIcon from '../../assets/icons/real-profit-icon.svg';
import projectionIcon from '../../assets/icons/projection-icon.svg';
import riskReturnIcon from '../../assets/icons/risk-return-icon.svg';
import fgcIcon from '../../assets/icons/fgc-icon.svg';

const Sidebar: React.FC = () => (
  <SidebarComponent>
    <nav>
      <ul>
        <NavItem icon={portfolioIcon} title={`Resumo \n da Carteira`} />
        <NavItem icon={productsIcon} title={`Meus \n Produtos`} />
        <NavItem icon={earningsIcon} title={`Meus \n Poventos`} />
        <NavItem
          icon={equitiesClassIcon}
          title={`Classe \n de Ativos`}
          active
          subMenu={['Ação', 'Fundo', 'Fundo Imobiliário', 'Fundo Renda Fixa']}
        />
        <NavItem icon={realProfitIcon} title={`Rentabilidade \n Real`} />
        <NavItem icon={projectionIcon} title={`Projeção \n da Carteira`} />
        <NavItem icon={riskReturnIcon} title={`Risco x \n Retorno`} />
        <NavItem icon={fgcIcon} title={`Cobertura \n do FGC`} />
      </ul>
    </nav>
  </SidebarComponent>
);

export default Sidebar;
