import React from 'react';
import { Container } from './styles';

function Card(props) {
  const { children } = props;
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Card;