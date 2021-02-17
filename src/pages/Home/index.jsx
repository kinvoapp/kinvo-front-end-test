import React from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import RendaFixa from '../../components/RendaFixa';

import { Container, SubContainerFlex } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <SubContainerFlex>
        <Menu />
        <RendaFixa />
      </SubContainerFlex>
    </Container>
  );
}

export default Home;
