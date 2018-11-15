import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.js";
import App from "./App.js";
import Home from "./Home.js";
import About from "./About.js";
import Topics from "./Topics.js";

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/topics" component={Topics} />
                            <Route path="/login" component={App} />
                        </Switch>
                    </div>
            </HashRouter>
            );

    }
}