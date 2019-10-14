import React from 'react';
import { Container } from './styles';

function SummaryCard(props) {
  const { summaryTitle, summaryValue } = props;

  return (
    <Container>
      <h6>{ summaryTitle }</h6>
      <h4>{ summaryValue }</h4>
    </Container>
  );
}

export default SummaryCard;
