import styled from 'styled-components';

export const SidebarComponent = styled.aside`
  width: 226px;
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

export const Submenu = styled.ul`
  display: flex;
  border: 1px solid red;
  min-height: 100px;
  li {
    display: flex;
    flex-direction: column;
  }
`;
