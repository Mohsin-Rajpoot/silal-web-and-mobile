import React from "react";
import { Button } from "../../components/Style";
import QuestionMark from "../../../../src/assets/images/svg/Question.svg";
import sample from "../../../../src/assets/images/svg/sample.svg";

import styled from "styled-components";

function Specifications2({ step, addStep, remove }) {
  return (
    <SpecificationsStyle>
      <div>
        <h3>
          Combination Table
          <img className="question" src={QuestionMark} alt="..."></img>{" "}
        </h3>
        <hr />
        <p>All Combinations of attributes that have multiple values</p>
        <div className="table">
          <table class="table">
            <thead>
              <tr>
                <th>Valid</th>
                <th>Capacity</th>
                <th>Color</th>
                <th>HDR</th>
                <th>
                  <div className="d-flex">
                    <div>Price</div>
                    <img
                      className="question"
                      src={QuestionMark}
                      alt="...."
                    ></img>
                  </div>{" "}
                </th>
                <th>Image</th>
                <th>In Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>256GB</td>
                <td>Space Gray</td>
                <td>Yes</td>
                <td>
                  <div className="price">
                    <input placeholder="$1000"></input>
                  </div>
                </td>
                <td>
                  <img src={sample} alt="..."></img>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>256GB</td>
                <td>Space Gray</td>
                <td>Yes</td>
                <td>
                  <div className="price">
                    <input placeholder="$1000"></input>
                  </div>
                </td>
                <td>
                  <img src={sample} alt="..."></img>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>256GB</td>
                <td>Space Gray</td>
                <td>Yes</td>
                <td>
                  <div className="price">
                    <input placeholder="$1000"></input>
                  </div>
                </td>
                <td>
                  <img src={sample} alt="..."></img>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>256GB</td>
                <td>Space Gray</td>
                <td>Yes</td>
                <td>
                  <div className="price">
                    <input placeholder="$1000"></input>
                  </div>
                </td>
                <td>
                  <img src={sample} alt="..."></img>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>256GB</td>
                <td>Space Gray</td>
                <td>Yes</td>
                <td>
                  <div className="price">
                    <input placeholder="$1000"></input>
                  </div>
                </td>
                <td>
                  <img src={sample} alt="..."></img>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>256GB</td>
                <td>Space Gray</td>
                <td>Yes</td>
                <td>
                  <div className="price">
                    <input placeholder="$1000"></input>
                  </div>
                </td>
                <td>
                  <img src={sample} alt="..."></img>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between butns">
          <Button
            onClick={remove}
            className="back"
            bg={"white"}
            color={"#05AE4B"}
          >
            Back
          </Button>
          <Button width="150px" onClick={addStep}>
            Next step
          </Button>
        </div>
      </div>
    </SpecificationsStyle>
  );
}

export default Specifications2;
const SpecificationsStyle = styled.div`
  font-family: "Lato";
  font-style: normal;
  .form-check-input:checked {
    background-color: #05ae4b;
  }
  table {
    border-radius: 5px;
  }
  .price {
    input {
      border: none;
      border-radius: 5px;
      width: 20%;
      padding: 2px;
    }
  }
  thead {
    background: #f2f4f5;
    box-shadow: 0px 1px 1px rgba(0, 39, 51, 0.25);
    font-weight: 700;
    font-size: 13px;
    color: #002733;
  }
  p {
    font-weight: 600;
    font-size: 12px;
    color: rgba(0, 39, 51, 0.5);
  }
  tbody {
    background: rgba(220, 238, 221, 0.5);
    font-size: 15px;
    color: #002733;
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #002733;
  }
  .question {
    padding-left: 3px;
  }
  .back {
    border: 1px solid #05ae4b;
    border-radius: 5px;
  }
  .butns {
    margin-bottom: 10px;
  }
`;
