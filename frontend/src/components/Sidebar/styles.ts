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
`;

export const NavItem = styled.li`
  flex: 1;
  ul {
    width: 100%;
  }

  .subMenu {
    li {
      display: flex;
      flex-direction: column;
    }
  }
`;
