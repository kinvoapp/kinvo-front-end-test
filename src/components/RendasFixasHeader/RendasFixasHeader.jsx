import "./RendasFixasHeader.css";
import React, { useState } from "react";

import lupa from "../../assets/main-content/lupa.svg";

function RendasFixasHeader({ setSearchText }) {
  return (
    <>
      <div className='rendas-fixas-header'>
        <h3>Minhas Rendas Fixas</h3>

        <div className='orderer-area'>
          <select name='' id='select'>
            <option value='' selected disabled hidden>
              Ordenar por
            </option>
          </select>

          <div className='search-area'>
            <img src={lupa} alt='Ícone de lupa' id='icon-lupa' />
            <input
              type='search'
              name='search'
              id='search'
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className='header-divider'></div>
    </>
  );
}

export default RendasFixasHeader;
