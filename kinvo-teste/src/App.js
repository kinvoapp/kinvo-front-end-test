import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SidebarSetOfButtons from './components/SidebarSetOfButtons';
import AssetsWrapperSuper from './components/AssetsWrapperSuper';

// styled-components code
const Page = styled.div`
  display: grid;
  grid-template:
    "header header" 90px 
    "sidebarSetOfButtons assetsWrapperSuper" auto
    / 225px auto;
`;

// --------------------------

class ApplicationWrapper extends Component {
  render() {
    return (
      <Page>
        <Header />
        <SidebarSetOfButtons />
        <AssetsWrapperSuper />
      </Page>
    );
  }
}

export default ApplicationWrapper;
