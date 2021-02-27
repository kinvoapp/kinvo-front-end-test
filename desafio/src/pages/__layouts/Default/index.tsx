import React from 'react';

import { AppBar, SideBar } from '../../../components';
import { Container, Main, Wrapper } from './styles';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <AppBar />

      <Wrapper>
        <SideBar />

        <Main>{children}</Main>
      </Wrapper>
    </Container>
  );
};
