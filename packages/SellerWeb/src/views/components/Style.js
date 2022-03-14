import styled from "styled-components";

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
  .rdt_TableCell {
    padding-top: 8px;
    padding-bottom: 8px;
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
      padding-top:20px;
      font-weight: 500;
      font-size: 14px;
      color: #002733;
      position: relative;
      &:before{
        content:"";
        position: absolute;
        top:0;
        left:0;
        left:50%;
        width: 1px;
        height: 10px;
        border: 1px solid #4C6870;
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
    z-index:22;
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
    z-index:22;
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
export {
  CardStyled,
  Heading,
  Button,
  ButtonText,
  TableStyled,
  ThemeTabs,
  RangeSlider,
  ThemeAccordion,
};
