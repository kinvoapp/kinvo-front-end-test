import React, { Component } from "react";
import Header from "./components/Header";
import SidebarSetOfButtons from "./components/SidebarSetOfButtons";
import AssetsWrapperSuper from "./components/AssetsWrapperSuper";
import styled from "styled-components";

// styled-components code
const DIV2 = styled.div`
  display: flex;
`;

// --------------------------

class ApplicationWrapper extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <DIV2>
          <SidebarSetOfButtons />
          <AssetsWrapperSuper />
        </DIV2>
      </div>
    );
  }
}

export default ApplicationWrapper;
