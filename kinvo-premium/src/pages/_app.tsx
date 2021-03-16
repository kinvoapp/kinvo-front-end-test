import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../store';
import { GlobalStyle } from './styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  const store = configureStore();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
}
