import React from 'react';

import { Container } from './styles';
import InfoButton from './components/InfoButton';

function InfoSetOfButtonsPresentational(props) {
  const {
    infoItems:
    {
      grossBalance,
      appliedValue,
      capitalGains,
      earnings,
      yield: yieldOnCost,
    },
  } = props;

  const parsedInfoItems = [
    {
      name: 'SALDO BRUTO',
      value: { grossBalance },
    },
    {
      name: 'VALOR APLICADO',
      value: { appliedValue },
    },
    {
      name: 'GANHO DE CAPITAL',
      value: { capitalGains },
    },
    {
      name: 'TOTAL DISTRIBUÍDOS',
      value: { earnings },
    },
    {
      name: 'YIELD',
      value: { yieldOnCost },
    },
  ];

  return (
    <Container>
      {parsedInfoItems.map((data) => {
        const { name, value } = data;
        return (
          <InfoButton
            key={name}
            buttonName={name}
            value={value}
          />
        );
      })}
    </Container>
  );
}

export default InfoSetOfButtonsPresentational;
