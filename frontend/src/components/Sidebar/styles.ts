import styled from 'styled-components';

export const SidebarComponent = styled.aside`
  min-width: 226px;
  display: flex;
  background-color: white;
  flex-direction: column;
  nav {
    display: flex;
    ul {
      width: 100%;
    }
  }
  @media (max-width: 1310px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  flex: 1;
  ul {
    width: 100%;
    height: 200px;
    display: inline-block;
  }
`;

export const Submenu = styled.ul`
  display: flex;
  border: 1px solid red;
  min-height: 100px;
  li {
    display: flex;
    flex-direction: column;
  }
`;
