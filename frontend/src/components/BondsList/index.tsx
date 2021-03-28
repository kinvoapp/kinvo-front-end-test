import React from 'react';

import BondsCard from '../BondCard';

import { BondItem } from './styles';

const BondsList: React.FC = () => (
  <>
    <BondItem>
      <BondsCard />
      <BondsCard />
      <BondsCard />
    </BondItem>
  </>
);

export default BondsList;
