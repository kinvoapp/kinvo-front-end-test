import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #eee;
  }
`;