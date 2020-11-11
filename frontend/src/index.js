import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import "./bootstrap-override.scss";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import "alertifyjs/build/css/alertify.min.css";
import "react-multilevel-dropdown/index";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
