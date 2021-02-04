import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Personal from "../screens/Personal";
import Professional from "../screens/Professional";

export default function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/personal">
              <Personal />
            </Route>
            <Route exact path="/professional">
              <Professional />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}
