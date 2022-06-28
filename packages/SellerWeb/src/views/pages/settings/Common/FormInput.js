import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

function FormInput({ label, type, asterik, placeholder }) {
  return (
    <FormStyle>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="label">
            {label}
            <span className="asterik">{asterik}</span>{" "}
          </Form.Label>
          <Form.Control type={type} placeholder={placeholder} />
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
  .asterik {
    color: red;
  }
  .label {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }
`;
