import React from 'react';
import {
  Route as BaseRoute,
  RouteProps as BaseRouteProps
} from 'react-router-dom';

import { DefaultLayout } from '../pages';

interface RouteProps extends BaseRouteProps {
  component?: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <BaseRoute
      {...rest}
      render={() => {
        return <DefaultLayout>{Component && <Component />}</DefaultLayout>;
      }}
    />
  );
};

export default Route;
