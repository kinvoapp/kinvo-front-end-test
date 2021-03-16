import { createGlobalStyle } from 'styled-components';
import Helvetica from '../fonts/helvetica-neue.ttf';

export default createGlobalStyle`

@font-face {
  font-family: 'Helvetica';
  src: url(${Helvetica});
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html, body, #root {
  height: 100vh;
  font-family: 'Helvetica', sans-serif;
  background-color: #EEF2F4;
}


button {
  cursor: pointer;
  outline: none;
  font-family: 'Helvetica', sans-serif;
  color: #707B81;
}

`;