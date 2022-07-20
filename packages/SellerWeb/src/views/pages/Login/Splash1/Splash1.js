import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Splashpage() {
  return (
    <Wrapper>
      <div className="link">
        <Link className="hi" to="splash2">
          Skip
        </Link>
      </div>
      <div className=" d-flex justify-content-center content">
        <div className="col-lg-4 text-center">
          <div className="box"></div>
          <h6>Amet minim mollit non</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{" "}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Splashpage;

const Wrapper = styled.div`
  .content {
    margin-top: 90px;
  }
  .link {
    font-weight: 700;
    font-size: 17px;
    text-align: right;
    margin: 12px;
  }
  .hi {
    color: #05ae4b;
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
    padding: 20px;
  }
`;
