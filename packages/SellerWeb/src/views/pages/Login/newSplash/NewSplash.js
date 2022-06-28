import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewSplash() {
  return (
    <>
      <Wrapper>
        <div className=" d-flex justify-content-center">
          <div className="col-lg-4 text-center">
            <div className="splash"></div>

            <div className="content">
              <h6>Oops!</h6>
              <p>
                You don’t have any businesses, either create your own or share
                your Seller ID with a business owner to be added to their
                business
              </p>
            </div>
            <p className="text">
              Your Seller ID for invites is:
              <span className="separate">#908432812</span>
            </p>
            <div>
              <Link to="/choosestore">
                <Button className="btn2"> contact business owner</Button>
              </Link>
            </div>
            <div>
              <Link to="/choosestore">
                <Button className="btn1"> create my own business</Button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default NewSplash;

const Wrapper = styled.div`
  .splash {
    background: #05ae4b;
    width: 272px;
    height: 272px;
    border-radius: 30px;
    margin: auto;
    margin-top: 80px;
  }
  h6 {
    padding: 20px;
    padding-top: 30px;
    font-weight: 700;
    font-size: 25px;
    color: #05ae4b;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    color: #002733;
  }

  .text {
    font-weight: 400;
    font-size: 20px;
    color: #002733;
  }
  .separate {
    color: #05ae4b;
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
