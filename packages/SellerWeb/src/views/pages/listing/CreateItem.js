import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Wrapper } from "../../components/listing/Style";
import {
  HeadingStyled,
  Button,
  FlexContainer,
  CardStyled,
  Label,
  Input,
  Select,
} from "../../components/Style";
import { BackArrow } from "../../components/AllImages";
import Shipping from "./Shipping";
import Specifications from "./Specifications";
import Information from "./Information";
import Preview from "./Preview";
import Media from "./Media";

const CreateItem = () => {
  const history = useHistory();
  const [step, setStep] = useState(1);

  const addStep = () => {
    setStep(step + 1);
  };

  const removeStep = () => {
    setStep(step - 1);
  };
  return (
    <Wrapper>
      <FlexContainer className="mt-20 justify-content-between flex-wrap">
        <div className="d-flex align-items-center">
          <button onClick={history.goBack} className="back-arrow mb-26">
            <BackArrow />
          </button>
          <HeadingStyled size="25px" weight="700" className="mb-26">
            Create new item
          </HeadingStyled>
        </div>
        <div className="d-flex align-items-center">
          <Button
            bg="#05AE4B33"
            color="#05AE4B"
            className="mb-26 hover-clr-white"
          >
            Save as tempalate
          </Button>
          <Button
            bg="#05AE4B33"
            color="#05AE4B"
            className="mx-3 hover-clr-white mb-26 w-148"
          >
            Save as draft
          </Button>
          <Button className="mb-26">Request to publish</Button>
        </div>
      </FlexContainer>
      <CardStyled>
        <div className="stepper-wrapper">
          <div
            className={`stepper-item ${step === 1 ? "active" : ""}`}
            onClick={() => setStep(1)}
          >
            <h2 className="step-counter">1</h2>
            <h1 className="step-name">Item information</h1>
          </div>
          <div className={`bar ${step === 2 ? "active" : ""}`}></div>
          <div
            className={`stepper-item ${step === 2 ? "active" : ""}`}
            onClick={() => setStep(2)}
          >
            <h2 className="step-counter">2</h2>
            <h1 className="step-name">Specifications</h1>
          </div>
          <div className={`bar ${step === 3 ? "active" : ""}`}></div>
          <div
            className={`stepper-item ${step === 3 ? "active" : ""}`}
            onClick={() => setStep(3)}
          >
            <h2 className="step-counter">3</h2>
            <h1 className="step-name">Media</h1>
          </div>
          <div className={`bar ${step === 4 ? "active" : ""}`}></div>
          <div
            className={`stepper-item ${step === 4 ? "active" : ""}`}
            onClick={() => setStep(4)}
          >
            <h2 className="step-counter">4</h2>
            <h1 className="step-name">Shipping</h1>
          </div>
          <div className={`bar ${step === 5 ? "active" : ""}`}></div>
          <div
            className={`stepper-item ${step === 5 ? "active" : ""}`}
            onClick={() => setStep(5)}
          >
            <h2 className="step-counter">5</h2>
            <h1 className="step-name">Preview</h1>
          </div>
        </div>
      </CardStyled>
      {step === 1 && <Information step={step} addStep={addStep} />}
      {step === 2 && <Specifications step={step} addStep={addStep} />}
      {step === 3 && <Media step={step} addStep={addStep} />}
      {step === 4 && <Shipping step={step} addStep={addStep} />}
      {step === 5 && <Preview step={step} addStep={removeStep} />}
    </Wrapper>
  );
};

export default CreateItem;
