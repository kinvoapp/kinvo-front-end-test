import "./Header_Info.css";
import React from "react";

function Header_Info({ svgIcon, cardTitle, cardValue }) {
  return (
    <div className='card'>
      <img src={svgIcon} alt='Card Icon' className='card-icon' />
      <div className='card-info'>
        <p className='card-title'>{cardTitle}</p>
        <h3 className='card-value'>{cardValue}</h3>
      </div>
    </div>
  );
}

export default Header_Info;
