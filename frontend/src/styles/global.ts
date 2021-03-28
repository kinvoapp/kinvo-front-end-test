import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 100%;
  }
  html, body {
    display: flex;
    width: 100%;
    min-height: 100%;
  }
  body {
    background: #EEF2F4;
    font: 18px 'Montserrat', sans-serif;
    color: #707B81;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .content {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .mainContent {
      flex: 1;
      padding: 0 28px 0 20px;
    }
  }
`;
