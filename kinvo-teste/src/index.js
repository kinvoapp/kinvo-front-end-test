import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppProvider } from './context'
import Home from './Pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

