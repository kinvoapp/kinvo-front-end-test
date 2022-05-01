import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import context from '.';
import FetchIncomeData from '../../services/api';

function FixedIncomeProvider({ children }) {
  const [assets, setAssets] = useState([]);

  const fetchAssets = () => {
    setAssets(FetchIncomeData()
      .then((data) => data)
      .catch((error) => { throw new Error(error.message); }));
  };

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
