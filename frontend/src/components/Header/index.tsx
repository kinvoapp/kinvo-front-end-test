import React from 'react';
import { Link } from 'react-router-dom';

// Components
import WalletStatusItem from '../WalletStatusItem';

// Styles
import { HeaderBar, HeaderStatus, NavItem, WalletSelect } from './styles';

// Images
import appliedValueIcon from '../../assets/icons/applied-value-icon.svg';
import balanceIcon from '../../assets/icons/balance-icon.svg';
import profitIcon from '../../assets/icons/profit-icon.svg';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <HeaderBar>
    <h1>
      <Link to="/">
        <img src={logo} width="190" alt="Kinvo Premium" />
      </Link>
    </h1>

    <div className="rightHeaderItems">
      <HeaderStatus>
        <WalletStatusItem
          img={balanceIcon}
          title="Saldo Bruto"
          info="130.521.230,02"
        />
        <WalletStatusItem
          img={appliedValueIcon}
          title="Valor Aplicado"
          info="521.230,02"
        />
        <WalletStatusItem img={profitIcon} title="Rentabilidade" info="2,34%" />
      </HeaderStatus>

      <WalletSelect>
        <div className="selectWallet">&nbsp;</div>
        <div>
          <h2>Carteira</h2>
          <p>Minha Carteira</p>
        </div>
      </WalletSelect>

      <NavItem />
    </div>
  </HeaderBar>
);

export default Header;
