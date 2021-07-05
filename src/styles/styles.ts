import styled, {createGlobalStyle} from 'styled-components'

    //Definindo estilização global
export const GlobalStyle = createGlobalStyle`
    //definindo variáveis 
   :root {
       --background: #EEF2F4;
       --shape: #FFFFFF;
       --shape2: #F8FAFB;
       --shadow: #0000000A;
       --textSumary: #4C309B;
       --textMenu: #707B81;
       --borderSort: #D6D9DD;
       --title: #627179;
       --shadowSumary: #0000000D;
       --borderList: #DAE0E3;
       --listItemBorder: #DAE0E3;
       --textItemList: #4E5B61;
       --textClass: #8A51BA ;
       --dueDate: #008DCB;
       --textMyPosition:#38BFA0;
       --borderSideBar: #CCCFD1;
   }
   
   * {
       margin: 0;
       padding: 0;
       box-sizing: 0;
    }
    
    body {
        background: #EEF2F4;
        -webkit-font-smoothing: antialiased;
        max-width: 1366px;
        max-height: 766px;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    } 

`
