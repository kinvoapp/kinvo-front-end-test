import React, { useContext } from 'react';
import HeaderBullet from '../HeaderBullet';
import WalletInfo from '../WalletInfo';
import BurguerMenu from '../BurguerMenu';
import context from '../../contexts/context';

import groosBalanceTmb from '../../assets/header/gross-balance.svg';
import amountAppliedTmb from '../../assets/header/value-aplication.svg';
import profitRateTmb from '../../assets/header/profitability.svg';
import logo from '../../assets/header/logo.svg';

function Header() {
  const {
    grossBalance,
    amountApplied,
    profitRate,
  } = useContext(context);

  const bullets = [
    {
      thumbnail: groosBalanceTmb,
      title: 'Saldo Bruto',
      value: grossBalance,
    },
    {
      thumbnail: amountAppliedTmb,
      title: 'Valor Aplicado',
      value: amountApplied,
    },
    {
      thumbnail: profitRateTmb,
      title: 'Rentabilidade',
      value: profitRate,
    },
  ];

  return (
    <header>
      <img src={logo} alt="" />
      {bullets.map(({ thumbnail, title, value }) => (
        <HeaderBullet {...{ thumbnail, title, value }} />
      ))}
      <WalletInfo />
      <BurguerMenu />
    </header>
  );
}

export default Header;
