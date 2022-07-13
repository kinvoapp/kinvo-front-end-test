// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      snow: string
      gray: {
        '200': string
        '250': string
      }
      background: string
      primary: string
    }
    shadows: {
      hard: string
    }
  }
}