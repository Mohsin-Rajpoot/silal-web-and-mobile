import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

function FormInput({ label, type, placeholder }) {
  return (
    <FormStyle>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
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
`;
