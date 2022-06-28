import styled from "styled-components";
import { selectArrow } from "./AllImages";

const CardStyled = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  margin-bottom: 20px;
  &.bg-grey {
    background-color: #e5eaeb;
  }
  &.bg-blue {
    background-color: #4c6870;
  }
  .head {
    padding: 20px 20px 15px;
    margin: -20px -20px 15px -20px;
    border-bottom: 1px solid rgba(0, 39, 51, 0.08);
    h1 {
      font-family: "Poppins";
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #002733;
      margin: 0;
    }
  }
`;

const Heading = styled.h1`
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 18px;
  color: #002733;
`;

const Button = styled.button`
  background: ${(props) => (props.bg ? props.bg : "#05AE4B")};
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  min-width: 100px;
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "40px")};
  white-space: nowrap;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s all;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  &:hover {
    background: "#CDEFDB";
    color: "#05AE4B";
    transform: scale(1.01);
  }
  &:disabled {
    background: rgba(90, 179, 168, 0.5);
    cursor: inherit;
    &:hover {
      transform: scale(1);
    }
  }
  &.grey {
    background: #ccd4d6;
    color: rgba(0, 39, 51, 0.5);
  }
  &.w-230 {
    width: 230px;
  }
  &.w-148 {
    width: 148px;
  }
  svg {
    margin-right: 10px;
  }
  &.delete {
    background-color: #de350b;
  }
  &.hover-fill {
    background-color: white;
    color: #05ae4b;
    border: 1px solid #05ae4b;
    &:hover {
      background-color: #05ae4b;
      color: white !important;
      svg {
        path {
          fill: white;
        }
      }
    }
  }
`;

const ButtonText = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  height: 40px;
  white-space: nowrap;
  color: var(--theme-clr);
  font-weight: ${(props) => (props.weight ? props.weight : "600")};
  font-size: ${(props) => (props.size ? props.size : "15px")};
  transition: 0.2s all;
`;

const TableStyled = styled.div`
  font-family: "Lato", sans-serif;
  button[data-testid] {
    background: #f2f4f5;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin: auto;
  }
  &.modal-table {
    background: #fafafa;
    max-height: 228px;
    overflow-y: auto;
    padding: 14px;
    border-radius: 8px;
    .rdt_Table {
      padding: 0;
    }
    .rdt_TableHeadRow {
      min-height: 30px;
      height: 30px;
    }
    .rdt_TableRow {
      background: #fafafa;
      min-height: 42px;
    }
  }
  .rdt_Table {
    padding: 20px;
    background: #ffffff;
    border-radius: 5px;
  }
  .rdt_TableHeadRow {
    background: #f2f4f5;
    box-shadow: 0px 1px 1px rgba(0, 39, 51, 0.25);
  }
  .rdt_TableRow {
    border-color: rgba(0, 39, 51, 0.08);
    &:hover {
      background: rgba(90, 179, 168, 0.15);
    }
  }
  .rdt_TableCol {
    font-weight: 700;
    font-size: 13px;
  }
  .rdt_TableCell {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
  }
  .rdt_Pagination {
    justify-content: inherit;
    background-color: #f4f7f8;
    border-top: 0;
    font-size: 15px;
    color: #4c6870;
    button {
      &:disabled {
        pointer-events: none;
      }
      &:hover {
        background-color: #4c6870;
        svg {
          fill: white;
        }
      }
    }
    & > *:last-child {
      margin-left: auto;
    }
  }
  .stock-status {
    padding: 3px 9px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 11px;
    color: white;
    min-height: 15px;
    display: block;
    &.low {
      background: #ffab00;
    }
    &.out {
      background: #ff5630;
    }
    &.bank {
      background: #fffae6;
      color: #ff8b00;
    }
    &.credit {
      background: #e6fcff;
      color: #008da6;
    }
  }
  .action-btn {
    border: none;
    background-color: transparent;
    padding: 0 10px;
    margin: 0 10px;
    &:hover {
      svg,
      path {
        fill: var(--theme-clr);
      }
    }
  }
  .table-product-img {
    height: 44px;
    width: 44px;
    border-radius: 4px;
  }
  .rdt_TableCell {
    &:last-child {
      div {
        overflow: visible !important;
      }
    }
  }
  .dropdown {
    overflow: visible !important;
    button {
      border: none !important;
      background-color: transparent !important;
      padding: 0 10px;
      margin: 0 10px;
      &::after {
        display: none;
      }
    }
  }
  input[type="checkbox"] {
    transform: scale(1.16);
  }
`;

const ThemeTabs = styled.div`
  .nav-pills {
    position: relative;
    margin-bottom: 10px;
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      background-color: rgba(0, 39, 51, 0.05);
      height: 4px;
      width: 100%;
      border-radius: 4px;
    }
    .nav-item {
      cursor: pointer;
      a {
        position: relative;
        font-weight: 600;
        font-size: 14px;
        line-height: 140%;
        text-align: center;
        letter-spacing: -0.408px;
        color: #4c6870;
        margin: 0px;
        &.active {
          color: #002733;
          background-color: transparent;
          &:before {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            background-color: var(--theme-clr);
            height: 4px;
            width: 100%;
            border-radius: 4px;
          }
        }
      }
    }
  }
`;

const ThemeAccordion = styled.div`
  .accordion-item {
    border: none;
    margin-bottom: 10px;
    .accordion-header {
      button {
        padding: 8px 10px;
        background: #f2f4f5;
        border-radius: 5px;
        outline: none;
        box-shadow: none;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: -0.408px;
        text-transform: uppercase;
        color: #002733;
      }
    }
    .accordion-body {
      padding: 20px 0 10px 0;
    }
  }
`;

const RangeSlider = styled.div`
  width: 100%;
  font-family: "lato";
  ul {
    li {
      margin-right: 20px;
      padding-top: 20px;
      font-weight: 600;
      font-size: 14px;
      color: #002733;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        left: 50%;
        width: 1px;
        height: 10px;
        border: 1px solid #4c6870;
      }
      &:last-child {
        margin-right: 0;
      }
      &.current {
        color: #ccd4d6;
        margin: 0 auto;
        &::before {
          content: none;
        }
      }
    }
  }
  .slider-range {
    -webkit-appearance: none;
    background: #ccd4d6;
    border-radius: 10px;
    outline: none;
    width: 100%;
    height: 8px;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
  .slider-range::-moz-range-thumb {
    width: 40px;
    height: 40px;
    border: 2px solid #05ae4b;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    z-index: 22;
    &:before {
      content: "";
      width: 35px;
      height: 35px;
      background-color: var(--theme-clr);
      position: absolute;
      left: 5px;
      top: 10px;
    }
  }
  .slider-range::-webkit-slider-thumb {
    appearance: none;
    z-index: 22;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #05ae4b;
    cursor: pointer;
    /* &:before{
        content:"";
        width: 8px;
        height: 8px;
        background-color:var(--theme-clr);
        position:absolute;
        left:5px;
        top:10px;
    } */
  }
`;

const NavStyled = styled.nav`
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  .menu {
    border: none;
    background-color: transparent;
    margin-right: 20px;
    line-height: 1;
    margin-bottom: 15px;
    svg {
      width: 19px;
    }
  }
  .nav-link-btn {
    display: block;
    margin-right: 20px;
    padding: 5px 10px;
    height: 32px;
    border-radius: 5px;
    text-decoration: none;
    color: #4c6870;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 15px;
    white-space: nowrap;
    transition: background-color 0.2s linear;
    &:hover {
      background: #b4e1db57;
      /* color: white;
      span {
        color: white;
      } */
    }
    &.active {
      background: var(--theme-clr);
      color: white;
      span {
        color: white;
      }
    }
    span {
      color: #a0afb4;
    }
  }
  .link {
    svg {
      width: 42px;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeadingStyled = styled.h1`
  font-size: ${(props) => props.size && props.size};
  font-weight: ${(props) => props.weight && props.weight};
  color: ${(props) => (props.color ? props.color : "#002733")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  a {
    color: var(--theme-clr);
    text-decoration: none;
  }
`;

const Title = styled.h6`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #002733;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-family: "lato", sans-serif;
  font-weight: 600;
  font-size: ${(props) => (props.size ? props.size : "12px")};
  line-height: 120%;
  color: ${(props) => (props.color ? props.color : "#002733")};
  margin-bottom: 7px;
`;

const Select = styled.select`
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: right 15px center;
  appearance: none;
  padding: 9px 10px 8px;
  width: 100%;
  height: 39px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.408px;
  color: #002733;
`;

const Textarea = styled.textarea`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.408px;
  color: #002733;
  padding: 10px;
  height: 105px;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  resize: none;
  margin-bottom: 20px;
  &::placeholder {
    color: #ccd4d6;
  }
  &.small {
    height: 60px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 39px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 9px 15px 8px 10px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.408px;
  color: #002733;
  &::placeholder {
    color: #ccd4d6;
  }
`;

const EditButton = styled.button`
  width: 24px;
  height: 24px;
  background: #4c6870;
  border: none;
  border-radius: 3px;
  margin-left: 5px;
`;

const ThemeModal = styled.div`
  .modal-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #414342;
    margin: 0;
  }
  .modal-header {
    padding: 20px 20px 15px 20px;
    border: none;
  }
  .modal-body {
    padding: 0 20px 15px 20px;
  }
  .modal-footer {
    padding: 0 20px 20px 20px;
    border: none;
  }
  .text {
    font-family: "lato";
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #4c6870;
    margin: 0;
    span {
      color: #002733;
      font-weight: 500;
    }
  }
  .refusal-textarea {
    background: #f2f4f5;
    height: 126px;
    border: none;
  }
`;

const UploadImages = styled.div`
  .display-img {
    position: relative;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
    img {
      height: 128px;
      width: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
    .checkbox-main {
      position: absolute;
      top: 8px;
      right: 7px;
    }
    .checkbox,
    .checkmark {
      width: 16px;
      height: 16px;
    }
    .checkmark {
      border: 2px solid #ccd4d6;
    }
    .checkbox .checkmark:after {
      left: 4px;
      top: 1px;
      width: 4px;
      height: 8px;
    }
  }
  .size-text {
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    text-align: right;
    color: #ccd4d6;
    margin-bottom: 9px;
  }
  button {
    width: 100%;
    height: 39px;
    background: #4c6870;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;
    line-height: 130%;
    svg {
      margin-right: 8px;
    }
  }
`;

const UsedItemTag = styled.div`
  padding: 5px 10px;
  height: 28px;
  background: #f2a341;
  border-radius: 5px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: -0.408px;
  color: #ffffff;
  margin: 0 5px 10px 0;
`;

const UploadImageSmallContainer = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid #ccd4d6;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }
`;

const UploadedImageSmallContainer = styled.div`
  width: 100%;
  height: 87px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .close {
    background-color: transparent;
    position: absolute;
    top: -9px;
    right: -8px;
  }
`;

const SimpleNav = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  .menu {
    border: none;
    background-color: transparent;
    line-height: 1;
    svg {
      width: 19px;
    }
  }
  h1 {
    margin: 0 0 0 20px;
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 0.35px;
    color: #002733;
  }
`;

const Description = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;
  letter-spacing: -0.408px;
  color: #002733;
`;

const Radio = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-family: "Lato";
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: -0.408px;
  color: #002733;
  padding-left: 30px;
  margin-bottom: 10px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid #e8e8e8;
    border-radius: 50%;
  }
  &:hover input ~ .checkmark {
    background-color: #f1f1f1;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  input:checked ~ .checkmark {
    border-color: var(--theme-clr);
  }
  .checkmark:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--theme-clr);
  }
`;

const Suggestions = styled.div`
  font-family: "lato";
  padding: 5px;
  height: 26px;
  background: #e6f4f2;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  color: #05ae4b;
  margin-bottom: 8px;
  margin-right: 5px;
`;

const Tag = styled.div`
  font-family: "lato", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #0052cc;
  background-color: #deebff;
  padding: 8px 20px;
  margin-right: 10px;
  border-radius: 5px;
`;

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  input {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(120, 120, 128, 0.16);
    border: 0.5px solid rgba(204, 212, 214, 0.5);
    border-radius: 34px;
    transition: 0.4s;
    z-index: -1;
    cursor: pointer;
    &::before {
      position: absolute;
      content: "";
      height: 27px;
      width: 27px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      box-shadow: -2px 2px 7px rgba(0, 39, 51, 0.14),
        -4px 4px 4px rgba(0, 39, 51, 0.02);
      border-radius: 50%;
      transition: 0.4s;
    }
  }
  input:checked + .slider {
    background-color: #05ae4b;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #cacfd0;
  }
  input:checked + .slider:before {
    transform: translateX(28px);
  }
`;
const Margin = styled.div`
  margin: ${(props) => props.margin};
`;

const SecurityPrefrence = styled.div`
  display: flex;
  .display {
    justify-content: space-between;
  }
  .form-check-input:checked {
    background-color: #05ae4b;
    // border-color: pink;
  }

  h1 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 19px;
    color: #002733;
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #002733;
  }
  .text {
    padding: 22px 0px;
  }
  .form {
    width: 80%;
  }
  .form-check-input {
    width: 39px;
    height: 19px;
  }
  .right {
    // border:2px solid yellow;
  }

  .butns {
    text-align: right;
  }
  .btn1 {
    background: #ccd4d6;
    color: #4c7061;
    border: none;
    margin: 5px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
  }
`;

const ModalStyle = styled.div`
  .modal-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #414342;
    margin: 0;
  }
  .modal-header {
    padding: 20px 20px 15px 20px;
    border: none;
  }
  .modal-body {
    padding: 0 20px 15px 20px;
  }
  .modal-footer {
    padding: 0 20px 20px 20px;
    border: none;
  }
  .text {
    font-family: "lato";
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #4c6870;
    margin: 0;
    span {
      color: #002733;
      font-weight: 500;
    }
  }

  .admins {
    font-family: "lato";
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #4c6870;
    margin: 31px 0px;
  }

  .mainteners {
    font-family: "lato";
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #4c6870;
    margin: 31px 0px;
  }

  .colored {
    font-weight: 600;
    font-size: 13px;
    color: #05ae4b;
  }
  .card {
    font-weight: 600;
    font-size: 13px;
    padding: 8px;
    background: rgba(220, 238, 221, 0.5);
    border: 1px solid #cdefdb;
    border-radius: 5px;
  }
  .refusal-textarea {
    background: #f2f4f5;
    height: 126px;
    border: none;
  }
  .btn1 {
    background: #ccd4d6;
    color: #4c7061;
    border: none;
    margin: 5px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
  }
`;
const WorkStyle = styled.div`
  .row {
    justify-content: space-around;
  }
`;

const SellerIdStyle = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 25px;
  .form-check-input:checked {
    background-color: #05ae4b;
    // border-color: pink;
  }
  .text {
    font-weight: 500;
    font-size: 15px;
    color: #979797;
  }
  .questionMark {
    margin: 2px;
    margin-left: 8px;
  }
  .butn {
    text-align: right;
    margin-top: 43px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    padding: 9px 40px;
  }
`;
const SellerWorkStyle = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin-top: 15px;
  .form-check-input:checked {
    background-color: #05ae4b;
    // border-color: pink;
  }
  .content {
    padding-left: 23px;
    font-weight: 500;
    font-size: 14px;
    color: #002733;
  }
  form-check-label {
    font-weight: 400;
    font-size: 15px;
    color: #002733;
  }
  .btn1 {
    color: #ffffff;
    border: none;
    margin: 5px;
    padding: 9px 40px;
    background: #de350b;
    border-radius: 5px;
  }
`;
export {
  SellerWorkStyle,
  SellerIdStyle,
  WorkStyle,
  ModalStyle,
  SecurityPrefrence,
  CardStyled,
  Heading,
  Button,
  ButtonText,
  TableStyled,
  ThemeTabs,
  RangeSlider,
  ThemeAccordion,
  NavStyled,
  HeadingStyled,
  FlexContainer,
  Title,
  Label,
  Select,
  Textarea,
  Input,
  EditButton,
  ThemeModal,
  UploadImages,
  UsedItemTag,
  UploadImageSmallContainer,
  UploadedImageSmallContainer,
  SimpleNav,
  Description,
  Radio,
  Suggestions,
  Tag,
  Switch,
  Margin,
};
