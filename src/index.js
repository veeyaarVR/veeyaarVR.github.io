import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloClient, InMemoryCache, ApolloProvider , HttpLink} from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";


const httpLink = new HttpLink({
  uri:  `${process.env.REACT_APP_BACKEND_URL}`, 
  fetchOptions: {
    mode: 'cors',
  },
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
