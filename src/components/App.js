import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../screens/Home";
import Personal from "../screens/Personal";
import Professional from "../screens/Professional";
import Blog from "../screens/Blog";
import Book from "../screens/Book";
import "../styles/styles.scss";
import ReactGA from "react-ga";
import InitializeReactGA from "../helpers/googleAnalytics";
import Wishlist from "../screens/Wishlist";
import NotFound from "../screens/NotFound";
import { seo } from "../helpers/seo";

function usePageViews() {
  let location = useLocation();

  const [title, setTitle] = useState("");
  useEffect(() => {
    seo({
      title: title,
      metaDescription: "",
    });
  }, [title]);

  useEffect(() => {
    InitializeReactGA(ReactGA);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    // set title based on page
    switch (location.pathname) {
      case "":
        return setTitle("Page Not found");
      case "/":
        return setTitle("");
      case "/personal":
        return setTitle("Personal | Vignesh Marimuthu");
      case "/professional":
        return setTitle("Professional | Vignesh Marimuthu");
      case "/personal/blog":
        return setTitle("Blog | Vignesh Marimuthu");
      case "/personal/wishlist":
        return setTitle("Wishlist | Vignesh Marimuthu");
      default:
        return setTitle("");
    }
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
          <Route exact path="/personal/wishlist">
            <Wishlist />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
  );
}
