import React from 'react';

import Cards from './Cards';
import MinhasRendasFixas from './Listagem';

import { Container, Title, Header } from './styles';

function RendaFixa() {
  return (
    <Container>
      <Header>
        <Title>Renda Fixa</Title>
        <Cards />
      </Header>
      <MinhasRendasFixas />
    </Container>
  );
}

export default RendaFixa;
