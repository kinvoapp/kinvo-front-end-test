import React from 'react';
import dog from '../../assets/dog.png';

import { Container, Title } from './styles';

export default function Outras() {
  return (
    <Container>
      <Title>
        <h1>Oops!</h1>
        <h3 style={{paddingTop: '10px'}}>Página não disponível.</h3>
        <h4 style={{paddingTop: '10px'}}>Por favor, selecione a opção <p>Classe de Ativos</p> ou <p>Fundo Renda Fixa.</p></h4>
      </Title>
        <img src={dog} alt="dog" style={{width: '50%', paddingTop: '5%', float: 'right'}}/>
    </Container>
  );
}
