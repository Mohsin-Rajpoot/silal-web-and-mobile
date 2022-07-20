import React, { useEffect, useState } from "react";
import Wrapper from "./Otppage.styled";
import Countdown from "react-countdown";
// import Linktag from "../../../components/auth/Linktag/Linktag";
// import { Link } from "react-router-dom";
import CountdownTimer from "../../../components/auth/Countdowntimer/Countdowntimer";
import Otpcode from "../../../components/auth/Otpcode/Otpcode";
import Gobackbuton from "../../../components/auth/Gobackbutton/Gobackbuton";
import Snackbar from "../../../components/auth/Snackbar/Snackbar";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "../../../components/Style";
import * as userAction from "@SilalApp/common/Store/SellerReducers/User/actions";
import { useDispatch } from "react-redux";

function Otppage() {
  const location = useLocation();

  const [resendcodePopup, setResendcodePopup] = useState(false);
  const [targetedTime, setTargetedTime] = useState(30000);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state) {
      setPhoneNumber(location.state.phoneNo);
    }
  }, [location.state]);

  // controlled input
  const [num, setNum] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });

  const combineOTP = () => {
    let combinestr = "";
    for (let i in num) {
      if (num.hasOwnProperty(i)) {
        combinestr += num[i];
      }
    }
    return combinestr;
  };

  const history = useHistory();
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
      setTargetedTime(60000);
    } else {
      return false;
    }
  }
  // console.log(use);

  const verifyOtp = () => {
    const otp = combineOTP();
    if (!otp) {
      return setError("Please enter Otp code before proceding.");
    }

    if (history.location.state.previousPage === "signup") {
      let payload = {
        data: {
          otp,
          phone: "+92" + phoneNumber,
        },
        cb: (res) => {
          if (res.http_status_code === 200) {
            setTimeout(() => {
              setError("");
            }, 1000);
          } else if (res.http_status_code === 401) {
            setError("Login failed or OTP expired.");
          } else if (res.http_status_code === 400) {
            setError("OTP and phone number is required.");
          }
        },
      };
      dispatch(userAction.verify_phone_after_signup(payload));
      history.push("/signupemail", "signupPhoneOtp");
    } else if (history.location.state.previousPage === "login") {
      console.log(history.location.state);
      let data = {
        otp: otp,
        phone: phoneNumber,
      };
      let payload = {
        data,
        cb: (res) => {
          if (res.http_status_code === 200) {
            alert(1);
            setTimeout(() => {
              setError("");
            }, 1000);
            history.push("/newsplash", "loginPhoneOtp");
          } else if (res.http_status_code === 401) {
            alert(2);
            return setError("Login failed or OTP expired.");
          }
        },
      };
      console.log("login-payload: ", payload);
      dispatch(userAction.userPhoneVerification_LOGIN_Saga(payload));
    }
  };

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
            mobile number <strong>{phoneNumber}</strong>
          </p>
        </div>
        <div className="form">
          <Otpcode num={num} onChange={handleChange} />
        </div>
        <div className="text-center">
          {error !== "" ? (
            <span className="text-danger text-center">{error}</span>
          ) : null}
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
            onClick={verifyOtp}
            style={{ width: "100%" }}
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
