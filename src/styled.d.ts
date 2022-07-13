// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      snow: string
      gray: {
        '500': string
      }
      background: string
      primary: string
    }
  }
}