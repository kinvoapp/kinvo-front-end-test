import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

@media(max-width: 1080px) {
   html {
    font-size: 93.75%;
  }
}
@media(max-width: 720px) {
   html {
    font-size: 87.5%;
  }
}
 
body {
  background-color: ${defaultTheme.colors.background};
  color: ${defaultTheme.colors.gray[200]};
  -webkit-font-smoothing: antialiased;
}

body,
  input,
  textarea,
  select,
  button {
  font: 400 1rem "Montserrat", sans-serif;
}
 
button {
  cursor: pointer;
}
 
a {
  color: inherit;
  text-decoration: none;
}
`;
