import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '@routes/routes';
import { Routes } from '@routes/Routing.types';
import { matchPath } from 'react-router';
import useClickOutside from '@utils/hooks/useClickOutside';
import SvgIcon from '@components/svgIcon/SvgIcon';
import { Container, Content, Nav, IconBackground } from './NavSidebar.styles';
import { NavSidebarProps } from './NavSidebar.types';

const NavSidebar = (props: NavSidebarProps) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Nav role="navigation">
        {routes.map(route => (
          <NavLink key={route.label} to={route.path} exact={route.exact}>
            <Content>
              <IconBackground isActive={route.path === pathname}>
                <SvgIcon src="./public/assets/svg/asset-class-icon--white.svg" width={18} height={18} />
              </IconBackground>
              <p>{route.label}</p>
              <SvgIcon src="./public/assets/svg/caret-right-icon--grey.svg" width={12} height={12} />
            </Content>
          </NavLink>
        ))}
      </Nav>
    </Container>
  );
};

export default NavSidebar;
