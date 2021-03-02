import React from 'react';
import dogs from '../../assets/dogs.png';

import { Container, Image, Title } from './styles';

export default function Outras() {
  return (
    <Container>
      <Title>
        <h1>Esta página ainda não foi implementada</h1>
        <h1>Por favor, selecione a opção de Classe de Ativos</h1>
      </Title>

      <Image>
        <img src={dogs} alt="dogs" style={{width: '100%'}} />
      </Image>
    </Container>
  );
}
