import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
