import { setRoutes } from '@utils/routesHelper';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoggedLayout from '@components/layout/LoggedLayout';
import { routes } from './routes';

export const history = createBrowserHistory();

const Home = lazy(() => import('@pages/home/Home'));
const FixedIncomeFund = lazy(() => import('@pages/fixedIncomeFund/FixedIncomeFund'));

const PrivateRouting = () => {
  useEffect(() => {
    setRoutes(routes);
  }, []);

  return (
    <BrowserRouter>
      <LoggedLayout>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/classes-ativos" component={FixedIncomeFund} />
          </Switch>
        </Suspense>
      </LoggedLayout>
    </BrowserRouter>
  );
};

export default PrivateRouting;
