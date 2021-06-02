import { SvgIcon } from '@components/svgIcon/SvgIcon';
import React from 'react';
import { Routes } from './Routing.types';

export const routes: Routes[] = [
  {
    label: 'Resumo da Carterira',
    icon: '',
    path: '/',
    exact: true,
    navigable: false,
  },
  {
    label: 'Classes de Ativos',
    icon: '',
    path: '/classes-ativos',
    exact: true,
    navigable: false,
    list: [
      {
        path: '/renda-fixa',
        icon: '',
        label: 'Renda Fixa',
        exact: true,
        navigable: true,
      },
    ],
  },
];
