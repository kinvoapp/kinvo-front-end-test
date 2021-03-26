import { createGlobalStyle } from "styled-components";
import "./fonts/FreeSans.ttf";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'FreeSans';
  src: local('FreeSans'), url(./fonts/FreeSans.ttf) format('truetype');
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 75%;
  }
}

@media (max-width: 320px) {
  html {
    font-size: 62.5%;
  }
}

body, input, button, textarea, select {
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}
`;
