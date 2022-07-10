import React, { useState } from "react";
import Linktag from "@SilalApp/sellerweb/src/views/components/auth/Linktag/Linktag";
import Countdowntimer from "@SilalApp/sellerweb/src/views/components/auth/Countdowntimer/Countdowntimer";
import Otpcode from "@SilalApp/sellerweb/src/views/components/auth/Otpcode/Otpcode";
import Gobackbuton from "@SilalApp/sellerweb/src/views/components/auth/Gobackbutton/Gobackbuton";
import Snackbar from "@SilalApp/sellerweb/src/views/components/auth/Snackbar/Snackbar";
// countdown time
import Countdown from "react-countdown";
import styled from "styled-components";
import { Button } from "../../../components/Style";
import { useHistory } from "react-router-dom";

function Emailverifycode() {
  const [resendcodePopup, setResendcodePopup] = useState(false);
  const [targetedTime, setTargetedTime] = useState(5000);
  const history = useHistory();
  // controlled input
  const [num, setNum] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  // controled input value change with auto focus
  function handleRoute() {
    if (history.location.state === "resetpassword") {
      history.push("/createnewpassword", "resetpasswordemailverify");
    }
  }
  function handleChange(e) {
    let v = e.target.value;
    if (v.length > 0) {
      let next = e.target.nextElementSibling;
      if (next) {
        setNum({ ...num, [e.target.id]: v });
        next.focus();
      } else {
        setNum({ ...num, [e.target.id]: v });
        e.target.blur();
      }
    }
  }
  // resend otp conde timer
  function resendCode(e) {
    if (e.target.textContent === "Resend code") {
      setResendcodePopup(true);
      setTargetedTime(5000);
    } else {
      return false;
    }
  }
  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="top-row">
        <div className="title">Reset password</div>
        <div className="otp-code ">
          <h2 className="poppins-font">Enter 6-digit code</h2>
          <p className="lato-font">
            We will email your a code to reset password
          </p>
        </div>
        <div>
          <Otpcode num={num} onChange={handleChange} />
        </div>
        <div className="resend-otp">
          <button onClick={resendCode}>
            <Countdown
              date={Date.now() + targetedTime}
              renderer={Countdowntimer}
            />
          </button>
        </div>
      </div>
      <div className="bottom-row">
        {resendcodePopup && (
          <Snackbar
            text="A verification code has been sent"
            onClick={() => setResendcodePopup(false)}
          />
        )}
        <div className="form-submit">
          <Button onClick={handleRoute}>submit</Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Emailverifycode;

const Wrapper = styled.div`
  height: 100%;
  font-family: "Lato", sans-serif;
  position: relative;
  max-width: 700px;
  width: 100%;
  margin: auto;
  .top-row {
    .title {
      padding: 50px 0;
      text-align: center;
      font-size: 17px;
      font-weight: bold;
    }
    .otp-code {
      text-align: center;
      h2 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      p {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.4;
        margin-bottom: 50px;
      }
    }
    .resend-otp {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      button {
        font-size: 15px;
        font-weight: 500;
        color: #4c6870;
        border: none;
        background: transparent;
        padding-bottom: 3px;
        border-bottom: 1px solid #000000;
        cursor: pointer;
      }
    }
  }
  .bottom-row {
    text-align: center;
    position: absolute;
    bottom: 68px;
    width: 100%;
    position: static;
    margin-top: 50px;
    // @media (max-height: 620px) {
    // }
  }
`;
