import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import FormInput from "../../settings/Common/FormInput";

function SellerInfo() {
  return (
    <Wrapper>
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
        <FormInput
          label={"Personal Email"}
          type={"text"}
          placeholder={"Email address"}
        />{" "}
        <FormInput
          label={"ID Number"}
          asterik={"*"}
          type={"text"}
          placeholder={"Your ID number"}
        />
      </div>

      <div className="butns">
        <Button className="btn1">Change number</Button>
        <Button className="btn2">Verify number</Button>
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
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
  }
`;
