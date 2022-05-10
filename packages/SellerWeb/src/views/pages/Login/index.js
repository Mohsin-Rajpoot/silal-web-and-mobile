import React from "react";
import { Route } from "react-router-dom";
import Wrapper from "./Login.styled";
import Loginpage from "./Loginpage/Loginpage";
import Otppage from "./Otppage/Otppage";
import Verificationpage from "./Verificationpage/Verificationpage";
import Resetpass from "./Resetpassword/Resetpass";
import Emailverifycode from "./Emailverifycode/Emailverifycode";
import Createnewpassword from "./Createnewpassword/Createnewpassword";
import Splashpage from "./Splashpage/Splashpage";

function index() {
  return (
    <Wrapper>
      <Route index element={<Loginpage />} />
      <Route path="otp" element={<Otppage />} />
      <Route path="verification" element={<Verificationpage />} />
      <Route path="resetpassword" element={<Resetpass />} />
      <Route path="emailverifycode" element={<Emailverifycode />} />
      <Route path="createnewpassword" element={<Createnewpassword />} />
      <Route path="splash" element={<Splashpage />} />
    </Wrapper>
  );
}

export default index;
