import styled from "styled-components"
import { selectArrow } from './AllImages'

const CardStyled = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  &.bg-grey {
    background-color: #e5eaeb;
  }
  &.bg-blue {
    background-color: #4c6870;
  }
`;

const Heading = styled.h1`
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 18px;
  color: #002733;
`;

const Button = styled.button`
  background: #5ab3a8;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  min-width: 100px;
  height: 40px;
  white-space: nowrap;
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s all;
  &:hover {
    background: rgba(90, 179, 169, 0.9);
  }
  &:disabled {
    background: rgba(90, 179, 168, 0.5);
    cursor: inherit;
  }
  &.grey {
    background: #CCD4D6;
    color: rgba(0, 39, 51, 0.5);
  }
  &.w-230 {
    width: 230px;
  }
  &.w-148 {
    width: 148px;
  }
`;

const ButtonText = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  height: 40px;
  white-space: nowrap;
  color: var(--theme-clr);
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s all;
`;

const TableStyled = styled.div`
  font-family: 'Lato', sans-serif;
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
    font-size: 15px;
    font-weight: 400;
  }
  .rdt_Pagination {
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
  }
  .stock-status {
    padding: 3px 9px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 11px;
    color: white;
    &.low {
      background: #ffab00;
    }
    &.out {
      background: #ff5630;
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
  input[type=checkbox] {
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
  ul {
    li {
      margin-right: 15px;
      padding-top: 20px;
      font-weight: 500;
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
    border: 2px solid #5ab3a8;
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
    border: 2px solid #5ab3a8;
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
    &.active,
    &:hover {
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
  display:flex;
  align-items:center;
`;

const HeadingStyled = styled.div`
  font-size:${(props) => props.size && (props.size)};
  font-weight:${(props) => props.weight && (props.weight)};
  color:${(props) => props.color ? props.color : "inherit"};
`;

const Title = styled.h6`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #002733;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  color: #002733;
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
  border: 1px solid #E8E8E8;
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
  border: 1px solid #E8E8E8;
  border-radius: 5px;
  resize: none;
  margin-bottom: 20px;
  &::placeholder {
    color: #CCD4D6;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 39px;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
  padding: 9px 15px 8px 10px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.408px;
  color: #002733;
  &::placeholder {
    color: #CCD4D6;
  }
`;

const EditButton = styled.button`
  width: 24px;
  height: 24px;
  background: #4C6870;
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
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #4C6870;
    margin: 0;
    span {
      color: #002733;
      font-weight: 500;
    }
  }
`;

export {
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
};