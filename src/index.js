import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
