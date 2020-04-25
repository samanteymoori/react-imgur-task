import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./modules/index";
import "./assets/main.scss";
import Gallery from "./components/gallery/gallery";
import Header from "./components/common/header";

import store from "./modules/store/index";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Gallery />
  </Provider>,
  document.getElementById("root")
);
