import React, { useMemo, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import context from '.';
import fetchIncomeData from '../../services/api';

function FixedIncomeProvider({ children }) {
  const [assets, setAssets] = useState([]);

  const fetchAssets = async () => {
    fetchIncomeData()
      .then(({ data: { snapshotByProduct } }) => (
        setAssets((state) => [...state, ...snapshotByProduct])))
      .catch((error) => { throw new Error(error.message); });
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const value = useMemo(() => ({
    assets,
    setAssets,
    fetchAssets,
  }), [
    assets,
    setAssets,
    fetchAssets,
  ]);

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}

FixedIncomeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default FixedIncomeProvider;
