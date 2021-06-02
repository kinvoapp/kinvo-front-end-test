import { currencyFormatter } from '@utils/currencyHelper';
import React from 'react';
import { Container, Info, Title, Value } from './Cards.styles';
import { CardProps } from './Cards.types';

const Cards = (props: CardProps) => {
  const { title, value, type } = props;
  return (
    <Container>
      <Info>
        <Title>{title}</Title>
        <Value>{type === 'currency' ? currencyFormatter(Number(value)) : `${value}%`}</Value>
      </Info>
    </Container>
  );
};

export default Cards;
