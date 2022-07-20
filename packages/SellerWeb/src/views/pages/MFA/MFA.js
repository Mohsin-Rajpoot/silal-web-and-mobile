import React, { useState } from "react";
import Linktag from "@SilalApp/sellerweb/src/views/components/auth/Linktag/Linktag";
import Gobackbuton from "@SilalApp/sellerweb/src/views/components/auth/Gobackbutton/Gobackbuton";
import styled from "styled-components";
import { Radio } from "../../components/Style";

function Emailverifycode() {
  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="top-row">
        <div className="title">Multi-Factor Authentication</div>
        <div className="otp-code ">
          <h2 className="poppins-font">Verify Your Identity</h2>
          <p className="lato-font">
            To keep your account safe you have to authenticate using another
            method, choose an authentication method below
          </p>
        </div>
      </div>
      <div className="box1 d-flex">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </div>
        <div>
          <h6>Text Message (SMS) To +97205*******23</h6>
          <p>
            We will send a 5 letter code to your mobile phone as a text message
            (SMS)
          </p>
        </div>
      </div>
      <div className="box2 d-flex">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </div>
        <div>
          <h6>Verification Email To rand**********@silal.app</h6>
          <p>We will send a 6 letter code to your email address</p>
        </div>
      </div>

      <div className="form-submit">
        <Linktag
          text="Submit"
          primary={true}
          textcolor={true}
          blockitem={true}
          to="/resetpassword"
        />
      </div>
    </Wrapper>
  );
}

export default Emailverifycode;

const Wrapper = styled.div`
  height: 100%;
  font-family: "Lato";
  font-style: normal;
  position: relative;
  max-width: 700px;
  width: 100%;
  margin: auto;
  .form-check-input:checked {
    background-color: #05ae4b;
  }

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
  .box1:hover {
    background: #f1f7f5;
  }
  .box2:hover {
    background: #f1f7f5;
  }
  .box1,
  .box2 {
    border: 1px solid #92979d;
    border-radius: 10px;
    padding-top: 23px;
    padding-bottom: 0px;
    margin: 10px;
    h6 {
      font-weight: 700;
      font-size: 18px;
      color: #002733;
    }
    p {
      font-weight: 400;
      font-size: 13px;
      color: #555559;
    }
  }
  .form-check {
    padding-left: 38px;
    padding-right: 12px;
  }
  .form-submit {
    margin-top: 120px;
  }
`;
