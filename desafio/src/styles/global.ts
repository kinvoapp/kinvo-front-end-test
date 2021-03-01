import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button, select, option {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong  {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
