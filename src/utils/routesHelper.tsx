/* eslint-disable prefer-destructuring */
import React, { ReactNode } from 'react';
import { Routes } from '@routes/Routing.types';

export const setRoutes = (value: Routes[]) => {
  (window as any).routes = [];

  Object.assign((window as any).routes, value);
};

export const getRoutes = () => (window as any).routes;

export const findRouteInfo = (pathValue: string): Routes => {
  const globalRoutes = (window as any).routes;
  let label: string = '';
  let icon: ReactNode = <></>;
  let list: Routes[] = [];
  let path: string = '';
  let exact: boolean = false;
  let navigable: boolean = true;

  if (globalRoutes === undefined || pathValue === '') {
    return { label, icon, list, path, exact, navigable: false };
  }

  const buildRouteInfo = (routeObj: Routes) => {
    if (routeObj.path.includes(pathValue)) {
      label = routeObj.label;
      icon = routeObj.icon ? routeObj.icon : <></>;
      exact = routeObj.exact;
      path = routeObj.path;
      navigable = routeObj.navigable;

      if (routeObj.list) {
        list = routeObj.list;
      }
      return { label, icon, list, navigable };
    }

    return routeObj.list && routeObj.list.map((childList: Routes) => buildRouteInfo(childList));
  };

  globalRoutes.map(route => buildRouteInfo(route));

  return { label, icon, list, path, navigable, exact };
};
