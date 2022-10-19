import React from 'react';
import styled from 'styled-components';

import HeaderCards from './components/headerCards';

export default function RendaFixa() {
  return (
    <Container>
      <h1>Renda Fixa</h1>
      <Header>
        <HeaderCards />
      </Header>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 20px 15px;

  h1 {
    color: #4c309b;
  }
`;

const Header = styled.div`
  display: flex;
  margin: 20px 0;
`;
