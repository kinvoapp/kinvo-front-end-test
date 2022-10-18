import React from 'react';

// Icons
import { AiOutlineSketch, AiOutlinePieChart } from 'react-icons/ai';
import {
  HiOutlineChevronRight,
  HiOutlinePresentationChartLine,
  HiOutlineSupport,
  HiLockClosed,
  HiOutlinePuzzle,
  HiGlobeAlt,
} from 'react-icons/hi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Resumo da Cartera',
    url: 'resumo_da_carteira',
    icon: <HiGlobeAlt size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
  {
    title: 'Meus Produtos',
    url: 'meus_produtos',
    icon: <AiOutlinePieChart size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
  {
    title: 'Meus Proventos',
    url: 'meus_proventos',
    icon: <RiMoneyDollarCircleLine size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
  {
    title: 'Classe de Ativos',
    url: 'classe_ativos',
    icon: <HiOutlinePuzzle size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [
      {
        title: 'Ação',
        url: 'classe_ativos/acao',
        arrowIcon: <HiOutlineChevronRight />,
      },
      {
        title: 'Fundo',
        url: 'classe_ativos/fundo',
        arrowIcon: <HiOutlineChevronRight />,
      },
      {
        title: 'Fundo Imobiliário',
        url: 'classe_ativos/fundo_imobiliario',
        arrowIcon: <HiOutlineChevronRight />,
      },
      {
        title: 'Fundo Renda Fixa',
        url: 'classe_ativos/fundo_renda_fixa',
        arrowIcon: <HiOutlineChevronRight />,
      },
    ],
  },
  {
    title: 'Rentabilidade Real',
    url: 'rentabilidade_real',
    icon: <AiOutlineSketch size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
  {
    title: 'Projeção da Carteira',
    url: 'projecao_da_carteira',
    icon: <HiOutlinePresentationChartLine size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
  {
    title: 'Risco x Retorno',
    url: 'risco_retorno',
    icon: <HiOutlineSupport size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
  {
    title: 'Cobertura do FGC',
    url: 'cobertura_do_fgc',
    icon: <HiLockClosed size={23} />,
    arrowIcon: <HiOutlineChevronRight />,
    subNav: [],
  },
];
