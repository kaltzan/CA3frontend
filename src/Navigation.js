import React from "react";
import { HashRouter as Router, Route, NavLink as Link, Switch } from "react-router-dom";
import App from "./App.js";
import Home from "./Home.js";
import About from "./About.js";
import Topics from "./Topics.js";


/*const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">login</NavLink>

        </div>
    );
}*/

const Navigation = () => {
    return (
      <Router>

        <div>
          <ul className="header">
            <li>
              <Link exact to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/swapi">Swapi</Link>
            </li>
          </ul>
          <hr />
          </div>
      </Router>
    );
  }

export default Navigation;

