import { extendTheme, theme as base } from "@chakra-ui/react";

const colors = {
  brand: {
    background: "#EEF2F4",
    lightPurple: "#8A51BA",
    darkPurple: "#4C309B",
    lightGray: "#4E5B61",
    darkGray: "#707B81",
    blue: "#008DCB",
    green: "#38BFA0",
  },
};

export const theme = extendTheme({
  colors,

  fonts: {
    heading: `Montserrat, ${base.fonts.heading}`,
    body: `Montserrat, ${base.fonts.body}`,
  },
});
