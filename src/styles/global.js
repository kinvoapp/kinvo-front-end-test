import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      background: ${theme.colors.grayLight};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 22.26rem auto;
  grid-template-areas:
    "menu menu"
    "aside main";
`;
