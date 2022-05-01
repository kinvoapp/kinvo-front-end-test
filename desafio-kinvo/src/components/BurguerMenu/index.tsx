import React, { useState } from 'react';

import './hambugers.css';

function BurguerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toogleIsActive = () => {
    setIsActive((state) => !state);
  };

  return (
    <button
      className={`hamburger hamburger--vortex ${isActive ? 'is-active' : ''}`}
      type="button"
      onClick={toogleIsActive}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

export default BurguerMenu;
