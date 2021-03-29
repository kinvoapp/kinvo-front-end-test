import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import PortfolioSummaryIcon from '../../assets/portfolio_summary_icon.svg';
import MyProductsIcon from '../../assets/my_products_icon.svg';
import ProceedsIcon from '../../assets/proceeds_icon.svg';
import AssetClassIcon from '../../assets/asset_class_icon.svg';
import RealRentabilityIcon from '../../assets/real_rentability_icon.svg';
import PortfolioProjectionIcon from '../../assets/portfolio_projection_icon.svg';
import RiskReturnIcon from '../../assets/risk_return_icon.svg';
import FgvCoverageIcon from '../../assets/fgc_coverage_icon.svg';
import { Container, MenuItem, ItemIcon, Icon, ItemTitle, ItemPoint } from './styles';

function Sidebar() {
  return (
    <Container>
      <Item icon={PortfolioSummaryIcon} title="Resumo da Carteira" />
      <Item icon={MyProductsIcon} title="Meus Produtos" />
      <Item icon={ProceedsIcon} title="Meus Proventos" />
      <Item icon={AssetClassIcon} title="Classe de Ativos" active options={['Ação', 'Fundo', 'Fundo Imobiliário', 'Fundo Renda Fixa']} />
      <Item icon={RealRentabilityIcon} title="Rentabilidade Real" />
      <Item icon={PortfolioProjectionIcon} title="Projeção da Carteira" />
      <Item icon={RiskReturnIcon} title="Risco x Retorno" />
      <Item icon={FgvCoverageIcon} title="Cobertura do FGC" />
    </Container>
  )
}

function Item(props) {
  const { title, icon, active, options } = props;
  const [ open, setOpen ] = useState(active ? true : false);

  function handleClick() {
    if (options) setOpen(!open);
  }

  return (
    <>
      <MenuItem active={active} onClick={handleClick}>
        <ItemIcon active={active}>
          <Icon src={icon} />
        </ItemIcon>
        <ItemTitle>{title}</ItemTitle>
        { options && open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
      </MenuItem>
      
      { options ? (
        <Collapse in={open} timeout="auto" unmountOnExit style={{ minHeight: 'unset' }}>
          { options.map((option) => (
            <MenuItem>
              <ItemPoint />
              <ItemTitle>{option}</ItemTitle>
              <MdKeyboardArrowRight />
            </MenuItem>
          ))}
        </Collapse>
      ) : null }
    </>
  )
}

export default Sidebar;