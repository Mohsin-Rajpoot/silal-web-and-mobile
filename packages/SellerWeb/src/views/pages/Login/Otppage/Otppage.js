import React, { useEffect, useState } from "react";
import Wrapper from "./Otppage.styled";
import Countdown from "react-countdown";
import Linktag from "../../../components/auth/Linktag/Linktag";
import { Link } from "react-router-dom";
import CountdownTimer from "../../../components/auth/Countdowntimer/Countdowntimer";
import Otpcode from "../../../components/auth/Otpcode/Otpcode";
import Gobackbuton from "../../../components/auth/Gobackbutton/Gobackbuton";
import Snackbar from "../../../components/auth/Snackbar/Snackbar";
import { useHistory } from "react-router-dom";
import { Button } from "../../../components/Style";

function Otppage() {
  const [resendcodePopup, setResendcodePopup] = useState(false);
  const [targetedTime, setTargetedTime] = useState(5000);

  // controlled input
  const [num, setNum] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  // console.log(history.location.state);

  const use = useHistory();
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
  // otp resend
  function resendCode(e) {
    if (e.target.textContent === "Resend code") {
      setResendcodePopup(true);
      setTargetedTime(300000);
    } else {
      return false;
    }
  }
  // console.log(use);

  function signupEmail() {
    if (use.location.state === "signup") {
      use.push("/signupemail", "signupPhoneOtp");
    } else {
      use.push("/newsplash", "loginPhoneOtp");
    }
  }

  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="top-row">
        <div className="title">
          <p>OTP</p>
        </div>
        <div className="otp-code">
          <h2 className="poppins-font">OTP code</h2>
          <p className="lato-font">
            We have sent the code verification to your
          </p>
          <p className="lato-font">
            mobile number <strong>+7(934) 455 34 45</strong>
          </p>
        </div>
        <div className="form">
          <Otpcode num={num} onChange={handleChange} />
        </div>
        <div className="resend-otp">
          <button onClick={resendCode}>
            <Countdown
              date={Date.now() + targetedTime}
              renderer={CountdownTimer}
            />
          </button>
        </div>
      </div>
      <div className="bottom-row">
        {resendcodePopup && (
          <Snackbar
            text="Averification code has been sent"
            onClick={() => setResendcodePopup(false)}
          />
        )}
        <div className="form-submit">
          <Button
            onClick={signupEmail}
            // to={use.location.state === "signup" ? "/signupemail" : "/newsplash"}
          >
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Otppage;
