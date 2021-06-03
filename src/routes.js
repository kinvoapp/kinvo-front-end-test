import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
