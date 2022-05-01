import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --purple-400: #8A51BA;
        --purple-600:  #4C309B;
        --background:  #EEF2F4;
        --gray-200: #DAE0E3; 
        --gray-400: #D6D9DD;
        --gray-600: #4E5B61;
        --cyan: #38BFA0;
        --blue: #008DCB;
    }

    * {
    border: 0;
    margin: 0;
    box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p, a {
        font-family: 'Montserrat', sans-serif;
        color: #707B81;
    }


`