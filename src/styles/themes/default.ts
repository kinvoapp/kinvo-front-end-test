import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  background: {
    page: "#EEF2F4",
    component: "#FFFFFF",
    focus: "#F8FAFB",
    navigator: "#DCE0E3",
  },
  shadow: {
    header: "0px 3px 20px rgba(112, 123, 129, 0.1)",
    section: "0px 2px 6px #0000000A",
    item: "0px 2px 20px #0000000D",
    navigator: "0px 0px 10px #00000008",
  },
  text: {
    purple: "#4C309B",
    menu: "#707B81",
    sectionTitle: "#627179",
    itemTitle: "#4E5B61",
    pink: "#8A51BA",
    blue: "#008DCB",
    green: "#38BFA0",
    info: "#A5A5A5",
    navigator: "#C2C5CC",
  },
  icon: {
    focusBackground: "#4C309B",
    background: "#DAE0E3",
    tiny: "#9DA5AC",
  },
  border: { box: "#D6D9DD", menu: "#CCCFD1", navigator: "#EDEEF0" },
  color: {
    pink: "#9E51BA",
    cyan: "#0DD1E3",
    orange: "#FF8052",
  },
};

export default defaultTheme;
