import React, { useState } from "react";
import Linktag from "@SilalApp/sellerweb/src/views/components/auth/Linktag/Linktag";
import Wrapper from "./Verificationpage.styled";
import CountdownTimer from "@SilalApp/sellerweb/src/views/components/auth/Countdowntimer/Countdowntimer";
import Countdown from "react-countdown";
import Otpcode from "@SilalApp/sellerweb/src/views/components/auth/Otpcode/Otpcode";
import Gobackbuton from "@SilalApp/sellerweb/src/views/components/auth/Gobackbutton/Gobackbuton";
import Snackbar from "@SilalApp/sellerweb/src/views/components/auth/Snackbar/Snackbar";
import { useHistory } from "react-router-dom";
import { Button } from "../../../components/Style";
function Verificationpage() {
  const history = useHistory();
  const [resendcodePopup, setResendcodePopup] = useState(false);
  const [targetedTime, setTargetedTime] = useState(5000);
  const [num, setNum] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  console.log(history.location.state);
  // controled input value change with auto focus
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

  function handleRoute() {
    if (history.location.state === "signUpEmail") {
      history.push("/createnewpassword", "signUpEmailVerification");
    } else {
      history.push("/newsplash", "LoginEmailVerification");
    }
  }
  // otp resend
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
        <div className="title">Verification</div>
        <div className="otp-code">
          <h2>Verification code</h2>
          <p>We have sent the code verification to your </p>
          <p>
            email <strong>willie.jennings@example.com</strong>
          </p>
        </div>
        <form>
          <Otpcode num={num} onChange={handleChange} />
        </form>
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
            text="A verification code has been sent"
            onClick={() => setResendcodePopup(false)}
          />
        )}
        <div className="form-submit">
          <Button onClick={handleRoute} width={"100%"}>
            Verify{" "}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Verificationpage;
