import React from 'react';

import { Container } from './styles';
import InfoButton from './components/InfoButton';
import { styleMoney } from '../../../../../../shared/FunctionsLibrary';

function InfoSetOfButtonsPresentational(props) {
  const {
    apiData: {
      summary:
      {
        grossBalance,
        appliedValue,
        capitalGains,
        earnings,
        yield: yieldOnCost,
      },
    },
  } = props;

  const parsedInfoItems = [
    {
      name: 'SALDO BRUTO',
      value: `R$ ${styleMoney(grossBalance)}`,
    },
    {
      name: 'VALOR APLICADO',
      value: `R$ ${styleMoney(appliedValue)}`,
    },
    {
      name: 'GANHO DE CAPITAL',
      value: `R$ ${styleMoney(capitalGains)}`,
    },
    {
      name: 'TOTAL DISTRIBUÍDOS',
      value: `R$ ${styleMoney(earnings)}`,
    },
    {
      name: 'YIELD',
      value: `${yieldOnCost}%`,
    },
  ];

  return (
    <Container>
      {
        parsedInfoItems.map((data) => {
          const { name, value } = data;
          return (
            <InfoButton
              key={name}
              buttonName={name}
              value={value}
            />
          );
        })
      }
    </Container>
  );
}

export default InfoSetOfButtonsPresentational;
