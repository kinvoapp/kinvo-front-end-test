import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import history from './services/history';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
