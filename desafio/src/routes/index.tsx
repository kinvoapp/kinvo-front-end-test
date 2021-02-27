import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { FixedIncomeFund } from '../pages';
import { Route } from './Route';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/ativos/renda-fixa" />
      </Route>

      <Route path="/ativos/renda-fixa" component={FixedIncomeFund} />
    </Switch>
  );
};
