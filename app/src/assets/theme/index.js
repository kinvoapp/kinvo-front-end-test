import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-primary: #707B81;
        --color-secondary: #EEF2F4;
        --color-secondary-shaded: #F8FAFB;
        --color-accent: #4C309B;
        --color-icon-background: #DAE0E3;

        --color-light: #fff;
        --color-green: #38BFA0;
        --color-red: #AE1717;
        --color-blue: #008DCB;

        --font-family-primary: Montserrat, sans-serif;
        --font-family-secondary: Helveltica Neue, sans-serif;

        --box-shadow-large: 0px 3px 10px 5px rgba(112, 123, 129, 0.1);
        --box-shadow-medium: 0px 2px 10px 5px rgba(0, 0, 0, 0.05);

        --border-radius-large: 12px;
        --border-radius-medium: 10px;
        --border-radius-small: 8px;
        
        --font-weight-extra-large: 700;
        --font-weight-large: 600;
        --font-weight-medium: 500;
        --font-weight-small: 400;
    }

`