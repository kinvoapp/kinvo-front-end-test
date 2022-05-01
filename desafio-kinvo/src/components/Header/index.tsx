import React from 'react';
import WalletValues from '../WalletValues';
import WalletInfo from '../WalletInfo';
import BurguerMenu from '../BurguerMenu';

import logo from '../../assets/header/logo.svg';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="" />
      <WalletValues />
      <div>
        <div className="Wallet">
          <WalletInfo />
        </div>
        <BurguerMenu />
      </div>
    </header>
  );
}

export default Header;
