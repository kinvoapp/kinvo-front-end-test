import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    snow: '#FFFFFF',
    gray: {
      '50': '#F8FAFB',
      '100': '#D6D9DD',
      '200': '#627179',
      '250': '#DAE0E3',
      '450': '#707B81',
      '500': '#4E5B61',
    },
    background: '#EEF2F4',
    primary: '#4C309B',
    blue: '#008DCB',
    green: '#38BFA0',
    purple: '#8A51BA',
  },
  shadows: {
    hard: '0px 2px 20px 0px rgba(112,123,129,0.1)',
    medium: '0px 2px 20px 0px rgba(0,0,0,0.05)',
    soft: '0px 2px 6px 0px rgba(0,0,0,0.05)'
  }
}