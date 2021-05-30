import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  :root{
    --white: #FFFFFF;
    --background: #EEF2F4;
    --gray: #DAE0E3;
    --text: #707B81;
    --purple: #5D41AC;
    --purpleDark: #4C309B
    --green: #38BFA0;
    --blue: #008DCB;
  }

  body{
    background-color: var(--background);
    color: var(--text);
  }

  @media (max-width: 1060px) {
  html {
    font-size: 93.75%;
  }
}

  @media (max-width: 720px) {
    html {
    font-size: 87.5%;
    }
}

  button {
    cursor: pointer;
  }


`;
