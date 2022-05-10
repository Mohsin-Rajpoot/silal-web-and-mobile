import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientContainer from "./ClientContainer";
import ProductContainer from "./ProductContainer";
import OffersContainer from "./views/OffersContainer";
import "./index.css";
import Auth from "./views/pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Auth} />
        <Route path="/Dashboard" component={App} />
        <Route path="/client" component={ClientContainer} />
        <Route path="/product" component={ProductContainer} />
        <Route path="/offers" component={OffersContainer} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
