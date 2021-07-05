import React, { useContext } from 'react';
import SnapshotCard from './SnapshotCard';
import AppContext from '../context/AppContext';
import './FixedIncomeSnapshot.css';

function FixedIncomeSnapshot() {
  const { snapshotByPortfolio, isFetching } = useContext(AppContext);

  const renderSnapshots = () => {
    const {
      equity,
      valueApplied,
      equityProfit,
      percentageProfit,
      indexerValue,
      percentageOverIndexer,
    } = snapshotByPortfolio;
    return (
      <div className="snapshot-container">
        <SnapshotCard
          label="SALDO BRUTO"
          symbol="currency"
          value={ equity.toLocaleString('pt-BR') }
        />
        <SnapshotCard
          label="VALOR APLICADO"
          symbol="currency"
          value={ valueApplied.toLocaleString('pt-BR') }
        />
        <SnapshotCard
          label="RESULTADO"
          symbol="currency"
          value={ equityProfit.toLocaleString('pt-BR') }
        />
        <SnapshotCard
          label="RENTABILIDADE"
          value={ percentageProfit }
        />
        <SnapshotCard
          label="CDI"
          value={ indexerValue }
        />
        <SnapshotCard
          label="% SOBRE CDI"
          value={ percentageOverIndexer }
        />
      </div>
    );
  };
  return (
    <section>
      { isFetching ? <span>Loading</span> : renderSnapshots()}
    </section>
  );
}

export default FixedIncomeSnapshot;
