import React from "react";
import circleIcon from "../../assets/iconCircle.svg";
import pieIcon from "../../assets/iconPie.svg";
import moneyIcon from "../../assets/iconMoney.svg";
import dummbellIcon from "../../assets/iconDummbell.svg";
import diamondIcon from "../../assets/iconDiamond.svg";
import tvIcon from "../../assets/iconTv.svg";
import targetIcon from "../../assets/icontarget.svg";
import lockerIcon from "../../assets/iconLocker.svg";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Resumo da Carteira",
    icon: circleIcon,
  },
  {
    title: "Meus Produtos",
    icon: pieIcon,
  },
  {
    title: "Meus Proventos",
    icon: moneyIcon,
  },
  {
    title: "Classe de Ativos",
    icon: dummbellIcon,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#a0a8ab" }} />,
    iconOpened: <RiIcons.RiArrowRightSFill style={{ color: "#a0a8ab" }} />,
    subNav: [
      {
        title: "Ação",
        icon: <BsIcons.BsDot style={{ color: `#5D41AC` }} />,
      },
      {
        title: "Fundo",
        icon: <BsIcons.BsDot style={{ color: `#5D41AC` }} />,
      },
      {
        title: "Fundo Imobiliário",
        icon: <BsIcons.BsDot style={{ color: `#5D41AC` }} />,
      },
      {
        title: "Fundo Renda Fixa",
        icon: <BsIcons.BsDot style={{ color: `#5D41AC` }} />,
      },
    ],
  },
  {
    title: "Rentabilidade Real",
    icon: diamondIcon,
  },
  {
    title: "Projeção da Carteira",
    icon: tvIcon,
  },
  {
    title: "Risco x Retorno",
    icon: targetIcon,
  },
  {
    title: "Cobertura do FGC",
    icon: lockerIcon,
  },
];
