import React from 'react';
import { BiCoinStack, BiUpArrowAlt, BiLineChart } from 'react-icons/bi';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>kinvopremium</h1>
      <div className="snapshot-info-container">
        <div className="snapshot-info">
          <BiCoinStack />
          Saldo Bruto
        </div>
        <div className="snapshot-info">
          <BiUpArrowAlt />
          Valor Aplicado
        </div>
        <div className="snapshot-info">
          <BiLineChart />
          Rentabilidade
        </div>
      </div>
    </header>
  );
}

export default Header;
