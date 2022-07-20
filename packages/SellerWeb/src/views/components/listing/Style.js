import styled from "styled-components";

const Wrapper = styled.div`
  .hover-clr-white {
    &:hover {
      color: white;
    }
  }
  .stepper-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .stepper-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &.active,
      .complete {
        .step-counter {
          background: #05ae4b;
        }
        .step-name {
          color: #002733;
        }
      }
      .step-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background: rgba(0, 39, 51, 0.1);
        border-radius: 30px;
        margin: 0px 12px;
        font-family: "Poppins";
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
      }
      .step-name {
        font-family: "Lato";
        font-weight: 400;
        font-size: 17px;
        line-height: 120%;
        letter-spacing: -0.408px;
        color: #0027334d;
        margin: 0;
      }
    }
    .bar {
      width: 35px;
      height: 2px;
      background: #ccd4d6;
      border-radius: 5px;
      &.active {
        background: #05ae4b;
      }
    }
  }
  .info-hover {
    &:hover {
      .info-sign {
        background-color: #05ae4b;
      }
    }
  }
  .info-sign {
    margin-bottom: 20px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    background: #05ae4b33;
    color: #05ae4b;
  }
  .info-div {
    left: 40px;
    top: -16px;
    background: #ffffff;
    color: rgba(0, 39, 51, 0.8);
    box-shadow: 0px 4.15385px 9px rgba(0, 32, 51, 0.07);
  }
  .mr-30 {
    margin-right: 30px;
  }
  .ck-editor {
    margin-bottom: 25px !important;
    flex: 1;
    .ck-content {
      min-height: 155px;
    }
    .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused),
    .ck.ck-toolbar {
      border-color: #e8e8e8;
    }
    .ck.ck-toolbar {
      background-color: white;
    }
    .ck-dropdown {
      display: none;
      &:first-of-type {
        display: inherit;
      }
    }
  }

  .sub_title {
    font-family: "Lato";
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(0, 39, 51, 0.5);
  }

  .react-select {
    width: 95%;
  }
  .react-select-3-listbox {
    color: #05ae4b;
  }
  . css-1s2u09g-control {
    padding: 5px;
    border: none;
    outline: none;
    border-color: #05ae4b;
  }
  .css-1rhbuit-multiValue {
    background: #05ae4b;
    border-radius: 5px;
    color: #ffff;

    div {
      font-family: "Lato";
      font-weight: 400;
      font-size: 15px;
      color: #ffffff;
    }
  }
  . css-1hb7zxy-IndicatorsContainer {
    display: none;
  }
`;

export { Wrapper };
