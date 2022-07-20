import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

function FormInput({ label, type, asterik, placeholder, optional, bold }) {
  return (
    <FormStyle>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className={`label  ${bold}`}>
            {label}
            <span className="asterik">{asterik}</span>{" "}
            <span className="optional">{optional}</span>
          </Form.Label>
          <Form.Control
            className="control"
            type={type}
            placeholder={placeholder}
          />
        </Form.Group>
      </Form>
    </FormStyle>
  );
}

export default FormInput;

const FormStyle = styled.div`
  .form-control {
    width: 100%;
  }
  .control {
    padding: 13px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
  }
  .asterik {
    color: red;
  }
  .label {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }
  .optional {
    color: #ccd4d6;
  }
  .bold {
    // font-size:
  }
`;
