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

export const MenuLink = styled.a`
  width: 100%;
  height: 67px;
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 14px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;

  transition: background 0.1s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const MenuSubContent = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuDescription = styled.span`
  width: 75px;
  color: #707b81;
  font-size: 13px;
  font-weight: 500;
  margin-left: 14px;
`;

export const MenuIcon = styled.img``;

export const MenuDropdownIcon = styled.img`
  width: 5px;
  height: 9px;
`;

export const SubMenuContent = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const SubMenuSubContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const SubMenuOption = styled.li`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.1s ease;
  padding: 16px 14px;
  border-bottom: 1px solid #f5f5f5;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const SubMenuOptionDescription = styled.span`
  color: #707b81;
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
`;
