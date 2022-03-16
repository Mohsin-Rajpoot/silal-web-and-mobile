import React from "react"
import { Form } from "react-bootstrap"
import styled from "styled-components"
import { Menu } from "../AllImages"
import { Search } from "react-bootstrap-icons"
import {
  NavStyled,
  FlexContainer,
  HeadingStyled,
  Button,
} from "../Style"

const Nav = ({ sideBar, setSideBar }) => {
  const sidebarHandler = () => {
    setSideBar(!sideBar)
  }

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
        <HeadingStyled size="25px" weight="700" className="mb-26">
          Products
        </HeadingStyled>
        <SearchBar className="mx-5">
          <Form
            as="input"
            type="text"
            className="bg-white"
            placeholder="Search"
          />
          <Search className="icon-label position-absolute" size={17} />
        </SearchBar>
        <Button className="w-230 ms-auto mb-26">Add new item</Button>
      </FlexContainer>
    </>
  )
}

export const SearchBar = styled.div`
  width: 440px;
  position: relative;
  margin-bottom: 26px;
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

export default Nav;
