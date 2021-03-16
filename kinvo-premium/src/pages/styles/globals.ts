import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --white-opacity: rgba(255,255,255,0.81);
    --gray-strong: #707b81;
    --purple: #4c309b;
    --second-gray: #4e5b61;
    --third-gray: #627179;
    --little-purple: #8a51ba;
    --green: #38bfa0;
    --blue: #008dcb;
    --light-gray: #dce0e3;
    --background: #eef2f4;
    --gray-active: #f8fafb;
    --gray-border: #cccfd1;
    --gray-line: #dae0e3;
    --gray-search: #d6d9dd;
    --gray-pagination: #edeef0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 77.5%;
    }
  }

  body {
    background: var(--background);
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
