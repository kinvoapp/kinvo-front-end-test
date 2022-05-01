import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{

    --text-color-header: rgb(98, 113, 121);
    --text-color-nav: rgb(112, 123, 129);
    --text-color-component-main: #4C309B;
    --text-color-title-main: #4E5B61;
    --text-color-title-main-2: #627179;
    --text-color-tesdir-main: #8A51BA;
    --text-color-amount-main: #38BFA0;
    --text-color-amount-main-2: #008DCB;


    --bg-main: rgba(238, 242, 244, 1);
    --btn-hover: #F8FAFB;
  }

  *{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
`

export default GlobalStyles;