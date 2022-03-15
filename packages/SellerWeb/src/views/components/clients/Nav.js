import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Menu } from "../AllImages";
import { NavStyled, FlexContainer, HeadingStyled } from "../Style";
import { Search, ArrowDownUp } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/esm/Dropdown";
const Nav = ({ sideBar, setSideBar }) => {
  const sidebarHandler = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <NavStyled>
        <div className="d-flex">
          <button className="menu" onClick={sidebarHandler}>
            <Menu />
          </button>
        </div>
      </NavStyled>
      <FlexContainer>
        <HeadingStyled size="25px" weight="700" className="mb-0">
          Clients database
        </HeadingStyled>
        <SearchBar className="mx-5">
          <Form
            as="input"
            type="text"
            className="bg-white"
            placeholder="Search by orders #, phone or name..."
          />
          <Search className="icon-label position-absolute" size={17} />
        </SearchBar>
        <DropdownStyled className="ms-auto">
          <Dropdown className="dropdown-container">
            <Dropdown.Toggle bsPrefix={"chevron-down border-0 bg-white"}>
              <ArrowDownUp className="me-2" color="#4C6870" size="17px" />
              <span className="me-3">Sort by</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Oldest first</Dropdown.Item>
              <Dropdown.Item href="#">Newest first</Dropdown.Item>
              <Dropdown.Item href="#">Most revenue</Dropdown.Item>
              <Dropdown.Item href="#">Less revenue</Dropdown.Item>
              <Dropdown.Item href="#">Recurring first</Dropdown.Item>
              <Dropdown.Item href="#">Top buyers first</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </DropdownStyled>
      </FlexContainer>
    </>
  );
};
export const SearchBar = styled.div`
  width: 440px;
  position: relative;
  input {
    padding-left: 40px;
    width: 100%;
    padding-right: 20px;
    border: 1px solid rgba(204, 212, 214, 0.5);
    border-radius: 5px;
    height: 36px;
    &,
    &::placeholder {
      font-weight: 500;
      font-size: 13px;
      color: #b3bec2;
    }
  }
  .icon-label {
    color: #b3bec2;
    left: 0;
    top: 9px;
    left: 13px;
  }
`;
const DropdownStyled = styled.div`
  .dropdown-container {
    &.show button {
      background-color: #ccd4d6 !important;
    }
    .dropdown-menu {
      border: 1px solid rgba(204, 212, 214, 0.3);
      box-shadow: 0px 8px 24px rgba(0, 39, 51, 0.1),
        0px 4px 4px rgba(0, 39, 51, 0.04);
      border-radius: 5px;
    }
    button {
      font-weight: 500;
      font-size: 13px;
      min-width: 123px;
      border-radius: 5px;
      color: #4c6870;
      position: relative;
      &:focus {
        box-shadow: none !important;
      }
      &.chevron-down:before {
        content: "";
        position: absolute;
        top: 11px;
        right: 10px;
        border: solid #4c6870;
        border-width: 0 1px 1px 0;
        display: inline-block;
        transform: rotate(45deg);
        padding: 3px;
      }
    }
    a {
      font-weight: 400;
      font-size: 14px;
      color: #002733;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
`;

export default Nav;
