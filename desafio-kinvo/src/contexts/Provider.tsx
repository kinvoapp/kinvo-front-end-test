import React, { useState, useMemo, ReactNode } from 'react';
import context from './context';

type ProviderProps = {
  children: ReactNode;
};

function Provider(props: ProviderProps) {
  const { children } = props;
  const [grossBalance, setGrossBalance] = useState('130.521.230,02');
  const [amountApplied, setAmountApplied] = useState('521.230,02');
  const [profitRate, setProfitRate] = useState('2,34');
  const [walletName, setWalletName] = useState('Minha carteira');
  const value = useMemo(() => ({
    grossBalance,
    setGrossBalance,
    amountApplied,
    setAmountApplied,
    profitRate,
    setProfitRate,
    walletName,
    setWalletName,
  }), [
    grossBalance,
    setGrossBalance,
    amountApplied,
    setAmountApplied,
    profitRate,
    setProfitRate,
    walletName,
    setWalletName,
  ]);
  // source: https://stackoverflow.com/questions/71233273/the-object-passed-as-the-value-prop-to-the-context-provider-changes-every-render
  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}

export default Provider;
