import React from "react";
import { Switch, Route } from "react-router-dom";

import Details from "./Details";
import Product from "./Product";

export default (
  <Switch>
    <Route exact path="/" component={Product} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);
