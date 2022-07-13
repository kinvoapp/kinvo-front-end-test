// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      snow: string
      gray: {
        '50': string
        '100': string
        '200': string
        '250': string
        '450': string
        '500': string
      }
      background: string
      primary: string
      blue: string
      green: string
      purple: string
    }
    shadows: {
      hard: string
      medium: string
    }
  }
}