import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, CardStyled } from "../../components/Style";
import styled from "styled-components";
import image from "../../../../src/assets/images/svg/image.svg";
import AddPhotoBar from "./AddPhotoBar";
function Media({ step, addStep, remove }) {
  const [sideBar, SetSideBar] = useState(false);

  return (
    <Wrapper>
      <Row className="d-flex justify-content-around">
        <Col className="left" lg={8}>
          <CardStyled>
            <div className="header d-flex row">
              <div className="media col">
                <p>
                  Media <span>0/9</span>
                </p>
              </div>
              <div className="butn col end">
                <Button
                  onClick={() => SetSideBar(true)}
                  bg={"none"}
                  color={"#05AE4B"}
                >
                  Add Photo
                </Button>
              </div>
            </div>
            <div class="grid-container">
              <div class="item1"></div>
              <div class="item2"></div>
              <div class="item3"></div>
              <div class="item4"></div>
              <div class="item5"></div>
              <div class="item6"></div>
              <div class="item7"></div>
              <div class="item8"></div>
              <div class="item9"></div>
            </div>

            <div className="footer d-flex row">
              <div className="col">
                <Button
                  onClick={remove}
                  className="back"
                  bg={"White"}
                  color={"#05AE4B"}
                >
                  Back
                </Button>
              </div>
              <div className="col end">
                <Button width="150px" onClick={addStep}>
                  Next step
                </Button>
              </div>
            </div>
          </CardStyled>
        </Col>
        <Col className="right" lg={3}>
          <div className="item">
            <h6>Requirements for photos</h6>
          </div>
          <div className="d-flex">
            <div>
              <img src={image} alt="..." />
              <p>Up to 5 MB</p>
            </div>
            <div>
              <h5>Format: JPEG, PN</h5>
              <h5>Resolution: 200 px dmet minim mollit non</h5>
              <h5>Size: does not exceed 5 MB</h5>
              <h5>
                Background: amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </h5>
              <h5>
                Something else: amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </h5>
            </div>
          </div>
        </Col>
      </Row>

      <AddPhotoBar sideBar={sideBar} SetBar={SetSideBar} />
    </Wrapper>
  );
}
export default Media;

const Wrapper = styled.div`
  font-family: "Poppins";
  font-style: normal;

  .left {
    .header {
      border-bottom: 1px solid rgba(0, 39, 51, 0.08);
    }
    .butn {
      float: right;
    }
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #002733;
      span {
        color: rgba(0, 39, 51, 0.3);
      }
    }
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 10px;
    padding: 25px 0px;
  }

  .grid-container > div {
    background-color: #f4f7f8;
    border-radius: 5px;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    padding: 52px;
  }

  .item1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .footer {
    .back {
      border: 1px solid #05ae4b;
      border-radius: 5px;
    }
  }
  .right {
    padding: 25px;
    padding-top: 60px;
    background: #ffffff;
    box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
    border-radius: 5px;
    img {
      width: 60px;
    }
    h6 {
      padding: 5px;
      font-weight: 700;
      font-size: 16px;
      color: #002733;
    }
    h5 {
      font-weight: 400;
      font-size: 13px;
      line-height: 130%;
      color: rgba(0, 39, 51, 0.5);
      padding-left: 21px;
    }
    p {
      font-weight: 600;
      font-size: 10px;
      color: #05ae4b;
      margin-top: 5px;
    }
  }
  .item {
    text-align: center;
    margin-bottom: 10px;
  }
`;
