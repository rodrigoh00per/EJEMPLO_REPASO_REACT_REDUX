import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { createLogger } from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducedeBusqueda, reducedeRequestAPI } from "./reducers";
import ThunkMiddleware from "redux-thunk";
const logger = createLogger();

const rootReducers = combineReducers({ reducedeBusqueda, reducedeRequestAPI });

const store = createStore(
  rootReducers,
  applyMiddleware(ThunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
