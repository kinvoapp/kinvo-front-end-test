import React from 'react';

type DueProps = {
  due:{
    date: string;
    daysUntilExpiration: number;
  }
};

function AssetsDueDate(props: DueProps) {
  const { due: { date, daysUntilExpiration } } = props;
  return (
    <div>
      <h3>Vencimento</h3>
      <h4>Data Venc.</h4>
      <p>{date}</p>
      <h4>Dias até Venc.</h4>
      <p>{daysUntilExpiration}</p>
    </div>
  );
}

export default AssetsDueDate;
