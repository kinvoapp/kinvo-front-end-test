/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarData } from './data';
import SubMenu from './subMenu';

export default function Sidebar() {
  return (
    <>
      <Nav>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </Nav>
      <Outlet />
    </>
  );
}

const Nav = styled.nav`
  width: 200px;
  min-width: 200px;
  background-color: #fff;
`;
