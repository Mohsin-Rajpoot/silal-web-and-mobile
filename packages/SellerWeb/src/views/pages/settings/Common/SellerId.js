import React, { useState } from "react";
import { SellerIdStyle } from "../../../components/Style";
import FormInput from "./FormInput";
import { ReactComponent as QuestionMark } from "../../../../assets/images/svg/questionmark.svg";
import { Col, Row, Button, Modal } from "react-bootstrap";
import { ModalStyle } from "../../../components/Style";

function SellerId() {
  const [grantAccess, setGrantAccess] = useState(false);

  const handleShowAccess = () => setGrantAccess(true);
  const handleCloseAccess = () => setGrantAccess(false);

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

        <Row className="row d-flex">
          <Col lg={6}>
            <div className="d-flex">
              <h5>Assign Worker as</h5>
              <QuestionMark className="questionMark" />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </Col>
          <Col lg={6} className="butn" onClick={handleShowAccess}>
            <Button className="btn2">Grant access</Button>
          </Col>
        </Row>
      </div>

      <Modal
        className="d-flex justify-content-center"
        show={grantAccess}
        onHide={handleCloseAccess}
        centered
      >
        <ModalStyle>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="text-center p-4 ">
            <h3>Granting Access</h3>
            <div className="text">
              Granting others user access is a way to allow them to help you
              manage your store, access given can be of 2 types, Admins or
              Maintainers:
            </div>
            <div className="admins">
              Admins can: att1, att1, att1, att1 Admins can’t: att1, att1, att1,
              att1
            </div>
            <div className="mainteners">
              Maintainers can: att1, att1, att1, att1 Maintainers cant’: att1,
              att1, att1, att1
            </div>
            <div className="card">
              <p className="cardText">
                <span className="colored"> Note from Silal: </span>Please make sure that the entered
                seller ID is the exact one, remember, you can revoke access
                anytime from this page.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex w-100 ">
              <Col lg={12} className="ps-2">
                <Button className="btn2 w-100" onClick={handleCloseAccess}>
                  No, latter
                </Button>
              </Col>
            </div>
          </Modal.Footer>
        </ModalStyle>
      </Modal>
    </SellerIdStyle>
  );
}

export default SellerId;
