import { createGlobalStyle } from 'styled-components'

import MontserratBold from '../fonts/Montserrat/Montserrat-Bold.ttf'
import MontserratMedium from '../fonts/Montserrat/Montserrat-Medium.ttf'
import MontserratRegular from '../fonts/Montserrat/Montserrat-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Montserrat Bold;
    font-style: normal;
    src: url(${MontserratBold});
    font-weight: 500;
  }

  @font-face {
    font-family: Montserrat Medium;
    font-style: normal;
    src: url(${MontserratMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: Montserrat Regular;
    font-style: normal;
    src: url(${MontserratRegular});
    font-weight: 500;
  }

  * {
    color: #707B81;
    font-family: Montserrat Medium, sans-serif;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle