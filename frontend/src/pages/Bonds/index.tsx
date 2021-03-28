import React from 'react';

import EquityCard from '../../components/EquityCard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { EquitiesList, PageTitle } from './styles';

const Bonds: React.FC = () => (
  <>
    <Header />

    <div className="content">
      <Sidebar />

      <div className="mainContent">
        <PageTitle>Renda Fixa</PageTitle>

        <EquitiesList>
          <EquityCard title="Saldo Bruto" value={207653.1} prefix />
          <EquityCard title="Valor Aplicado" value={170025.64} prefix />
          <EquityCard title="Resultado" value={37638.46} prefix />
          <EquityCard title="Rentabilidade" value={25.08} suffix />
          <EquityCard title="CDI" value={23.68} suffix />
          <EquityCard title="% Sobre CDI" value={321} suffix />
        </EquitiesList>
      </div>
    </div>
  </>
);

export default Bonds;
