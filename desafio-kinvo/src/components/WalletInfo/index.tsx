import React, { useContext } from 'react';
import context from '../../contexts/context';

import selectionArrowImg from '../../assets/header/my-wallet.svg';

import Container from './styles';

function WalletInfo() {
  const { walletName } = useContext(context);
  return (
    <Container>
      <img src={selectionArrowImg} alt="Selecionar carteira" />
      <div>
        <h3>Carteira</h3>
        <p>{walletName}</p>
      </div>
    </Container>
  );
}

export default WalletInfo;
