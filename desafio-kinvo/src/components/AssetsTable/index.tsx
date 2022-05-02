import React, { useContext } from 'react';
import fixedIncomeContext from '../../contexts/fixedIncome';
import AssetsTableHeader from '../AssetsTableHeader';
import AssetsTableData from '../AssetsTableData';

function AssetsTable() {
  const { assets } = useContext(fixedIncomeContext);

  return (
    <section>
      <AssetsTableHeader />
      {assets.length ? <AssetsTableData /> : 'loading'}
    </section>
  );
}

export default AssetsTable;
