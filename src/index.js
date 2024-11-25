import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Define your GraphQL endpoint
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql", // GitHub GraphQL API endpoint
});

// Authorization Link with an Option for Hardcoded Token
const authLink = setContext((_, { headers }) => {
  // Uncomment one of the following options for the token:

  // 1. Use an environment variable for security (Recommended for production)
  // const token = process.env.REACT_APP_GRAPHQL_API;

  // 2. Use a hardcoded token (for quick testing, NOT recommended for production)
  const token = process.env.REACT_APP_GITHUB_TOKEN; // Replace with your token

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Apollo Client setup
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), // Caching strategy
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
