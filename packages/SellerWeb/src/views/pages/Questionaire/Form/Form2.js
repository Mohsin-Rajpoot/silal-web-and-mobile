import React from "react";
import FormInput from "../../settings/Common/FormInput";
import styled from "styled-components";
import locationSvg from "../../../../assets/images/svg/location.svg";
import DropDown from "../Common/DropDown";
function Form2() {
  const options = ["Regions", "option 2", "option 3"];
  return (
    <Form2Styled>
      <div className="d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="address">
            <div className="col-lg-12 bar">
              <FormInput
                className={"bold"}
                label={"Business address"}
                type={"text"}
                placeholder={"Address line 1"}
                asterik={"*"}
              />
            </div>
            <div className="col-lg-12 bar">
              <FormInput type={"text"} placeholder={"Address line 1"} />
            </div>
          </div>

          <div className="business">
            <h6>
              Business Location<span>*</span>
            </h6>
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="col-lg-4 text-center input">
                <input className="w-100" placeholder="Longitude" />
              </div>
              <div className="col-lg-4 text-center input">
                <input placeholder="Latitude" className="w-100" />
              </div>
              <div className="col-lg-4 text-center input">
                <input placeholder="Gps locations" className="w-100 svgIcon" />
              </div>
            </div>
          </div>

          <div className="col-lg-12 d-flex justify-content-center">
            <div className="col-lg-4 text-center input">
              <DropDown optionArr={options} />
            </div>
            <div className="col-lg-4 text-center input">
              <DropDown optionArr={options} />
            </div>
            <div className="col-lg-4 text-center input">
              <DropDown optionArr={options} />
            </div>
          </div>

          <div class="col-lg-12 notes">
            <h6>Notes</h6>
            <textarea
              placeholder="Anything else you’d like to share with Silal?"
              class="form-control"
              rows="10"
              id="comment"
            ></textarea>
          </div>
        </div>
      </div>
    </Form2Styled>
  );
}

export default Form2;
const Form2Styled = styled.div`
  box-sizing: border-box;
  .input {
    padding: 0px 10px 10px 0px;
  }
  input {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 13px;
  }
  input::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ccd4d6;
  }
  textarea::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ccd4d6;
  }
  .notes {
    padding-top: 30px;
  }
  .business {
    padding-top: 30px;
  }
  .address {
    padding-top: 30px;
  }
  h6 {
    font-family: "Lato";
    font-style: normal
    font-weight: 500;
    font-size: 15px;
    color: #002733;
  }
  span{
    color:red;
  }
  .svgIcon{
    background-image: url(${locationSvg});
  background-repeat: no-repeat;  
    background-size: 26px;
    background-position: right;

  }
`;
