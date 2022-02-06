import "./MainHeaderCard.css";
import React from "react";

function MainHeaderCard({ title, content }) {
  return (
    <div className='main-header-card'>
      <div className='divider'></div>

      <div>
        <h5 className='main-header-card-title'>{title}</h5>
        <h4 className='main-header-card-content'>{content}</h4>
      </div>
    </div>
  );
}

export default MainHeaderCard;
