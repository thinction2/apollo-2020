import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import client from "./apollo";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyled } from "./GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyled />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>,
  document.getElementById("root")
);
