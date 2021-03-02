import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Ativos from '../pages/Ativos';
import Outras from '../pages/Outras';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Outras} />
      <Route exact path="/ativos" component={Ativos} />
      <Route exact path="/resumo" component={Outras} />
      <Route exact path="/produtos" component={Outras} />
      <Route exact path="/proventos" component={Outras} />
      <Route exact path="/projecao" component={Outras} />
      <Route exact path="/rentabilidade" component={Outras} />
      <Route exact path="/risco" component={Outras} />
      <Route exact path="/fgc" component={Outras} />
    </Switch>
  );
}
