import { ColorsTheme } from './colors';

// Global
export interface GlobalTheme {
  defaultFont: string;
  secondaryFont: string;
  gutterSpace: number;
  headerSize: number;
  defaultShadow: string;
}

export interface Theme {
  colors: ColorsTheme;
  space: number[];
  fontSizes: string[];
  global: GlobalTheme;
}
