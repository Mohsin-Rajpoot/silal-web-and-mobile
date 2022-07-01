import React from "react";
import styled from "styled-components";
import { CardStyled, Radio } from "../../../components/Style";
import ribbonSvg from "../../../../assets/images/svg/ribbon.svg";
import DropDown from "../Common/DropDown";
import { Link } from "react-router-dom";
import FormInput from "../../settings/Common/FormInput";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { ModalStyle } from "../../../components/Style";

function Form3({ modalState, setState }) {
  const options = ["option one", "option 2", "option 3"];

  return (
    <Form3Styled>
      <div className="d-flex justify-content-center">
        <div className="col-lg-8">
          <h6 className="title">
            Select type <span className="asterik">*</span>
          </h6>
          <div className="category col-lg-12 d-flex justify-content-between">
            <div className="col-lg-4 card1">
              <div className="content light">
                {" "}
                <Radio>
                  Store
                  <input type="radio" name="pre-orders" />
                  <span className="checkmark"></span>
                </Radio>
                <p>Some text for clarification to distinguish the concepts</p>
              </div>
            </div>
            <div className="col-lg-4 card2">
              <div className="img content dull">
                {" "}
                <Radio>
                  Restaurant
                  <input type="radio" name="pre-orders" />
                  <span className="checkmark"></span>
                </Radio>
                <p>Some text for clarification to distinguish the concepts</p>
              </div>
            </div>
            <div className="col-lg-4 card3">
              <div className="img content dull">
                {" "}
                <Radio>
                  Service
                  <input type="radio" name="pre-orders" />
                  <span className="checkmark"></span>
                </Radio>
                <p>Some text for clarification to distinguish the concepts</p>
              </div>
            </div>
          </div>

          {/* below dropdown is fully custom not a bootstrap one */}
          <div>
            <h6 className="title">
              Category <span className="asterik">*</span>
            </h6>
            <DropDown optionArr={options} />
          </div>

          <h6 className="title">
            Accepted payment methods <span className="asterik">*</span>
          </h6>

          <div className=" row d-flex justify-content-between">
            <div className="padd col-lg-6">
              <div class="one form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Cash payment
                </label>
              </div>
            </div>

            <div className="padd col-lg-6">
              <div class="one form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Card payment
                </label>
              </div>
            </div>

            <div className="padd col-lg-6">
              <div class="one form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple Pay, Google Pay
                </label>
              </div>
            </div>

            <div className="padd col-lg-6">
              <div class="one form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>
          </div>

          <div className="slogan">
            <FormInput
              className={"bold"}
              label={"Store Slogan"}
              type={"text"}
              placeholder={"What’s a slogan that describes your business?"}
              asterik={"*"}
            />
          </div>

          <div className="slogan">
            <h6>
              Store description <span className="asterik">*</span>{" "}
            </h6>
            <textarea
              placeholder="Briefly describe what service / product you are posting. This information will be visible on your business profile and available to customers. Max 180 characters."
              class="form-control"
              rows="5"
              id="comment"
            ></textarea>
          </div>

          <h6 className="title">
            Working hours<span className="asterik">*</span>
          </h6>

          <div className="d-flex">
            <div className="col-lg-6 d-flex">
              <h6>From</h6>
              <div className="area">
                <DropDown optionArr={options} />
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <h6>till</h6>
              <div className="area">
                <DropDown optionArr={options} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalState ? (
        <Modal
          className="d-flex justify-content-center "
          show={modalState}
          onHide={() => setState(false)}
          centered
        >
          <ModalStyle>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center p-4 ">
              <h3>Are you sure you want out of the questionnaire?</h3>
              <div className="text">
                If you exit, you will lose all your filled data
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex w-100 ">
                <Col lg={6} className="pe-2">
                  <Link to="/submit-questionaire-form">
                    <Button
                      className="btn1 w-100"
                      // onClick={ModelIn}
                    >
                      Confirm
                    </Button>
                  </Link>
                </Col>
                <Col lg={6} className="ps-2">
                  <Button
                    className="btn2 w-100"
                    onClick={() => setState(false)}
                    // onClick={handleCloseEmailModel}
                  >
                    Cancel
                  </Button>
                </Col>
              </div>
            </Modal.Footer>
          </ModalStyle>
        </Modal>
      ) : (
        // <h1>its false</h1>
        " "
      )}
    </Form3Styled>
  );
}

export default Form3;
const Form3Styled = styled.div`
  font-family: "Lato";
  font-style: normal;
  color: #002733;
  .card1,
  .card2,
  .card3 {
    padding: 0px 10px 10px 10px;
  }

  .img {
    background-image: url(${ribbonSvg});
    background-repeat: no-repeat;
    background-position: top right;
  }
  .light {
    background-color: #cdefdb;
    border-radius: 5px;
    padding: 5px;
    padding: 13px;
  }
  .dull {
    background-color: rgba(0, 0, 0, 0.14);
    border-radius: 5px;
    padding: 5px;
    position: relative;
    padding: 13px;
  }

  .light:hover {
    border: 1px solid #05ae4b;
  }
  .dull:hover {
    border: 1px solid #cdcdd0;
  }

  h6 {
    padding-top: 25px;
    font-weight: 500;
    font-size: 15px;
    color: #002733;
  }
  .asterik {
    color: red;
  }

  .one {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 13px 0px 13px 28px;
  }
  .padd {
    padding-bottom: 7px;
  }
  .form-check-input:checked {
    background-color: #05ae4b;
  }
  .form-check-label {
    font-weight: 500;
    font-size: 17px;
  }
  .slogan {
    padding-top: 20px;
  }
  .area {
    width: 100%;
    padding: 8px;
  }
`;
