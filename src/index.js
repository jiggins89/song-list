// Library imports
import React from "react";
import ReactDOM from "react-dom";
// Reducer imports
import { reducers } from "./reducers";
// Component imports
import App from "./components/App";
import { Provider } from "react-redux";
// Function imports
import { createStore } from "redux";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
