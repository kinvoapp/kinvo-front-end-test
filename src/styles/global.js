import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  *, button, input {
    border: 0;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;

    background-color: #eef2f4;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
