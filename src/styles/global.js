import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
    }
  `}
`;
