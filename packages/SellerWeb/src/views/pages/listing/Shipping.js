import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import {
  Button,
  CardStyled,
  Label,
  Input,
  Select,
} from "../../components/Style";

export default function Shipping({ step, addStep }) {
  return (
    <>
      <Row>
        <Col lg={8}>
          <CardStyled>
            <div className="head">
              <h1>Shipping</h1>
            </div>
            <div className="between mr-30">
              <Label color="#00273380">
                Item name <span style={{ color: "#E42A2A" }}>*</span>
              </Label>
              <p className="charac-left">52 characters left</p>
            </div>
            <div className="d-flex align-items-center">
              <Input type="text" placeholder="Item name" />
              <div className="position-relative info-hover">
                <div className="info-sign poppins text-white center">?</div>
                <div className="info-div">
                  Didn’t find an appropriate category?{" "}
                  <Link to="#">Contact us</Link> and we'll add it!
                </div>
              </div>
            </div>
            <div className="mr-30">
              <div className="between">
                <Label color="#00273380">Item name (2nd language)</Label>
                <p className="charac-left">80 characters left</p>
              </div>
              <Input type="text" placeholder="Item name" />
            </div>
            <Label color="#00273380">
              Category <span style={{ color: "#E42A2A" }}>*</span>
            </Label>
            <div className="d-flex align-items-center">
              <div className="position-relative info-hover">
                <div className="info-sign poppins text-white center">?</div>
                <div className="info-div">
                  Didn’t find an appropriate category?{" "}
                  <Link to="#">Contact us</Link> and we'll add it!
                </div>
              </div>
            </div>
            <div className="mr-30">
              <Label color="#00273380">
                Barcode <span style={{ color: "#E42A2A" }}>*</span>
              </Label>
              <Input type="text" placeholder="Barcode" />
            </div>
            <div className="between mr-30">
              <Label color="#00273380">
                About this item <span style={{ color: "#E42A2A" }}>*</span>
              </Label>
              <p className="charac-left">1000 characters left</p>
            </div>
            <div className="d-flex">
              <div className="position-relative info-hover">
                <div className="info-sign poppins text-white center">?</div>
                <div className="info-div">
                  Didn’t find an appropriate category?{" "}
                  <Link to="#">Contact us</Link> and we'll add it!
                </div>
              </div>
            </div>
            <div className="end">
              <Button width="150px" onClick={addStep}>
                Next step
              </Button>
            </div>
          </CardStyled>
        </Col>
      </Row>
    </>
  );
}
