import React from 'react';

import BondsList from '../BondsList';

import { BondsContent } from './styles';

const MyBonds: React.FC = () => (
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
          <input type="text" name="searchTerm" />
        </div>
      </form>
    </header>

    <BondsList />
  </BondsContent>
);

export default MyBonds;
