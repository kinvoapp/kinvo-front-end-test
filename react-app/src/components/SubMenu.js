import React, { useState } from "react";
import styled from "styled-components";

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => {
    setSubNav(!subNav);
  };

  console.log(item);
  return (
    <div>
      <SidebarLink onClick={item.subNav && showSubNav}>
        <IconContainer>
          <IconWrapper activeClass={item.activeClass} active={subNav}>
            {item.icon}
          </IconWrapper>

          <SidebarLabel>{item.title}</SidebarLabel>
        </IconContainer>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
};

const SidebarLink = styled.a`
  display: flex;
  background: white;
  color: #707b81;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 13px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);

  &:hover {
    background: #f8fafb;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: #dae0e3;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  ${({ active }) =>
    active &&
    `
    background-color: #4C309B;
  `}
`;

const DropdownLink = styled(SidebarLink)`
  height: 10px;
  padding-left: 20px;
  justify-content: unset;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export default SubMenu;
