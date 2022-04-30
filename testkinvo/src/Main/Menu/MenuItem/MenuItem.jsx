import React from "react";

import "./MenuItem.scss";

import iconArrow from "../img/arrow.svg";

const MenuItem = ({ key, title, img, children }) => {
  return (
    <>
      <li key={key}>
        <div className="menu-select-item">
          <div className="menu-img">
            <img src={img ? img : 'none'} alt={title} />
          </div>
          <p>{title}</p>
        </div>
        <img src={iconArrow} alt="" />
      </li>
    </>
  );
};

export default MenuItem;
