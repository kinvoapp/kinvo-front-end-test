import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --purple:  #4C309B;
        --background:  #EEF2F4;
        --gray: ;
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