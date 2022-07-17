import React from "react";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  return (
    <IconContext.Provider value={{ size: "28px", color: "white" }}>
      <SidebarNav>
        <SidebarWrapper>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrapper>
      </SidebarNav>
    </IconContext.Provider>
  );
};

const SidebarNav = styled.nav`
  background: white;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const SidebarWrapper = styled.div`
  width: 100%;
`;

export default Sidebar;
