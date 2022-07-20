import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Splashpage() {
  return (
    <Wrapper>
      <div className=" d-flex justify-content-center">
        <div className="col-lg-4 text-center content">
          <div className="box"></div>
          <h6>Amet minim mollit non</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{" "}
          </p>
          <div className="butns">
            <Link to="signup">
              <Button className="btn2">Sign up</Button>
            </Link>
            <Link to="login">
              <Button className="btn1">Log In</Button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Splashpage;

const Wrapper = styled.div`
  .content {
    margin-top: 100px;
  }
  .box {
    background: #05ae4b;
    height: 272px;
    width: 272px;
    border-radius: 30px;
    margin: auto;
  }

  h6 {
    padding-top: 80px;
    font-weight: 700;
    font-size: 25px;
    color: #05ae4b;
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #002733;
    padding: 30px;
  }
  .btn1 {
    background: #ccd4d6;
    color: #4c7061;
    border: none;
    margin: 5px;
    width: 100%;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 100%;
  }
`;
