import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Personal from "../screens/Personal";
import Professional from "../screens/Professional";
import Blog from "../screens/Blog";
import Book from "../screens/Book";
import "../styles/styles.scss"
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
            <Route exact path="/personal/blog/:id">
              <Book />
            </Route>
            <Route exact path="/">
            </Route>
          </Switch>
        </div>
    </Router>
  );
}
