import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      {SidebarData.map((option, index) => {
        return (
          <div key={index} className="sidebarOptions">
            <a href='#'>
              {option.icon}
              {option.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
