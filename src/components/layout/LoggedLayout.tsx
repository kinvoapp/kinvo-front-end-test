import KinvoHeader from '@components/kinvoHeader/KinvoHeader';
import MainContainer from '@components/mainContainer/MainContainer';
import NavSidebar from '@components/navSidebar/NavSidebar';

import React from 'react';
import { Container } from './Layout.styles';

const LoggedLayout = props => {
  const { children } = props;
  return (
    <>
      <KinvoHeader />
      <Container>
        <NavSidebar />
        <MainContainer>{children}</MainContainer>
      </Container>
    </>
  );
};

export default LoggedLayout;
