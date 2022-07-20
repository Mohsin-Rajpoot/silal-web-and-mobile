import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, CardStyled, Input, Label } from "../../components/Style";
import Select from "react-select";
import styled from "styled-components";
import PlusIcon from "../../../../src/assets/images/svg/PlusIcon.svg";
import CustomFieldBar from "./CustomFieldBar";
export default function Specifications({ step, addStep, remove }) {
  const [sideBar, SetSideBar] = useState(false);
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
            <SpecStyle>
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
                  <img src={PlusIcon} alt="..."></img>
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
                  <img src={PlusIcon} alt="..."></img>
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
                  <img src={PlusIcon} alt="..."></img>
                </div>
              </div>

              <div class="form-group mt-3 d-flex">
                <div className="screen">
                  <label for="exampleInputEmail1">Screen Size (inch)</label>
                  <input
                    // className="input"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="position-relative info-hover screenImg">
                  <img src={PlusIcon} alt="..."></img>
                </div>
              </div>

              <div className="between mt-3">
                <Label color="#00273380"> Storage Type </Label>
              </div>
              <div className="d-flex align-items-center">
                <Select
                  options={options}
                  className="react-select"
                  styles={{ width: "90%" }}
                  isMulti
                />
                <div className="position-relative info-hover">
                  <img src={PlusIcon} alt="..."></img>
                </div>
              </div>

              <div className="checkBoxes d-flex">
                <h6>HDR Display </h6>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div class="form-check used">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
                <div class="form-check used">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Both available
                  </label>
                </div>
              </div>

              <div className="between mt-3">
                <Label color="#00273380"> RAM (GB) </Label>
              </div>
              <div className="d-flex align-items-center">
                <Select
                  options={options}
                  className="react-select"
                  styles={{ width: "90%" }}
                  isMulti
                />
                <div className="position-relative info-hover">
                  <img src={PlusIcon} alt="..."></img>
                </div>
              </div>

              <div className="butns my-4 d-flex justify-content-between">
                <div className="start">
                  <Button
                    onClick={remove}
                    className="back"
                    width="100px"
                    bg={"white"}
                    color={"#05AE4B"}
                  >
                    Back
                  </Button>
                </div>
                <div className="end">
                  <Button
                    className="mx-3"
                    color={"#05ae4b"}
                    bg={"#cdefdb"}
                    onClick={() => SetSideBar(true)}
                  >
                    + Add custom field
                  </Button>

                  <Button width="150px" onClick={addStep}>
                    Next step
                  </Button>
                </div>
              </div>
            </SpecStyle>
          </CardStyled>
        </Col>
      </Row>
      <CustomFieldBar sideBar={sideBar} SetBar={SetSideBar} />
    </>
  );
}

const SpecStyle = styled.div`
  font-family: "Lato";
  font-style: normal;
  .back {
    border: 1px solid #05ae4b;
    border-radius: 5px;
  }
  .checkBoxes {
    padding: 13px;
    h6 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: rgba(0, 39, 51, 0.5);
      padding: 6px;
      padding-right: 16px;
    }
  }
  .form-check-input:checked {
    background-color: #05ae4b;
  }
  .form-check {
    label {
      font-weight: 400;
      font-size: 15px;
      color: #002733;
    }
  }
  .used {
    padding-left: 39px;
  }
  .form-group {
    // width: 100%;
    .screen {
      width: 100%;
    }
    label {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: rgba(0, 39, 51, 0.5);
    }
  }
  .info-hover {
    margin-left: 7px;
  }

  .screenImg {
    margin-top: 20px;
  }
`;
