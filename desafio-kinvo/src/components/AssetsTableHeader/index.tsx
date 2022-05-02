import React, { useContext } from 'react';
import fixedIncomeContext from '../../contexts/fixedIncome';

function AssetsTableHeader() {
  const { filterAssetsByName } = useContext(fixedIncomeContext);
  return (
    <div>
      <h2>Minhas Renda Fixas</h2>
      <select aria-label="search-field">
        <option value="sesx">Ordenar por</option>
      </select>
      <input type="text" onChange={({ target: { value } }) => filterAssetsByName(value)} />
    </div>
  );
}

export default AssetsTableHeader;
