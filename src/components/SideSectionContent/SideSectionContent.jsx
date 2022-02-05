import "./SideSectionContent.css";
import React from "react";

import expand_icon from "../../assets/side-content/expand.svg";

function SideSectionContent({ iconSvg, title }) {
  return (
    <div className='side-section-content'>
      <div className='section-icon-area'>
        <img src={iconSvg} alt='Section Icon' className='' />
      </div>

      <div className='section-title-area'>
        <h3 className='section-content-title'>{title}</h3>
      </div>

      <div className='section-expand'>
        <img src={expand_icon} alt='Expand Icon' />
      </div>
    </div>
  );
}

export default SideSectionContent;
