import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}

:root{
    --purple-800: #4C309B;

    --grey-800: #707B81;
    --grey-500: #EEF2F4;
    --grey-300:#4E5B61;
    --grey-200: #e2e2e2;

    --white-800:#FFFFFF;

    --green-500: #38BFA0;

    --blue-500: #008DCB;
}

`