import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SideBar from './components/SideBar';
import BodyContainer from './components/BodyContainer';

// styled-components code
const Container = styled.div`
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
      <Container>
        <Header />
        <SideBar />
        <BodyContainer />
      </Container>
    );
  }
}

export default ApplicationWrapper;
