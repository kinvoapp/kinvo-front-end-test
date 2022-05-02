import React from "react";
import "./Menu.scss";

import MenuItem from "./MenuItem/MenuItem";

import select1 from "./img/select1.svg";
import select2 from "./img/select2.svg";
import select3 from "./img/select3.svg";
import select4 from "./img/select4.svg";
import select5 from "./img/select5.svg";
import select6 from "./img/select6.svg";
import select7 from "./img/select7.svg";
import select8 from "./img/select8.svg";
const Menu = () => {
  const dataItems = {
    data: [
      {
        value: 1,
        title: "Resumo Da Carteira",
        img: select1,
        children: {},
      },
      {
        value: 2,
        title: "Meus Produtos",
        img: select2,
        children: {},
      },
      {
        value: 3,
        title: "Meus Proventos",
        img: select3,
        children: {},
      },
      {
        value: 4,
        title: "Classe de Ativos",
        img: select4,
        children: [
          {
            value: 1,
            title: "Ação",
          },
          {
            value: 2,
            title: "Fundo",
          },
          {
            value: 3,
            title: "Fundo Imobiliário",
          },
          {
            value: 4,
            title: "Fundo Renda Fixa",
          },
        ],
      },
      {
        value: 5,
        title: "Rentabilidade Real",
        img: select5,
        children: {},
      },
      {
        value: 6,
        title: "Projeção de Carreira",
        img: select6,
        children: {},
      },
      {
        value: 7,
        title: "Risco X Retorno",
        img: select7,
        children: {},
      },
      {
        value: 8,
        title: "Cobertura do FGC",
        img: select8,
        children: {},
      },
    ],
  };

  return (

    <aside>
      <ul>
        {dataItems.data.map((item) => (
          <MenuItem key={item.value} title={item.title} img={item.img} />
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
