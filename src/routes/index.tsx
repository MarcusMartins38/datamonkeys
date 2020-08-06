import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SendMoney from "../pages/SendMoney";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={SendMoney} exact path="/" />
    </BrowserRouter>
  );
};

export default Routes;
