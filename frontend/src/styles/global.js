import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --cor001: #dae0e3;
        --cor002: #eef2f4;
        
        --cor003: #ffffff;
        --cor004: #f8fafb;

        --cor005: #8a51ba;
        --cor006: #38bfa0;
        --cor007: #008dcb;

        --cor008: #707b81;
        --cor009: #4c309b;
    }

    *{
        margin: 0;
        padding: 0;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: var(--cor002);
        font-family: 'Montserrat';
    }

    
    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
`