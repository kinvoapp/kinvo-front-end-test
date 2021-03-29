import React from 'react';

import BondsCard from '../BondCard';
import { SnapshotByProduct } from '../../interfaces/api.interface';

import { BondItem } from './styles';

const BondsList: React.FC<{ data: SnapshotByProduct[] }> = (props: {
  data: SnapshotByProduct[];
}) => {
  const { data } = props;

  return (
    <>
      {data &&
        data.map(i => (
          <BondItem key={i.fixedIncome.portfolioProductId}>
            <BondsCard
              fixedIncome={i.fixedIncome}
              position={i.position}
              due={i.due}
            />
          </BondItem>
        ))}
    </>
  );
};

export default BondsList;
