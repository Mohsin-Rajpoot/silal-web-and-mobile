import React from "react";
import styled from "styled-components";
import underreview from "../../../../assets/images/svg/underReview.svg";
import centerShoping from "../../../../assets/images/svg/centerShoping.svg";
import popshop from "../../../../assets/images/svg/popshop.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ChooseStore() {
  return (
    <>
      <Wrapper>
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h4>Choose a store to log into</h4>
            <h5>Owned Stores</h5>
            <div className="stores row d-flex justify-content-around">
              <div className="store1">
                <img className="img1" src={centerShoping} alt={"..."}></img>
                <h6>Restaurants name</h6>
              </div>
              <div className="store2">
                <img className="img2" src={underreview} alt={"..."}></img>
                <h6 className="h6">Restaurants name</h6>
              </div>
            </div>
            <h5>Managed Stores</h5>
          </div>
        </div>

        <div className="d-flex justify-content-around text-center">
          <div className="col-lg-3 box">
            <img className="img3" src={popshop} alt={"..."}></img>
            <h6 className="b6">Restaurants name</h6>
            <p>Admin</p>
          </div>
          <div className="col-lg-3 box">
            <img className="img3" src={popshop} alt={"..."}></img>
            <h6 className="b6">Restaurants name</h6>
            <p>Admin</p>{" "}
          </div>
          <div className="col-lg-3 box">
            <img className="img3" src={popshop} alt={"..."}></img>
            <h6 className="b6">Restaurants name</h6>
            <p>Admin</p>
          </div>
        </div>

        <p className="text text-center">
          Your Seller ID for invites is:
          <span className="separate">#908432812</span>
        </p>
        <div className="butns text-center">
          <Link to="/statistics">
            <Button className="btn2"> continue</Button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
}

export default ChooseStore;

const Wrapper = styled.div`
  .butns {
    padding: 20px 0px;
  }
  .stores {
    padding-bottom: 30px;
  }
  h4 {
    padding-top: 20px;
  }
  h5 {
    padding: 30px 0px;
  }
  .text {
    padding: 20px 0px;
    font-weight: 400;
    font-size: 20px;
    color: #002733;
  }
  .separate {
    color: #05ae4b;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 30%;
  }
  h4 {
    font-weight: 700;
    font-size: 28px;
    color: #002733;
  }
  h5 {
    font-weight: 700;
    font-size: 25px;
    color: #002733;
  }
  .store1 {
    width: 232px;
    height: 170px;
    background: #cdefdb;
    border-radius: 10px;
    cursor: pointer;
  }

  .store2 {
    width: 232px;
    height: 170px;
    background: rgba(4, 26, 33, 0.3);
    border-radius: 11px;
    cursor: pointer;
  }
  .img1 {
    padding: 22px;
  }
  h6 {
    font-weight: 500;
    font-size: 17px;
    color: #002733;
  }
  .h6 {
    padding-top: 44px;
  }
  .store1,
  .store2 {
    margin: 10px;
  }
  .store1:hover {
    border: 1px solid #05ae4b;
  }
  .store2:hover {
    border: 1px solid #05ae4b;
  }
  .box {
    box-sizing: border-box;
    padding-top: 25px;
    background: #ffffff;
    border: 1px solid rgba(205, 205, 208, 0.5);
    border-radius: 10px;
    cursor: pointer;
  }
  .img3 {
    border-radius: 50%;
  }
  .b6 {
    padding-top: 10px;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ccd4d6;
  }
`;
