import React from 'react';

import appliedValueIcon from '../../assets/applied_value_icon.svg';
import balanceIcon from '../../assets/balance_icon.svg';
import logoImg from '../../assets/logo.svg';
import menuIcon from '../../assets/menu_icon.svg';
import profitabilityIcon from '../../assets/profitability_icon.svg';
import walletIcon from '../../assets/wallet_arrow_icon.svg';
import { AppBarItem } from './AppBarItem';
import { Container, Content, Icon, Logo } from './styles';

export const AppBar: React.FC = () => {
  return (
    <Container>
      <Logo src={logoImg} alt="Kinvo" />

      <Content>
        <AppBarItem
          title="Saldo bruto"
          value="130.521.230,02"
          icon={balanceIcon}
        />

        <AppBarItem
          title="Valor aplicado"
          value="521.230,02"
          icon={appliedValueIcon}
        />

        <AppBarItem
          title="Rentabilidade"
          value="2,34%"
          icon={profitabilityIcon}
        />

        <AppBarItem title="Carteira" value="Minha Carteira" icon={walletIcon} />

        <Icon src={menuIcon} />
      </Content>
    </Container>
  );
};
