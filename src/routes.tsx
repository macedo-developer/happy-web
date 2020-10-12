import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
      {/* <Route path="/app" component={}/> */}
    </BrowserRouter>
  );
}

export default Routes;
