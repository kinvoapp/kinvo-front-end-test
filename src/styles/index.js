import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
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