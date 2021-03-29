import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    /* COLORS */
    --c-alpha: rgba(0, 0, 0, 0.05);
    --c-alpha-light: rgba(0, 0, 0, 0.04);
    --c-alpha-lighter: rgba(0, 0, 0, 0.03);
    --c-white:#ffffff;
    --c-ghostwhite: #F8FAFB;
    --c-violet: #4C309B;
    --c-violet-light: #8A51BA;
    --c-blue: #008DCB;
    --c-green: #38BFA0;
    --c-cyan: #DAE0E3;
    --c-cyan-light: #EEF2F4;
    --c-cyan-dark: #DCE0E3;
    --c-cyan-darker: #D6D9DD;
    --c-neutral: #627179;
    --c-neutral-dark:#4E5B61;
    --c-neutral-light: #707B81;

    /* MARGINS */
    --m-28: 2.8rem;
    --m-10: 1rem;

    /* PADDING */
    --p-30: 3rem;
    --p-20: 2rem;
    --p-15: 1.5rem;
    --p-10: 1rem;
    --p-9: 0.9rem;

    /* FONT SIZE */
    --f-20: 2rem;
    --f-18: 1.8rem;
    --f-16: 1.6rem;
    --f-14: 1.4rem;
    --f-13: 1.3rem;
    --f-12: 1.2rem;
    --f-9: 0.9rem;
    --f-8: 0.8rem;
    --f-6:0.6rem;
  }
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%; 
    font-family: 'Montserrat', 'Helvetica', sans-serif;
  }

  body{
    background-color: var(--c-cyan-light);
  }

`;

export default GlobalStyle;
