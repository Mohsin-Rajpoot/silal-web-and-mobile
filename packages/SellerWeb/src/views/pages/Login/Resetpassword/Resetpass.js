import React, { useState } from "react";
import Wrapper from "./Resetpass.styled";
import Linktag from "@SilalApp/sellerweb/src/views/components/auth/Linktag/Linktag";
import FormControl from "@SilalApp/sellerweb/src/views/components/auth/FormControl/FormControl";
import Gobackbuton from "@SilalApp/sellerweb/src/views/components/auth/Gobackbutton/Gobackbuton";
import { Button } from "../../../components/Style";
import { useHistory } from "react-router-dom";

function Resetpass() {
  const [formValue, setFormValue] = useState("");
  const history = useHistory();
  function handleRoute() {
    history.push("/emailverifycode", "resetpassword");
  }

  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="top-row">
        <div className="title">Reset password</div>
        <div>
          <h2>Enter your email</h2>
          <p>We will email your a code to reset password</p>
        </div>
        <div className="form">
          <FormControl
            htmlFor="email"
            labelValue="Email"
            input={true}
            type="email"
            placeholder="email.example@gmail.com"
            inputValue={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </div>
      </div>
      <div className="bottom-row">
        <div className="form-submit">
          <Button onClick={handleRoute}>Send Code</Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Resetpass;
