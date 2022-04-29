import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, CardStyled } from "../../components/Style";

export default function Media({ step, addStep }) {
  return (
    <>
      <Row>
        <Col lg={8}>
          <CardStyled>
            <div className="d-flex"></div>
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
