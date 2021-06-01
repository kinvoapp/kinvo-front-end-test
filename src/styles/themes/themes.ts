/**
 * Theme for applying consistent styling to the app
 */

export default {
  /**
   * Font
   */
  font: {
    family: "'Open Sans', sans-serif",
    weight: {
      light: '300',
      normal: '400',
      bold: '600'
    },
    size: {
      tiny: '11px',
      xxs: '13px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '34px'
    }
  },

  /**
   * Colors
   */
  colors: {
    black: '#313131',
    white: '#fff',
    success: '#34a853',
    body: '#fcfbfe',
    gold: 'rgba(255,215,0)',
    primary: {
      light: 'rgba(66, 236, 154)',
      main: 'rgba(66, 236, 154)',
      dark: 'rgba(66, 236, 154)',
      contrastText: '#fff'
    },

    secondary: {
      light: '#333',
      main: '#333',
      dark: '#333',
      contrastText: '#fff'
    },

    text: {
      primary: '#627179',
      secondary: 'rgba(0, 0, 0, 0.54)',
      green: '#38BFA0',
      blue: '#008DCB',
      purple: '#8A51BA',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },

    border: {
      light: '#f5f5f5',
      main: '#DAE0E3',
      dark: '#bdbdbd'
    },

    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },

    warning: '#FFB818',

    info: '#4169E1',

    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  dayNight: {
    colors: {
      primary: '#fff',
      secondary: '#333',
      secondaryteen: '#bdbdbd',
      background: '#f5f5f5'
    }
  },

  /**
   * Shadows
   */
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: 'rgba(0, 0, 0, 0.3) 0px 1px 8px 0px',
    lg: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    xl: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },

  /**
   * Breakpoints
   */
  screen: {
    tiny: '280px',
    xxs: '440px',
    xs: '440px',
    sm: '640px',
    md: '1007px',
    lg: '1100px',
    xl: '1230px'
  },

  /**
   * Spacing
   */
  spacing: {
    none: 0,
    xxs: '5px',
    xs: '10px',
    sm: '20px',
    md: '30px',
    lg: '40px',
    xl: '60px'
  },

  /**
   * Radius
   */
  radius: {
    sm: '3px',
    md: '6px',
    lg: '12px'
  },

  /**
   * zIndex
   */
  zIndex: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50
  }
}
