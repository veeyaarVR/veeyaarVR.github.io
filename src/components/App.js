import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../screens/Home";
import Personal from "../screens/Personal";
import Professional from "../screens/Professional";
import Blog from "../screens/Blog";
import Book from "../screens/Book";
import Scribbles from "../screens/scribbleSection/Scribbles";
import ScribbleContent from "../screens/scribbleSection/ScribbleContent";
import "../styles/styles.scss";
import ReactGA from "react-ga";
import InitializeReactGA from "../helpers/googleAnalytics";
import Wishlist from "../screens/Wishlist";
import NotFound from "../screens/NotFound";
import { seo } from "../helpers/seo";

function usePageViews() {
  let location = useLocation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    seo({
      title: title,
      metaDescription: description,
    });
  }, [title, description]);

  useEffect(() => {
    InitializeReactGA(ReactGA);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    // set title based on page
    switch (location.pathname) {
      case "":
        setDescription("Please visit vigneshmarimuthu.com");
        setTitle("Page Not found");
        return
      case "/":
        setDescription("personal Portfolio website of an Average Engineer");
        return setTitle("");
      case "/personal":
        setDescription("Personal details and stuff about Vignesh Marimuthu");
        return setTitle("Personal | Vignesh Marimuthu");
      case "/professional":
        setDescription("Professional details and portfolio about Vignesh Marimuthu");
        return setTitle("Professional | Vignesh Marimuthu");
      case "/personal/blog":
        setDescription("Collection of my book notes");
        return setTitle("Blog | Vignesh Marimuthu");
      case "/personal/scribbles":
        setDescription("Some random shit that I scribbled");
        return setTitle("Scribbles | Vignesh Marimuthu");
      case "/personal/wishlist":
        setDescription("Thinking about gifting me?");
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
          <Route exact path="/personal/scribbles">
            <Scribbles />
          </Route>
          <Route exact path="/personal/blog/:id">
            <Book />
          </Route>
          <Route exact path="/personal/scribbles/:id">
            <ScribbleContent />
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
