import React from 'react';
import Router from './Router';
import Provider from './contexts/Provider';
import Header from './components/Header';

// import { Container } from './styles';

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
