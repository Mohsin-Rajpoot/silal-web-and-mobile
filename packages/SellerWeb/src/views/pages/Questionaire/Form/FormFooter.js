import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FormFooter({ setState, currentState, setModalState }) {
  return (
    <FooterStyle>
      <div className="d-flex justify-content-center">
        <div className="d-flex col-lg-8 justify-content-end">
          {/* <div className="col-lg-6 justify-content-end"> */}
          <div className="butns">
            {currentState === 1 ? (
              <Button className="btn1 disable">Back</Button>
            ) : (
              <Button
                onClick={() => setState(currentState - 1)}
                className="btn1 disable"
              >
                Back
              </Button>
            )}
            {currentState === 3 ? (
              <Button onClick={() => setModalState(true)} className="btn2">
                Submit
              </Button>
            ) : (
              <Button
                onClick={() => setState(currentState + 1)}
                className="btn2"
              >
                Next Step
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </FooterStyle>
  );
}

export default FormFooter;

const FooterStyle = styled.div`
  .butns {
    float: right;
    // margin-right: 15px;
    margin: 25px 0px;
  }
  .btn1 {
    background: #ccd4d6;
    color: #4c7061;
    border: none;
    margin: 5px;
    padding: 13px 49px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    padding: 13px 79px;
  }
`;
