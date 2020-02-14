import React from 'react';

import Logo from './assets/Icon';
import Spreadsheet from './components/spreadsheet/index';
import Sidebar from './components/sidebar/index';
import { Container, Header, Aside, Main } from './styled';

export default function App() {
  return (
    <div style={{ width: '100%' }}>
      <Container>
        <Header>
          <Logo style={{ padding: 30 }} />
        </Header>
      </Container>
      <div style={{ display: 'flex' }}>
        <Aside>
          <Sidebar />
        </Aside>
        <Main>
          <Spreadsheet />
        </Main>
      </div>
    </div>
  );
}
