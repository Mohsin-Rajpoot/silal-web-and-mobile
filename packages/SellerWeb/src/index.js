import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
// import AuthLayout from "./Auth";
import Otppage from "./views/pages/Login/Otppage/Otppage";
import SellerInfo from "./views/pages/Login/SellerInfo/SellerInfo";
import Verificationpage from "./views/pages/Login/Verificationpage/Verificationpage";
import Loginpage from "./views/pages/Login/Loginpage/Loginpage";
import Phone from "./views/pages/SignUp/Phone";
import Splash1 from "./views/pages/Login/Splash1/Splash1";
import Splash2 from "./views/pages/Login/Splash2/Splash2";
import Createnewpassword from "./views/pages/Login/Createnewpassword/Createnewpassword";
import Emailverifycode from "./views/pages/Login/Emailverifycode/Emailverifycode";
import Splashpage from "./views/pages/Login/Splashpage/Splashpage";
import Resetpass from "./views/pages/Login/Resetpassword/Resetpass";
import NewSplash from "./views/pages/Login/newSplash/NewSplash";
import ChooseStore from "./views/pages/Login/ChooseStores/ChooseStore";
import Layout from "./routes/Layout";
// import Statistics from "./views/pages/home/Statistics";
import OrdersLayout from "./views/pages/order/components/OrdersLayout";
import ClientContainer from "./ClientContainer";
import ProductContainer from "./ProductContainer";
import OffersContainer from "./views/OffersContainer";
// import Shipping from "./views/pages/listing/Shipping";
import Documents from "./views/pages/Documents";
import Profile from "./views/pages/profile/Profile";
import ContactUs from "./views/pages/contact-us/ContactUs";
import AboutUs from "./views/pages/AboutUs";
import Settings from "./views/pages/settings/Settings";
import PaymentHistory from "./views/pages/profile/PaymentHistory";
import OpeningHours from "./views/pages/profile/OpeningHours";
import TransactionLedger from "./views/pages/profile/TransactionLedger";
import Reviews from "./views/pages/home/Reviews";
import OutOfStock from "./views/pages/home/OutOfStock";
import QuestionaireSplash from "./views/pages/Questionaire/QuestionaireSplash";
import Form from "./views/pages/Questionaire/Form/Form";
import SubmitReq from "./views/pages/Questionaire/SubmitReq";
import CreateNewItem from "./views/pages/listing/CreateItem";
import MFA from "./views/pages/MFA/MFA";
import SignUpPassword from "./views/pages/SignUp/SignUpPassword";
import Email from "./views/pages/SignUp/Email";
import { Provider } from "react-redux";
// import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "@SilalApp/common/Store/SellerStore/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Switch>
        <Route path="/otp" exact={true} component={Otppage} />
        <Route path="/splash1" exact={true} component={Splash1} />
        <Route path="/verification" exact={true} component={Verificationpage} />
        <Route path="/newsplash" exact={true} component={NewSplash} />
        <Route path="/choosestore" exact={true} component={ChooseStore} />
        <Route path="/layout" exact={true} component={Layout} />
        <Route path="/login" exact={true} component={Loginpage} />
        <Route path="/signup" exact={true} component={Phone} />
        <Route path="/signupemail" exact={true} component={Email} />

        <Route path="/mfa" exact={true} component={MFA} />
        <Route path="/signuppassword" exact={true} component={SignUpPassword} />
        <Route path="/sellerinfo" exact={true} component={SellerInfo} />

        <Route
          path="/createnewpassword"
          exact={true}
          component={Createnewpassword}
        />

        <Route
          path="/createnewpassword"
          exact={true}
          component={Createnewpassword}
        />
        <Route
          path="/emailverifycode"
          exact={true}
          component={Emailverifycode}
        />
        <Route path="/splash2" exact={true} component={Splash2} />
        <Route path="/create-new-item" component={CreateNewItem} />

        <Route path="/" exact={true} component={Splashpage} />

        <Route path="/resetpassword" exact={true} component={Resetpass} />
        <Route
          path="/questionaire-splash"
          exact={true}
          component={QuestionaireSplash}
        />

        {/* <Route path="/statistics" exact={true} component={Statistics} /> */}
        <Route path="/client" component={ClientContainer} />
        <Route path="/orders" component={OrdersLayout} />
        <Route path="/product" component={ProductContainer} />
        <Route path="/offers" component={OffersContainer} />
        <Route path="/documents" component={Documents} />
        <Route path="/profile/profile" component={Profile} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/settings" component={Settings} />
        <Route path="/profile/payment-history" component={PaymentHistory} />
        <Route path="/profile/opening-hours" component={OpeningHours} />
        <Route path="/questionaire-form" component={Form} />
        <Route path="/submit-questionaire-form" component={SubmitReq} />

        <Route
          path="/profile/transaction-ledger"
          component={TransactionLedger}
        />
        <Route path="/out-of-stock" component={OutOfStock} />
        <Route path="/reviews" component={Reviews} />

        <Route path="/statistics" component={App} />
      </Switch>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
