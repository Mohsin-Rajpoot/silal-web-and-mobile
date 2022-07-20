import React, { useState } from "react";
import { SellerWorkStyle } from "../../../components/Style";
import { Col, Row, Button, Modal } from "react-bootstrap";
import { ModalStyle } from "../../../components/Style";

function SellerWork({ id, name, register, date }) {
  const [revokeModel, setRevokeModel] = useState(false);

  const handleShowModel = () => setRevokeModel(true);
  const handleCloseModel = () => setRevokeModel(false);

  return (
    <>
      <SellerWorkStyle>
        <h6> Seller ID: {id}</h6>
        <div className="content">
          <p>Seller Name: {name}</p>
          <p>Registred by Seller: {register}</p>
          <p>Registred on: {date}</p>
          <Row>
            <Col lg={6}>
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Admin
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
                    Maintainer
                  </label>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Button onClick={handleShowModel} className="btn1">
                Revoke
              </Button>
            </Col>
          </Row>
        </div>

        <Modal
          className="d-flex justify-content-center"
          show={revokeModel}
          onHide={handleCloseModel}
          centered
        >
          <ModalStyle>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center p-4 ">
              <h3>Are you sure you want to add Seller #89312</h3>
              <div className="text">
                This will allow him to manage/view your business details
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex w-100 ">
                <Col lg={6} className="pe-2">
                  <Button className="btn1 w-100">yes, take me</Button>
                </Col>
                <Col lg={6} className="ps-2">
                  <Button className="btn2 w-100" onClick={handleCloseModel}>
                    No, latter
                  </Button>
                </Col>
              </div>
            </Modal.Footer>
          </ModalStyle>
        </Modal>
      </SellerWorkStyle>
    </>
  );
}

export default SellerWork;
