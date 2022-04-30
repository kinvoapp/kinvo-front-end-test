import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{

    --text-color-header: rgb(98, 113, 121);
    --text-color-nav: rgb(112, 123, 129);


    --bg-main: rgba(238, 242, 244, 1);
  }
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export default GlobalStyles;