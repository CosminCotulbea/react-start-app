import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import {AuthWrapper} from "./components/RouteWrappers/AuthWrapper";
import {GuestWrapper} from "./components/RouteWrappers/GuestWrapper";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AuthWrapper(Home)}/>
                    <Route exact path="/login" component={GuestWrapper(Login)}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
