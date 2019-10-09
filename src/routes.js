import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Listings from "./components/Listings/Listings";
import Login from "./components/Login/Login";
import Create from "./components/Create/Create";
import Listing from "./components/Listing/Listing";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route path="/listings" component={Listings} />
    <Route path="/login" component={Login} />
    <Route path="/create" component={Create} />
    <Route path="/listing/:id" component={Listing} />
    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
  </Switch>
);
