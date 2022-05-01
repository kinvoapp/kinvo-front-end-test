import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from '../src/styles/chakraTheme';
import App from './App';
import { ApiDataContextProvider } from './context/apiDataContext';
import './styles/global.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ApiDataContextProvider>
  </React.StrictMode>
)
