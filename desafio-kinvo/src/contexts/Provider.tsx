import React, { useState, ReactNode } from 'react';
import context from './context';

interface ProviderProps {
  children: ReactNode;
}

function contexts(children:ReactNode) {
  const { Provider } = context;
  const [grossBalance, setGrossBalance] = useState(0);
  const [amountApplied, setAmountApplied] = useState(0);
  const [profitRate, setProfitRate] = useState(0);
  const value = {
    grossBalance,
    setGrossBalance,
    amountApplied,
    setAmountApplied,
    profitRate,
    setProfitRate,
  };
  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}

export default contexts;
