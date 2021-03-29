import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      page: string;
      component: string;
      focus: string;
      navigator: string;
    };
    shadow: {
      header: string;
      section: string;
      item: string;
      navigator: string;
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
      navigator: string;
    };
    icon: {
      focusBackground: string;
      background: string;
      tiny: string;
    };
    border: { box: string; menu: string; navigator: string };
    color: {
      pink: string;
      cyan: string;
      orange: string;
    };
  }
}
