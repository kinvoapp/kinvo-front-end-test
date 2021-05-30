import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { Home } from "./pages/Home";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
