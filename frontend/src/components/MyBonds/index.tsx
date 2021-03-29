import React, { useState, useEffect } from 'react';

import BondsList from '../BondsList';
import {
  emptyProductsData,
  SnapshotByProduct
} from '../../interfaces/api.interface';

import { BondsContent } from './styles';

const MyBonds: React.FC<{ data: SnapshotByProduct[] }> = (props: {
  data: SnapshotByProduct[];
}) => {
  const [snapshotProductsData, setSnapshotProductsData] = useState<
    SnapshotByProduct[]
  >([emptyProductsData]);

  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = snapshotProductsData.filter(product => {
    return product.fixedIncome.name
      .toLowerCase()
      .includes(filterTerm.toLowerCase());
  });

  const { data } = props;

  useEffect(() => {
    setSnapshotProductsData(data);
  });

  return (
    <BondsContent>
      <header>
        <h3>Minhas Redas Fixas</h3>

        <form action="#">
          <div className="selectWrapper">
            <select name="select">
              <option>Ordenar por</option>
              <option>Ordem Alfabétca</option>
              <option>Valor Aplicado</option>
              <option>Rentabilidade</option>
              <option>Data de Vencimento</option>
            </select>
          </div>

          <div className="searchTerm">
            <input
              type="text"
              name="searchTerm"
              onChange={e => setFilterTerm(e.target.value)}
            />
          </div>
        </form>
      </header>

      <BondsList data={filteredProducts} />
    </BondsContent>
  );
};

export default MyBonds;
