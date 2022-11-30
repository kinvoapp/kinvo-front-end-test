import React from 'react';
import styled from 'styled-components';

export default function Page404() {
  return (
    <Container>
      <Title>
        Não foi possível carregar a página. Tente novamente mais tarde...
      </Title>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 87vh;
  padding: 50px 30px;
`;

const Title = styled.h1`
  color: #707b81;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
