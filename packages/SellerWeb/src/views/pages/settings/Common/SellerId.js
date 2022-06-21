import React from "react";
import { SellerIdStyle } from "../../../components/Style";
import FormInput from "./FormInput";

import { Col, Row } from "react-bootstrap";

function SellerId() {
  return (
    <SellerIdStyle>
      <div>
        <h4>Seller ID:</h4>
        <Col lg={6}>
          <FormInput
            className="input"
            label={""}
            type={"text"}
            placeholder={"#4983247"}
          />
          <p className="text">
            Seller ID is available directly after registering through Silal or
            on your profile, or in the screen where you choose the business to
            manage
          </p>
        </Col>

        <Row className="d-flex">
          <Col lg={6}>hi ita</Col>
          <Col lg={6}>form wbew </Col>
        </Row>
      </div>
    </SellerIdStyle>
  );
}

export default SellerId;
