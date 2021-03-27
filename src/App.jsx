import React from 'react';
import RendaFixa from './pages/RendaFixa';
import Header from './components/Header';
import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>
        {/* <Sidebar /> */}
        <RendaFixa />
      </Container>
    </div>
  );
}

export default App;
