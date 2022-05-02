import React from 'react';

function AssetsTableHeader() {
  return (
    <div>
      <h2>Minhas Renda Fixas</h2>
      <select aria-label="search-field">
        <option value="sesx">Ordenar por</option>
      </select>
      <input type="text" />
    </div>
  );
}

export default AssetsTableHeader;
