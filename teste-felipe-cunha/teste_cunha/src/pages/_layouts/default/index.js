import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../../components/Navbar';
import SideBar from '../../../components/Sidebar';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <SideBar />
        {children}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
