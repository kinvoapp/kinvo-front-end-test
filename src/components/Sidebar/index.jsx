import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import PortfolioSummaryIcon from '../../assets/portfolio_summary_icon.svg';
import MyProductsIcon from '../../assets/my_products_icon.svg';
import ProceedsIcon from '../../assets/proceeds_icon.svg';
import AssetClassIcon from '../../assets/asset_class_icon.svg';
import RealRentabilityIcon from '../../assets/real_rentability_icon.svg';
import PortfolioProjectionIcon from '../../assets/portfolio_projection_icon.svg';
import RiskReturnIcon from '../../assets/risk_return_icon.svg';
import FgvCoverageIcon from '../../assets/fgc_coverage_icon.svg';
import { Container, MenuItem, ItemIcon, Icon, ItemTitle } from './styles';

function Sidebar() {
  return (
    <Container>
      <Item icon={PortfolioSummaryIcon} title="Resumo da Carteira" />
      <Item icon={MyProductsIcon} title="Meus Produtos" />
      <Item icon={ProceedsIcon} title="Meus Proventos" />
      <Item icon={AssetClassIcon} title="Classe de Ativos" />
      <Item icon={RealRentabilityIcon} title="Rentabilidade Real" />
      <Item icon={PortfolioProjectionIcon} title="Projeção da Carteira" />
      <Item icon={RiskReturnIcon} title="Risco x Retorno" />
      <Item icon={FgvCoverageIcon} title="Cobertura do FGC" />
    </Container>
  )
}

function Item(props) {
  const { title, icon } = props;
  return (
    <MenuItem>
      <ItemIcon>
        <Icon src={icon} />
      </ItemIcon>
      <ItemTitle>{title}</ItemTitle>
      <MdKeyboardArrowRight />
    </MenuItem>
  )
}

export default Sidebar;