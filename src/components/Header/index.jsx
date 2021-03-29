import React from 'react';
import LogoPremium from '../../assets/logo_premium.png';
import EquityIcon from '../../assets/equity_icon.svg';
import DropdownIcon from '../../assets/dropdown_icon.svg';
import AppliedValueIcon from '../../assets/applied_value_icon.svg';
import MenuIcon from '../../assets/menu_icon.svg';
import ProfitabilityIcon from '../../assets/profitability_icon.svg';
import { Container, Logo, Icon, InfoList, Info, InfoText, Title, Subtitle } from './styles';

function Header() {
  return (
    <Container>
      <Logo src={LogoPremium} />

      <InfoList>
        <Info>
          <Icon src={EquityIcon} />
          <InfoText>
            <Title>Saldo Bruto</Title>
            <Subtitle>130.521.230,02</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <Icon src={AppliedValueIcon} />
          <InfoText>
            <Title>Valor Aplicado</Title>
            <Subtitle>521.230,02</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <Icon src={ProfitabilityIcon} />
          <InfoText>
            <Title>Rentabilidade</Title>
            <Subtitle>2,34%</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <Icon clickable src={DropdownIcon} />
          <InfoText>
            <Title>Carteira</Title>
            <Subtitle>Minha Carteira</Subtitle>
          </InfoText>
        </Info>

        <Info>
          <Icon clickable src={MenuIcon} />
        </Info>
      </InfoList>
    </Container>
  )
}

export default Header;