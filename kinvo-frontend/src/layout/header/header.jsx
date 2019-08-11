import React from "react";
import logo from "../../assets/logo.svg";
import { Menu, Circle } from "./styles";
import { FaBars, FaAngleDown } from "react-icons/fa";

const Header = () => (
  <Menu>
    <div>
      <img src={logo} alt="kinvo logo" />
      <p fontSize={80}>premium</p>
    </div>
    <nav>
      <div>
        <Circle>
          <FaAngleDown />
        </Circle>
        <div>
          <span>carteira</span>
          <p>pessoal</p>
        </div>
      </div>
      <p>
        <Circle>
          <FaBars />
        </Circle>
      </p>
    </nav>
  </Menu>
);

export default Header;
