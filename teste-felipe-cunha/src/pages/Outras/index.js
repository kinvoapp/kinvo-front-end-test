import React from 'react';
import dog from '../../assets/dog.png';

import { Container, Image, Title } from './styles';

export default function Outras() {
  return (
    <Container>
      <Title>
        <h1>Esta página ainda não foi implementada</h1>
        <h1>Por favor, selecione a opção de Classe de Ativos</h1>
      </Title>

      <Image>
        <img src={dog} alt="dog" style={{width: '50%', paddingTop: '5%'}}/>
      </Image>
    </Container>
  );
}
