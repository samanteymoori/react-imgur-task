import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./main.scss";
import "./modules/index";
import Gallery from "./views/gallery";
import * as serviceWorker from "./serviceWorker";
import store from "./modules/store/index";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
