import React , {useEffect}from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import {Home, Personal, Professional, Blog, Book} from "../screens";
import "../styles/styles.scss"
import ReactGA from 'react-ga';

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    if(!window.GA_INITIALIZED) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location])
}

export default function App() {
  usePageViews();
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
