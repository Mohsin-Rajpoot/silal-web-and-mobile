import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, CardStyled } from "../../components/Style";

export default function Preview({ step, remove }) {
  return (
    <>
      <Row>
        <Col lg={8}>
          <CardStyled>
            <div className="d-flex"></div>
            <div className="end">
              <Button width="150px" onClick={remove}>
                Go Back
              </Button>
            </div>
          </CardStyled>
        </Col>
      </Row>
    </>
  );
}
