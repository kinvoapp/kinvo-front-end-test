import React, { useContext } from 'react';
import context from '../../contexts/context';

import selectionArrowImg from '../../assets/header/my-wallet.svg';

function WalletInfo() {
  const { walletName } = useContext(context);
  return (
    <div>
      <img src={selectionArrowImg} alt="Selecionar carteira" />
      <h3>Carteira</h3>
      <p>{walletName}</p>
    </div>
  );
}

export default WalletInfo;
