import React from 'react';
import RendaFixa from './pages/RendaFixa';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import GlobalStyle, { Container, Body } from './styles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Body>
        <Sidebar />
        <RendaFixa />
      </Body>
    </Container>
  );
}

export default App;
