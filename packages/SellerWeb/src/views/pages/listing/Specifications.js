import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, CardStyled, Input, Label } from "../../components/Style";
import Select from "react-select";

export default function Specifications({ step, addStep }) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanill12321a", label: "Vanill12312a" },
  ];

  return (
    <>
      <Row>
        <Col lg={8}>
          <CardStyled>
            <div className="head">
              <h1 className="d-flex">
                Specifications
                <div className="position-relative info-hover text-start">
                  <div className="info-sign poppins text-white center">?</div>
                  <div className="info-div">
                    Didn’t find an appropriate category?{" "}
                    <Link to="#">Contact us</Link> and we'll add it!
                  </div>
                </div>
              </h1>
            </div>
            <div className="d-flex">
              <p className="sub_title">Category Required Attributes</p>
            </div>

            <div className="between mt-3">
              <Label color="#00273380"> Brand </Label>
            </div>
            <div className="d-flex align-items-center">
              <Select
                options={options}
                className="react-select"
                styles={{ width: "90%" }}
                isMulti
              />
              <div className="position-relative info-hover">
                <div className="info-sign poppins text-white center"></div>
              </div>
            </div>

            <div className="between mt-3">
              <Label color="#00273380"> Color </Label>
            </div>
            <div className="d-flex align-items-center">
              <Select
                options={options}
                className="react-select"
                styles={{ width: "90%" }}
                isMulti
              />
              <div className="position-relative info-hover">
                <div className="info-sign poppins text-white center"></div>
              </div>
            </div>

            <div className="between mt-3">
              <Label color="#00273380"> Capacity (GB) </Label>
            </div>
            <div className="d-flex align-items-center">
              <Select
                options={options}
                className="react-select"
                styles={{ width: "90%" }}
                isMulti
              />
              <div className="position-relative info-hover">
                <div className="info-sign poppins text-white center"></div>
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
