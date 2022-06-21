import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import { ModalStyle } from "../../../components/Style";
import OtpVerification from "./OtpVerification";

function VerifyIdentity({ show, close, label,type }) {
  return (
    <Modal
      className="d-flex justify-content-center model"
      show={() => show()}
      onHide={() => close()}
      centered
    >
      <ModalStyle>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center p-4 ">
          <h3>Verify {label}</h3>
          <div className="text">
            We’ve just sent an email with a verefication code to
            {type}
          </div>
          <OtpVerification />
        </Modal.Body>
        <Modal.Footer>
          <div className=" w-100">
            <Col lg={12} className="px-2 ">
              <Button className="btn1 w-100">yes, take me</Button>
            </Col>
            <Col lg={12} className="px-2">
              <Button className="btn2 w-100" onClick={() => close()}>
                No, latter
              </Button>
            </Col>
          </div>
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}

export default VerifyIdentity;
