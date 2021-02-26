import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/ativos/renda-fixa" />
      </Route>

      <Route path="/ativos/renda-fixa" component={Home} />
    </Switch>
  );
};
