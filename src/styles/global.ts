import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #eef2f4;
    --white: #ffffff;
    --back-menu: #fefefe;
    --img1: #dae0e3;
    --back-menu-active: #f9fafb;
    --text-menu: #707b81;
    --text-div: #4e5b61;
    --border-Menu: #cccfd0;
    --text-cinza: #627179;   
    --azul: #008dcb;
    --verde: #38bfa0;
    --img2: #5D41AC;
    --roxo-escuro: #4C309B;
    --roxo-claro: #8a51ba;
    
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
  }
  body, input, button, label {
    font-family: 'Montserrat', 'Raleway', Helvetica, Sans-Serif;
    font-weight: 400;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%;
      }

      @media (max-width: 720px) {
          font-size: 87.5%;
      }
  }
  
`;
