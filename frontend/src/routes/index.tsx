import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bonds from '../pages/Bonds';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Bonds} />
  </Switch>
);

export default Routes;
