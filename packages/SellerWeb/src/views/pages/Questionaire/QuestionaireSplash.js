import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuestionaireSplash() {
  return (
    <QuestionaireStyled>
      <div className="d-flex justify-content-center">
        <div className="col-lg-4 text-center">
          <div className="content">
            <h6>Registration</h6>
            <h3>Fill out a questionnaire</h3>
            <p>
              In order to register on the platform, please tell us in detail
              about your business and wait till for verification
            </p>
          </div>
          <div className="splash text-center"></div>
          <div>
            <Link to="/questionaire-form">
              <Button className="btn2">Change number</Button>
            </Link>
          </div>
        </div>
      </div>
    </QuestionaireStyled>
  );
}

export default QuestionaireSplash;

const QuestionaireStyled = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
  h6 {
    font-weight: 700;
    font-size: 17px;
    color: #002733;
    padding: 15px 0px;
  }
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    color: #002733;
    padding: 5px 0px;
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #002733;
  }
  .splash {
    height: 275px;
    width: 275px;
    background: #05ae4b;
    border-radius: 30px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 140px;
  }

  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 100%;
  }
`;
