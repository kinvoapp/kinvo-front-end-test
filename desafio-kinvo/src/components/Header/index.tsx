import React from 'react';
import WalletValues from '../WalletValues';
import WalletInfo from '../WalletInfo';
import BurguerMenu from '../BurguerMenu';

import logo from '../../assets/header/logo.svg';

import Container from './styles';

function Header() {
  return (
    <Container>
      <img className="logo" src={logo} alt="" />
      <WalletValues />
      <div>
        <div className="Wallet">
          <WalletInfo />
        </div>
        <BurguerMenu />
      </div>
    </Container>
  );
}

export default Header;
