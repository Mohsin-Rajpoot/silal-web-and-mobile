import React, { useState } from "react";
import styled from "styled-components";
import Gobackbuton from "../../../components/auth/Gobackbutton/Gobackbuton";
import warningSvg from "../../../../assets/images/svg/warning.svg";

function FormHeader({ currentState }) {
  const [reminder, setReminder] = useState(true);

  return (
    <HeaderStyle>
      <div className="d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="go-back-button">
            <Gobackbuton primaryIcon={true} />
          </div>
          <div className="d-flex justify-content-center">
            {currentState === 3 && reminder === true ? (
              <div className="d-flex reminder">
                <img src={warningSvg} alt={"..."} />
                <p>All fields must be filled </p>
                <a className="link" onClick={() => setReminder(false)}>
                  Ok
                </a>
              </div>
            ) : (
              <h6>Step {currentState}/3</h6>
            )}
          </div>
          <div className=" d-flex">
            <div
              className={
                currentState >= 1 ? "col-lg-4 line1 active" : "col-lg-4 line1"
              }
            >
              <h5>Basic information</h5>
            </div>
            <div
              className={
                currentState >= 2 ? "col-lg-4 line2 active" : "col-lg-4 line1"
              }
            >
              <h5>Location information</h5>
            </div>
            <div
              className={
                currentState >= 3 ? "col-lg-4 line3 active" : "col-lg-4 line1"
              }
            >
              <h5>More details </h5>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}

export default FormHeader;

const HeaderStyle = styled.div`
  .line1,
  .line2,
  .line3 {
    // height: 10px;
    // border-radius: 10px;
    // background: #05ae4b;
    // margin: 0px 5px;
    margin-right: 10px;
    border-bottom: 10px solid #f5f5f5;
    border-radius: 10px;
    h5 {
      color: #ccd4d6;
      font-weight: 700;
      font-size: 17px;
    }
  }

  h6 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #002733;
    padding-bottom: 25px;
  }
  .active {
    border-bottom: 10px solid #05ae4b;
    h5 {
      color: #002733;
    }
  }
  .reminder {
    border: 1px solid #e8e8e8;
    box-shadow: 0px 5px 10px -2px rgba(195, 204, 207, 0.25);
    border-radius: 5px;
    padding: 0px 34px;
    margin-bottom: 20px;
  }
  a,
  p {
    padding: 15px 8px 0px 8px;
  }
  a {
    color: #018ffb;
    cursor: pointer;
  }
  .link {
    color: #018ffb;
    text-decoration: none;
  }
`;
