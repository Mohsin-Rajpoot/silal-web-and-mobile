import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./Login.styled";
import Loginpage from "./Loginpage/Loginpage";
import Otppage from "./Otppage/Otppage";
import Verificationpage from "./Verificationpage/Verificationpage";
import Resetpass from "./Resetpassword/Resetpass";
import Emailverifycode from "./Emailverifycode/Emailverifycode";
import Createnewpassword from "./Createnewpassword/Createnewpassword";
import Splashpage from "./Splashpage/Splashpage";
import Layout from "../../../routes/Layout";

function index() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route index component={Loginpage} />
          <Route path="/otp" component={Otppage} />
          <Route path="/verification" component={Verificationpage} />
          <Route path="/resetpassword" component={Resetpass} />
          <Route path="/emailverifycode" component={Emailverifycode} />
          <Route path="/createnewpassword" component={Createnewpassword} />
          <Route path="/splash" component={Splashpage} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default index;
