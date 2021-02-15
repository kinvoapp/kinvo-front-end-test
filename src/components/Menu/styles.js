import styled from 'styled-components';

export const MenuContainer = styled.aside`
  width: 226px;
  height: 100%;
  background-color: #ffffff;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
`;

export const MenuUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuOption = styled.li`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  padding: 16px 14px;
  cursor: pointer;
  transition: background 0.1s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const MenuIcon = styled.img``;

export const MenuDropdownIcon = styled.img`
  margin-left: 70px;
`;

export const MenuOptionDescription = styled.span`
  width: 75px;
  color: #707b81;
  font-size: 13px;
  font-weight: 500;
  margin-left: 14px;
`;
