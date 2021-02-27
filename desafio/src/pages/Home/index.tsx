import React from 'react';

import { AppBar, SideBar } from '../../components';
import { Container, Main, Wrapper } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <AppBar />

      <Wrapper>
        <SideBar />

        <Main>
          <h5>Lorem Ipsum</h5>
        </Main>
      </Wrapper>
    </Container>
  );
};
