import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { store } from "./store";
import { Provider } from "react-redux";
import { ErrorBoundary } from "./components/ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
