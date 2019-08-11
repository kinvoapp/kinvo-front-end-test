import React from "react";

import { Main, Container } from "./styles";

import Header from "./layout/header/header";
import Sidebar from "./layout/sidebar/sidebar";
import Content from "./layout/content/content";
import Footer from "./layout/footer/footer";

import GlobalStyled from "./styles/index";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Main>
          <Sidebar key="navigation" />
          <Content />
        </Main>
        <Footer />
      </Container>
      <GlobalStyled />
    </div>
  );
}

export default App;
