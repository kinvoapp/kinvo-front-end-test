import React, { useContext } from 'react';
import context from '../../contexts/context';
import HeaderBullet from '../HeaderBullet';

import Container from './styles';

import groosBalanceTmb from '../../assets/header/gross-balance.svg';
import amountAppliedTmb from '../../assets/header/value-aplication.svg';
import profitRateTmb from '../../assets/header/profitability.svg';

function WalletValues() {
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
    <Container>
      <div>
        {bullets.map(({ thumbnail, title, value }) => (
          <HeaderBullet key={title} {...{ thumbnail, title, value }} />
        ))}
      </div>
    </Container>
  );
}

export default WalletValues;
