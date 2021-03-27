import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      page: string;
      component: string;
      focus: string;
    };
    shadow: {
      header: string;
      section: string;
      item: string;
    };
    text: {
      purple: string;
      menu: string;
      sectionTitle: string;
      itemTitle: string;
      pink: string;
      blue: string;
      green: string;
      info: string;
    };
    icon: {
      focusbackground: string;
      background: string;
      tiny: string;
    };
    border: { box: string; menu: string };
    color: {
      pink: string;
      cyan: string;
      orange: string;
    };
  }
}
