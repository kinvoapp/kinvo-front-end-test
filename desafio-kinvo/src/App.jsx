import React from 'react';
import Router from './Router';
import Provider from './contexts/Provider';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Router />
    </Provider>
  );
}

export default App;
