import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../../../components/AllImages";
import { SearchBar } from "../../../components/clients/Nav";
// import NavStyled from "./NavStyled";
import {
  Button,
  FlexContainer,
  HeadingStyled,
  NavStyled,
} from "../../../components/Style";
import AddItemModal from "./AddItemModal";

const Nav = ({ sideBar, setSideBar }) => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const setModal = (view, type) => {
    setModalShow(view);
  };

  const sidebarHandler = () => {
    setSideBar(!sideBar);
  };

  return (
    <React.Fragment>
      <NavStyled className="flex-wrap">
        <div className="w-100 d-flex align-items-center">
          <button className="menu" onClick={sidebarHandler}>
            <Menu />
          </button>
          <HeadingStyled
            size="25px"
            weight="700"
            style={{ marginBottom: "15px" }}
          >
            Clients database
          </HeadingStyled>
        </div>
        <div className="d-flex">
          <Link
            to="/"
            className={`nav-link-btn active ${
              location.pathname == "/current-order" ? "active" : ""
            }`}
          >
            Current
          </Link>
          <Link
            to="/"
            className={`nav-link-btn ${
              location.pathname == "/archive-order" ? "active" : ""
            }`}
          >
            Past
          </Link>
        </div>
      </NavStyled>
      <FlexContainer>
        <SearchBar className="me-5 mb-3 w-100">
          <Form
            as="input"
            type="text"
            className="bg-white flex-1 w-100"
            placeholder="Search by orders #, phone or name..."
          />
          <Search className="icon-label position-absolute" size={17} />
        </SearchBar>
        <Link to="#" className="ms-auto mb-3 d-block">
          <Button className="w-230" onClick={() => setModal(true)}>
            Add new item
          </Button>
        </Link>
      </FlexContainer>
      <AddItemModal show={modalShow} setShow={setModal} />
      {/* <EditItemModal show={modalShow} setShow={setModal} /> */}
    </React.Fragment>
  );
};

export default Nav;
