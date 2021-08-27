import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import ReactGA from "react-ga";


ReactGA.initialize('UA-206068733-1');

const client = new ApolloClient({
  uri: `https://vigneshmarimuthu.herokuapp.com/graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
