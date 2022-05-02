import React from 'react';

type PositionProps = { position :{
  equity:number;
  valueApplied: number;
  profitability: number;
  portfolioPercentage: number;
  indexerValue: number;
  percentageOverIndexer: number;
}
};

function AssetsPosition(props:PositionProps) {
  const {
    position: {
      equity,
      valueApplied,
      profitability,
      portfolioPercentage,
      indexerValue,
      percentageOverIndexer,
    },
  } = props;
  return (
    <div>
      <h3>Resultado</h3>
      <h4>Valor Inves.</h4>
      <p>{equity}</p>
      <h4>Saldo Bruto</h4>
      <p>{valueApplied}</p>
      <h4>Rent.</h4>
      <p>{profitability}</p>
      <h4>% da Cart.</h4>
      <p>{portfolioPercentage}</p>
      <h4>CDI</h4>
      <p>{indexerValue}</p>
      <h4>Sobre CDI</h4>
      <p>{percentageOverIndexer}</p>
    </div>
  );
}
export default AssetsPosition;
