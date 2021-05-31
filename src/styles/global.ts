import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #fff;
        font-size: 14px;
        color: #333;
        font-family: 'Open Sans Condensed', sans-serif;
    }
    a{
        cursor: pointer;
    }
    button{
        cursor: pointer;
    }
    h2{
        color: #333;
    }
`

export interface DefaultTheme {
  font: {
    family: string
    weight: {
      light: string
      normal: string
      bold: string
    }
    size: {
      tiny: string
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }

  /**
   * Colors
   */
  colors: {
    white: string
    success: string
    body: string
    black: string
    gold: string
    primary: {
      light: string
      main: string
      dark: string
      contrastText: string
    }

    secondary: {
      light: string
      main: string
      dark: string
      contrastText: string
    }

    text: {
      primary: string
      secondary: string
      disabled: string
      hint: string
    }

    border: {
      light: string
      main: string
      dark: string
    }

    error: {
      light: string
      main: string
      dark: string
      contrastText: string
    }

    warning: string

    info: string

    grey: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
  }
  dayNight: {
    colors: {
      primary: string
      secondary: string
      secondaryteen: string
      background: string
    }
  }

  /**
   * Shadows
   */
  shadows: {
    sm: string
    md: string
  }

  /**
   * Breakpoints
   */
  screen: {
    tiny: string
    xxs: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  /**
   * Spacing
   */
  spacing: {
    none: number
    xxs: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  /**
   * Radius
   */
  radius: {
    sm: string
    md: string
    lg: string
  }

  /**
   * zIndex
   */
  zIndex: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}
