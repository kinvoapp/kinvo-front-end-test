import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        outline: none;
    }

    html {
        height: 100%;
    }

    body {
        background: #EEF2F4;
    }

    input, select {
        border: 1px solid #D6D9DD;
        background: #FFF;
        border-radius: 10px;
        padding: 10px;
    }

    .d-flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }

    .w-100 {
        width: 100%;
    }


`;


export default GlobalStyle