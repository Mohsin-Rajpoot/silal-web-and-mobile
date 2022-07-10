import React, { useState } from "react";
import FormHeader from "./FormHeader";
import styled from "styled-components";
import FormFooter from "./FormFooter";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import GlobalStyle from "../../../components/GlobalStyled";

function Form() {
  const [current, setCurrent] = useState(1);
  const [modal, setModal] = useState(false);

  // console.log(modal);
  return (
    <FormStyle>
      <GlobalStyle />
      <div className="d-flex justify-content-center">
        <div className="col-lg-11 d-flex flex-column ">
          <FormHeader currentState={current} />
          {current === 1 ? <Form1 /> : " "}
          {current === 2 ? <Form2 /> : " "}
          {current === 3 ? (
            <Form3 modalState={modal} setState={setModal} />
          ) : (
            " "
          )}
          <FormFooter
            setState={setCurrent}
            currentState={current}
            setModalState={setModal}
          />
        </div>
      </div>
    </FormStyle>
  );
}

export default Form;
const FormStyle = styled.div``;
