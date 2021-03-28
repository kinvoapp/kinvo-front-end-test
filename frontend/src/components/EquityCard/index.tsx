import React from 'react';

import { Card } from './styles';

interface CardData {
  title: string;
  value: number;
  prefix?: boolean;
  suffix?: boolean;
}

function toCurrency(value: number): string {
  const v = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value);
  return v;
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
        {toCurrency(value)}
        {suffix && '%'}
      </p>
    </div>
  </Card>
);

export default EquityCard;
