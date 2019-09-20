  
import React from "react";
import { Switch, Route } from "react-router-dom";
import HOME from "./components/HOME/HOME";
import  LISTINGS from "./components/LISTINGS/LISTINGS";

export default (
  <Switch>
    <Route path="/HOME" component={HOME} />
    <Route path="/LISTINGS" component={LISTINGS} />
   
  </Switch>
);