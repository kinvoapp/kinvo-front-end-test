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
    height: 100%;
    width: 100%;

    background-color: #eef2f4;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .dropdown-style {
    width: 220px;
    height: 32px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #D6D9DD;
    margin-right: 17px;
    font-size: 12px;
    font-weight: 500;
    color: #707B81;
  }
`;
