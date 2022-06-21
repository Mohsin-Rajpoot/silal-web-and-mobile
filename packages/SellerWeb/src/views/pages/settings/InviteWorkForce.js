import React from "react";
import { BackArrow } from "../../components/AllImages";
import { HeadingStyled, WorkStyle } from "../../components/Style";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import SellerId from "./Common/SellerId";

const InviteWorkForce = ({ back }) => {
  return (
    <WorkStyle>
      <>
        <div className="d-flex mb-3">
          <button
            type="button"
            className="back-arrow"
            onClick={() => back(false)}
          >
            <BackArrow />
          </button>
          <HeadingStyled size="19px" weight="700" className="poppins mb-0">
            Add new workforce
          </HeadingStyled>
        </div>

        <Row clasName="row">
          <Col lg={6} className="left">
            <SellerId />
          </Col>
          <Col lg={4} className="right">
            hi its four
          </Col>
        </Row>
      </>
    </WorkStyle>
  );
};

export default InviteWorkForce;
