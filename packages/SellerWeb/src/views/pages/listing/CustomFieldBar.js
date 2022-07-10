import React, { useState } from "react";
import styled from "styled-components";
import { Offcanvas } from "react-bootstrap";
import DropDown from "../Questionaire/Common/DropDown";
import { Button } from "../../components/Style";
import QuestionMark from "../../../../src/assets/images/svg/Question.svg";
const CustomFieldBar = ({ sideBar, SetBar }) => {
  const options = ["Boolean", "Select", "Numeric"];
  const [selectedOption, SetSelectedOption] = useState("");
  function getOption() {
    const selectElement = document.querySelector(".options");
    SetSelectedOption(selectElement.value);
  }
  return (
    <Offcanvas
      //   style={{ width: "60%" }}
      show={sideBar}
      onHide={() => SetBar(false)}
      placement="end"
    >
      <Wrapper>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Custom field</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="containerr">
          <div>
            <p>
              Choose one of the available types, defining field types will
              enhance the reach of this listing to your customers
            </p>
          </div>
          <div className="dropdown">
            <label>The field will be</label>
            <select onChange={getOption} className="options">
              <option>Select Option</option>
              <option value="Boolean">Boolean</option>
              <option value="Select">Select</option>
              <option value="Numeric">Numeric</option>
            </select>
          </div>
          {selectedOption === "Boolean" ? (
            <div className="Bool">
              <div className="d-flex content">
                <img src={QuestionMark} alt="..."></img>
                <p>
                  Boolean attributes can be either true or false about your
                  product like waterproof, Eco-friendly.
                </p>
              </div>{" "}
              <div className="screen">
                <label>Field name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="HDR Display"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {selectedOption === "Select" ? (
            <div className="select">
              <div className="d-flex content">
                <img src={QuestionMark} alt="..."></img>
                <p>
                  Boolean attributes can be either true or false about your
                  product like waterproof, Eco-friendly.
                </p>
              </div>{" "}
              <div className="color">
                <label>Field name</label>
                <input type="text" class="form-control" placeholder="Color" />
              </div>
              <div className="option">
                <label>Options</label>
                <input type="text" class="form-control" placeholder="Silver" />
              </div>
              <div className="color">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Space Gray"
                />
              </div>
              <div className="butn2 text-center">
                <Button bg={"white"} color={"#05AE4B"}>
                  + Add one more option
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}
          {selectedOption === "Numeric" ? (
            <div className="select">
              <div className="d-flex content">
                <img src={QuestionMark} alt="..."></img>
                <p>
                  Boolean attributes can be either true or false about your
                  product like waterproof, Eco-friendly.
                </p>
              </div>{" "}
              <div className="color">
                <label>Field name</label>
                <input type="text" class="form-control" placeholder="Storage" />
              </div>
              <div className="unit">
                <label>Unit</label>
                <input type="text" class="form-control" placeholder="Gb" />
              </div>
              <div className="option">
                <label>Options</label>
                <input type="text" class="form-control" placeholder="256" />
              </div>
              <div className="color">
                <input type="text" class="form-control" placeholder="512" />
              </div>
              <div className="butn2 text-center">
                <Button bg={"white"} color={"#05AE4B"}>
                  + Add one more option
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="butn">
            <Button className="butn">Add field</Button>
          </div>
        </Offcanvas.Body>
      </Wrapper>
    </Offcanvas>
  );
};

const Wrapper = styled.div`
  font-family: "Lato";
  font-style: normal;
  .containerr {
    // border: 1px solid red;
  }
  option {
    border: 1px solid #e8e8e8;
  }
  .options {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    width: 100%;
    padding: 13px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }
  label {
    color: #ccd4d6;
    width: 100%;
    border: none;
  }
  .butn {
    float: right;
    margin-top: 20px;
  }
  .content {
    margin-top: 22px;
    img {
      margin-bottom: 18px;
      margin-right: 10px;
    }
  }
  .butn2 {
    border: 1px solid #05ae4b;
    border-radius: 5px;
    margin-top: 25px;
  }
  input {
    margin-bottom: 18px;
  }
`;

export default CustomFieldBar;
