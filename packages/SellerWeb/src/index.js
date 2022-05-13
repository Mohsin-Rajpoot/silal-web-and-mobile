import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientContainer from "./ClientContainer";
import ProductContainer from "./ProductContainer";
import OffersContainer from "./views/OffersContainer";
import "./index.css";
import AuthLayout from "./Auth";
import Otppage from "./views/pages/Login/Otppage/Otppage";
import Verificationpage from "./views/pages/Login/Verificationpage/Verificationpage";
import Loginpage from "./views/pages/Login/Loginpage/Loginpage";
import OrdersLayout from "./views/pages/order/components/OrdersLayout";
import Createnewpassword from "./views/pages/Login/Createnewpassword/Createnewpassword";
import Emailverifycode from "./views/pages/Login/Emailverifycode/Emailverifycode";
import Splashpage from "./views/pages/Login/Splashpage/Splashpage";
import Resetpass from "./views/pages/Login/Resetpassword/Resetpass";
import Shipping from "./views/pages/listing/Shipping";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/client" component={ClientContainer} />
        <Route path="/orders" component={OrdersLayout} />
        <Route path="/product" component={ProductContainer} />
        <Route path="/offers" component={OffersContainer} />
        <Route path="/otp" exact={true} component={Otppage} />
        <Route path="/verification" exact={true} component={Verificationpage} />
        <Route path="/login" exact={true} component={Loginpage} />
        <Route path="/createnewpassword" exact={true} component={Createnewpassword} />
        <Route path="/emailverifycode" exact={true} component={Emailverifycode} />
        <Route path="/splash" exact={true} component={Splashpage} />
        <Route path="/resetpassword" exact={true} component={Resetpass} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
