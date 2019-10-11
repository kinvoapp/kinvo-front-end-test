import React from 'react';
import { Container, ChooseClass } from './styles';

function ProductClassAnalysisInput(props) {
  const { label, isInputActive } = props;
  return (
    <Container>
      <ChooseClass isInputActive={isInputActive}>
        <p>{label}</p>
      </ChooseClass>
    </Container>
  );
}

export default ProductClassAnalysisInput;
