import React from "react";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as TbIcons from "react-icons/tb";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Resumo da Carteira",
    icon: <SiIcons.SiCircle />,
  },
  {
    title: "Meus Produtos",
    icon: <AiIcons.AiOutlinePieChart />,
  },
  {
    title: "Meus Proventos",
    icon: <AiIcons.AiOutlineDollar />,
  },
  {
    title: "Classe de Ativos",
    icon: <BiIcons.BiDumbbell />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#a0a8ab" }} />,
    iconOpened: <RiIcons.RiArrowRightSFill style={{ color: "#a0a8ab" }} />,
    activeClass: "#5D41AC",
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
    icon: <GiIcons.GiCutDiamond />,
  },
  {
    title: "Projeção da Carteira",
    icon: <GiIcons.GiChart />,
  },
  {
    title: "Risco x Retorno",
    icon: <TbIcons.TbTarget />,
  },
  {
    title: "Cobertura do FGC",
    icon: <FiIcons.FiLock />,
  },
];
