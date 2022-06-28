import React, { useState } from "react";
import Wrapper from "./Emailverifycode.styled";
import Linktag from "@SilalApp/sellerweb/src/views/components/auth/Linktag/Linktag";
import Countdowntimer from "@SilalApp/sellerweb/src/views/components/auth/Countdowntimer/Countdowntimer";
import Otpcode from "@SilalApp/sellerweb/src/views/components/auth/Otpcode/Otpcode";
import Gobackbuton from "@SilalApp/sellerweb/src/views/components/auth/Gobackbutton/Gobackbuton";
import Snackbar from "@SilalApp/sellerweb/src/views/components/auth/Snackbar/Snackbar";
// countdown timer
import Countdown from "react-countdown";

function Emailverifycode() {
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
          <Linktag
            text="Submit"
            primary={true}
            textcolor={true}
            blockitem={true}
            to="/verification"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Emailverifycode;
