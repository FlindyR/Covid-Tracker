import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Global, Indonesia, Provinsi} from "./Pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Global">
          <Global />
        </Route>
        <Route path="/Indonesia">
          <Indonesia />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
