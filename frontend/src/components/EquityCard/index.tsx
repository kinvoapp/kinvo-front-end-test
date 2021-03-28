import React from 'react';

import { formatToCurrency } from '../../utils/formatters';

import { Card } from './styles';

interface CardData {
  title: string;
  value: number;
  prefix?: boolean;
  suffix?: boolean;
}

const EquityCard: React.FC<CardData> = ({
  title,
  value,
  prefix,
  suffix
}: CardData) => (
  <Card>
    <div>
      <h3>{title}</h3>
      <p>
        {prefix && 'R$ '}
        {formatToCurrency(value)}
        {suffix && '%'}
      </p>
    </div>
  </Card>
);

export default EquityCard;
