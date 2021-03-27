import React from 'react';
import { Container, IncomeTitle, IncomeValue } from './styles';

function IncomeInfo(props) {
  const { title, value, color } = props;
  return (
    <Container>
      <IncomeTitle>{title}</IncomeTitle>
      <IncomeValue color={color}>{value}</IncomeValue>
    </Container>
  )
}

export default IncomeInfo;