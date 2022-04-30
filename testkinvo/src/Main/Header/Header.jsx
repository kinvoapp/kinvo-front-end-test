import React from "react";

import "./Header.scss";

import logo from "./img/logo.png";
import brute from "./img/brute.png";
import arrowup from "./img/arrowup.png";
import arrowdiagright from "./img/arrowdiagright.png";
import dropdown from "./img/dropdown.png";

const Header = ({ data }) => {
  //data Reciver
  const valorbruto = data.data.snapshotByPortfolio.valueApplied;
  const valoraplicado = data.data.snapshotByPortfolio.equityProfit;
  const rentabilidade = data.data.snapshotByPortfolio.indexerValue;

  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="" className="imgLogo" />
      </div>
      <div className="header-logo-menu">
        <ul>
          <li>
            <div className="header-icon-nav">
              <img src={brute} alt="Saldo Bruto" />
            </div>
            <div className="header-title">
              <p className="title">Saldo Bruto</p>
              <p className="header-resume-value">{data ? valorbruto : '---'}</p>
            </div>
          </li>
          <li>
            <div className="header-icon-nav">
              <img src={arrowup} alt="Valor Aplicado" />
            </div>
            <div className="header-title">
              <p className="title">Valor Aplicado</p>
              <p className="header-resume-value">{data ? valoraplicado : '---'}</p>
            </div>
          </li>
          <li>
            <div className="header-icon-nav">
              <img src={arrowdiagright} alt="Rentabilidade" />
            </div>
            <div className="header-title">
              <p className="title">Rentabilidade</p>
              <p className="header-resume-value">{data ? rentabilidade : '---'}</p>
            </div>
          </li>
          <li>
            <div className="header-icon-nav">
              <img src={dropdown} alt="" />
            </div>
            <div className="header-title">
              <p className="title">Carreira</p>
              <p className="header-resume-value">Minha Carreira</p>
            </div>
          </li>
          <li>
            <div className="header-icon-nav">
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
