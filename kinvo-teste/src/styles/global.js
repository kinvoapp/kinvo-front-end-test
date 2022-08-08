import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background: ${({theme}) => theme.backgroundColor};
        font-size: 16pxx;
    }
    button{
        cursor: pointer;
    }
`;