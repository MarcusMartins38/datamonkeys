import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} exact path="/" />
    </BrowserRouter>
  );
};

export default Routes;
