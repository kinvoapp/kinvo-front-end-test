import React, { useState } from 'react';
import GlobalStyle from '@styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme/theme';
import NavSidebar from '@components/navSidebar/NavSidebar';
import KinvoHeader from '@components/kinvoHeader/KinvoHeader';
import { LayoutProps } from './Layout.types';
import { Container } from './Layout.styles';

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <KinvoHeader />
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
