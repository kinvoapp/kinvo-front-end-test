type ColorName =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "danger"
  | "warning"
  | "background"
  | "disabled"
  | "text";

interface Color {
  lightest?: string;
  lighter?: string;
  light?: string;
  main?: string;
  dark?: string;
  darker?: string;
  darkest?: string;
}

export type ColorTheme = {
  [name in ColorName]: Color;
};

type Themes = {
  [name: string]: ColorTheme;
};

export function getTheme(props: any) {
  return props.theme as ColorTheme;
}

const theme: Themes = {
  light: {
    primary: {
      light: "#8A51BA",
      main: "#4C309B",
    },
    secondary: {
      main: "#008DCB",
    },
    tertiary: {
      main: "#FF8052",
    },
    success: {
      main: "#38BFA0",
    },
    danger: {},
    warning: {},
    background: {
      lighter: "#ffffff",
      light: "##F8FAFB",
      main: "#EEF2F4",
      dark: "#DAE0E3",
    },
    disabled: {
      main: "#DCE0E3",
    },
    text: {
      light: "#9DA5AC",
      main: "#627179",
    },
  },
};

export { theme };
