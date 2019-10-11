import React from 'react';
import { Container } from './styles';
import ProductClassAnalysisInput from './components/ProductClassAnalysisInput';

function ChooseInputs() {
  return (

    <Container>

      <ProductClassAnalysisInput
      label="Ações"
      isInputActive="true"
    />
      <ProductClassAnalysisInput
      label="Bitcoins"
    />
      <ProductClassAnalysisInput
      label="Debêntures"
    />
      <ProductClassAnalysisInput
      label="Fundos"
    />

    </Container>

  );
}

export default ChooseInputs;
