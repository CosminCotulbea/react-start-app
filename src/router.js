import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import { AuthWrapper } from "./components/RouteWrappers/AuthWrapper";
import { GuardWrapper } from "./components/RouteWrappers/GuardWrapper";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AuthWrapper(Home)} />
          <Route exact path="/login" component={GuardWrapper(Login)} />
        </Switch>
      </BrowserRouter>
    );
  }
}
