import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Button, CardStyled } from "../../components/Style";

export default function Shipping({ step, addStep, remove }) {
  return (
    <>
      <Row>
        <Col lg={8}>
          <CardStyled>
            <ShippingStyle>
              <div className="head">
                <h1>Shipping</h1>
              </div>
              <div class="form-group text">
                <label for="exampleFormControlTextarea1">
                  <h6>What is in the box?</h6>
                </label>
                <textarea
                  class="form-control"
                  placeholder="Macbook Pro M1, Type-C Wall Charger, Type-C to Type-C Cable"
                  rows="3"
                ></textarea>
              </div>

              <div className="dimensions d-flex row">
                <h6>Package Dimensions (up-to)</h6>
                <div className="col-lg-2">
                  <h6>width (cm)</h6>
                  <input placeholder="300"></input>
                </div>
                <div className="col-lg-2">
                  <h6>width (cm)</h6>
                  <input placeholder="300"></input>
                </div>
                <div className="col-lg-2">
                  <h6>width (cm)</h6>
                  <input placeholder="300"></input>
                </div>
              </div>

              <div className="quality">
                <h6>ITEM QUALITIES</h6>
                <div className="d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Breakable </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Breakable </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label>Breakable </label>
                  </div>
                </div>
              </div>

              <div className="dimensions d-flex row">
                <div className="col-lg-4 ">
                  <h6>TIME TO SHIP</h6>
                  <input placeholder="300"></input>
                </div>
                <div className="col-lg-2">
                  <h6>PACKAGE WEIGHT</h6>
                  <input placeholder="300"></input>
                </div>
              </div>

              <div className="d-flex justify-content-between butns">
                <Button
                  onClick={remove}
                  className="back"
                  bg={"white"}
                  color={"#05AE4B"}
                >
                  Back
                </Button>
                <Button width="150px" onClick={addStep}>
                  Next step
                </Button>
              </div>
            </ShippingStyle>
          </CardStyled>
        </Col>
      </Row>
    </>
  );
}
const ShippingStyle = styled.div`
  font-family: "Lato";
  font-style: normal;
  .back {
    border: 1px solid #05ae4b;
    border-radius: 5px;
  }
  h6 {
    font-weight: 700;
    font-size: 12px;
    color: rgba(0, 39, 51, 0.5);
  }
  .form-check-input:checked {
    background-color: #05ae4b;
  }
  textarea {
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    color: rgba(0, 39, 51, 0.2);
  }
  .text {
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 39, 51, 0.08);
  }
  .dimensions {
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 39, 51, 0.08);
    input {
      border: 1px solid #e8e8e8;
      border-radius: 5px;
      width: 90%;
      padding: 11px;
      font-size: 17px;
      color: #002733;
    }
  }
  .form-check {
    padding-right: 20px;
    label {
      padding-left: 4px;
    }
  }
  .quality {
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 39, 51, 0.08);
  }

  .butns {
    padding: 20px 0px;
  }
`;
