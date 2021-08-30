import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../screens/Home";
import Personal from "../screens/Personal";
import Professional from "../screens/Professional";
import Blog from "../screens/Blog";
import Book from "../screens/Book";
import "../styles/styles.scss";
import ReactGA from "react-ga";
import InitializeReactGA from "../helpers/googleAnalytics";

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    InitializeReactGA(ReactGA);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}

export default function App() {
  usePageViews();
  return (
    <main>
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
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </main>
  );
}
