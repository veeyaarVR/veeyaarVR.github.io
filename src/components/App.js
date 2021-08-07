import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Personal from "../screens/Personal";
import Professional from "../screens/Professional";
import Blog from "../screens/Blog";
import "../styles/styles.scss"

export default function App() {
  return (
    <Router>
        <div className="home">
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
            <Route exact path="/personal/blog">
              <Blog />
            </Route>
            <Route exact path="/">

            </Route>
          </Switch>
        </div>
    </Router>
  );
}
