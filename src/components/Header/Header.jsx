import "./Header.css";
import React from "react";

//? SVG's
import header_icon from "../../assets/header/header_icon.svg";
import inclined_arrow from "../../assets/header/inclined_arrow.svg";
import menu_arrow from "../../assets/header/menu_arrow.svg";
import up_arrow from "../../assets/header/up_arrow.svg";
import menu from "../../assets/header/menu.svg";
import ring from "../../assets/header/ring.svg";

//? Componentes
import HeaderInfo from "../Header_Info/Header_Info";

const Header = () => {
  return (
    <header>
      <div className='icon'>
        <img src={header_icon} alt='Kinvo Logo' />
      </div>

      <div className='values'>
        <HeaderInfo
          svgIcon={ring}
          cardTitle='SALDO BRUTO'
          cardValue='1.200.000,02'
        />

        <HeaderInfo
          svgIcon={up_arrow}
          cardTitle='VALOR APLICADO'
          cardValue='521.230,02'
        />

        <HeaderInfo
          svgIcon={inclined_arrow}
          cardTitle='RENTABILIDADE'
          cardValue='2,34%'
        />

        <HeaderInfo
          svgIcon={menu_arrow}
          cardTitle='CARTEIRA'
          cardValue='Minha Carteira'
        />

        <div className='menu'>
          <img src={menu} alt='Menu Icon' />
        </div>
      </div>
    </header>
  );
};

export default Header;
