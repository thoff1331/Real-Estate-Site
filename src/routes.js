  
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import  Listings from "./components/Listings/Listings";
import  Login from "./components/Login/Login";
import Create from "./components/Create/Create";
export default (
  <Switch>
    <Route   path="/listings" component={Listings} />
    <Route   path="/login" component={Login} />
    <Route   path="/create" component={Create} />
    <Route exact path="/" component={Home} />
   
  </Switch>
);