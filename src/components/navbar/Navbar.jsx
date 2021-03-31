import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NavbarData } from "./NavbarData";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logo">
        <img className="logo" src={logo} alt="logo kinvo" />
        premium
      </div>
      <div className="navbarElements">
        {NavbarData.map((element, index) => {
          return (
            <div key={index} className="navbarElement">
             <div className="navbar-icon">{element.icon}</div> 
              <div className="element-details">
                {element.title}<br/>
              {element.value}
                </div>
            </div>
          );
        })}
        <button className="btn">
          <i className="fa fa-bars" />
        </button>

      </div>
    </div>
  );
};

export default Navbar;
