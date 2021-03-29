import React from 'react';
import FixedIncome from './pages/FixedIncome';
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
        <FixedIncome />
      </Body>
    </Container>
  );
}

export default App;
