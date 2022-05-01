import React, { useState, ReactNode } from 'react';
import context from './context';

type ProviderProps = {
  children: ReactNode;
};

function Provider(props: ProviderProps) {
  const { children } = props;
  const [grossBalance, setGrossBalance] = useState(0);
  const [amountApplied, setAmountApplied] = useState(0);
  const [profitRate, setProfitRate] = useState(0);
  const [walletName, setWalletName] = useState('Minha carteira');
  const value = {
    grossBalance,
    setGrossBalance,
    amountApplied,
    setAmountApplied,
    profitRate,
    setProfitRate,
    walletName,
    setWalletName,
  };
  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}

export default Provider;
