import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import FormInput from "../../settings/Common/FormInput";
import Gobackbuton from "@SilalApp/sellerweb/src/views/components/auth/Gobackbutton/Gobackbuton";
import { Link } from "react-router-dom";

function SellerInfo() {
  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="content">
        <h2>Seller information</h2>
        <FormInput
          label={"First Name"}
          asterik={"*"}
          type={"text"}
          placeholder={"Enter full name"}
        />
        <FormInput
          label={"Last Name"}
          asterik={"*"}
          type={"text"}
          placeholder={"Enter full name"}
        />{" "}
        {/* <FormInput
          label={"Personal Email"}
          type={"text"}
          placeholder={"Email address"}
        />{" "} */}
        {/* <FormInput
          label={"ID Number"}
          asterik={"*"}
          type={"text"}
          placeholder={"Your ID number"}
        /> */}
      </div>

      <div className="butns">
        <Button className="btn1">Back</Button>
        <Link to="/newsplash">
          <Button className="btn2">Next Step</Button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default SellerInfo;
const Wrapper = styled.div`
  .content {
    padding: 30px;
  }
  h2 {
    font-weight: 700;
    font-size: 32px;
    color: #002733;
    padding-bottom: 10px;
  }
  .butns {
    text-align: right;
    padding-right: 26px;
  }
  .btn1 {
    background: #ccd4d6;
    color: #4c7061;
    border: none;
    margin: 5px;
    padding: 11px 73px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    padding: 11px 53px;
  }
`;
