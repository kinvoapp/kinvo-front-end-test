import React from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Menu />
    </Container>
  );
}

export default Home;
