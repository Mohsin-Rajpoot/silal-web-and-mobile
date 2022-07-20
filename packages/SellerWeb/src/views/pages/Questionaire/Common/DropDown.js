import * as React from "react";
import styled from "styled-components";

const DropDown = ({ label, optionArr }) => {
  return (
    <DropDownStyles>
      <div className="dropdown">
        <label className="label">
          {label}
          <select className="options">
            <option value="fruit">{optionArr[0]}</option>
            <option value="vegetable">{optionArr[1]}</option>
            <option value="meat">{optionArr[2]}</option>
          </select>
        </label>
      </div>
    </DropDownStyles>
  );
};

export default DropDown;

const DropDownStyles = styled.div`
  option {
    border: 1px solid #e8e8e8;
  }
  .options {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    width: 100%;
    padding: 13px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #ccd4d6;
  }
  .label {
    width: 100%;
    // border: 1px solid #e8e8e8;
    border: none;
  }
`;
