import React from 'react';
import { Container, IncomeTitle, IncomeValue } from './styles';

function IncomeInfo(props) {
  const { title, value, color, prefix, sufix } = props;
  return (
    <Container>
      <IncomeTitle>{title}</IncomeTitle>
      <IncomeValue color={color}>{prefix} {value.toLocaleString()} {sufix}</IncomeValue>
    </Container>
  )
}

export default IncomeInfo;