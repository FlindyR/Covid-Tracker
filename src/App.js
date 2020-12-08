import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Global, Indonesia, Provinsi} from "./Pages";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Global">Global</Link>
            </li>
            <li>
              <Link to="/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/Provinsi">Per Provinsi</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/Global">
          <Global />
        </Route>
        <Route path="/Indonesia">
          <Indonesia />
        </Route>
        <Route path="/Provinsi">
          <Provinsi />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
