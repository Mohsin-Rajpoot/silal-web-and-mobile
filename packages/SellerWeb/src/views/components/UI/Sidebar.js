import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Close, arrowDown, avatar, avatar2 } from "../AllImages";

const Sidebar = ({ sideBar, setSideBar }) => {
  const closeSidebar = () => {
    setSideBar(false);
  };
  const { pathname } = useLocation();

  return (
    <>
      <SidebarStyled className={sideBar ? "active" : ""}>
        {/* <Close
                    className="sidebar-close"
                    onClick={closeSidebar}
                /> */}
        {/* <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Profile</Accordion.Header>
                        <Accordion.Body>
                            <div className="body">
                                <img src={avatar} alt="avatar" className="avatar" />
                                <h1 className="dark-clr">Account’s name</h1>
                                <p>debra.holt@example.com</p>
                                <button className="theme-clr f-medium">Logout</button>
                            </div>
                            <div className="footer">
                                <img src={avatar2} alt="avatar" />
                                <div>
                                    <h1 className="dark-clr">Account’s name 2</h1>
                                    <p>debra.holt@example.com</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
        <div class="logo-text text-white">Silal Service</div>
        <Link
          to="/"
          className={
            pathname == "/" ||
            pathname == "/reviews" ||
            pathname == "/out-of-stock"
              ? "active"
              : ""
          }
        >
          Dashboard
        </Link>
        <Link
          to="/current-order"
          className={pathname == "/current-order" ? "active" : ""}
        >
          Orders
        </Link>
        <Link to="#">Clients</Link>
        <Link to="#">Products</Link>
        <Link to="#">Offers</Link>
        <Link to="#">Documents</Link>
        <Link to="#">Contact us</Link>
        <Link to="#">About app</Link>
        <Link to="#">Settings</Link>
      </SidebarStyled>
      {/* <BackDrop className={sideBar ? "active" : ""} /> */}
    </>
  );
};

const SidebarStyled = styled.aside`
  width: 200px;
  /* height: 100%;*/
  min-height: 100vh;
  margin-left:-200px;
  transition: 0.3s margin-left ease;
  background: #4c6870;
  /* border-radius: 0px 20px 20px 0px; */
  overflow-y: auto;
  padding: 43px 0px;
  &.active {
    margin-left:0px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.35px;
    margin-bottom:45px;
    padding-left:18px;
    padding-right:18px;
  }
  .sidebar-close {
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-bottom: 55px;
  }
  .accordion-item {
    background-color: transparent;
    border: none;
    margin-bottom: 20px;
    .accordion-button::after {
      background-image: url(${arrowDown});
      background-size: 13px;
    }
  }
  .accordion-button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    color: white;
    font-weight: 500;
    font-size: 13px;
  }
  .accordion-body {
    margin-top: 10px;
    border-radius: 5px;
    padding: 0;
    .body {
      border-radius: 5px 5px 0 0;
      padding: 10px;
      text-align: center;
      background-color: white;
      .avatar {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
        object-fit: contain;
      }
      h1 {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 5px;
      }
      p {
        font-size: 12px;
        color: #4c6870;
        margin-bottom: 10px;
      }
      button {
        font-size: 14px;
        border: none;
        background-color: transparent;
      }
    }
    .footer {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 0px 0px 5px 5px;
      padding: 10px;
      display: flex;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
      h1 {
        font-weight: bold;
        font-size: 12px;
        margin-bottom: 2px;
      }
      p {
        font-size: 10px;
        color: #4c6870;
        margin: 0;
      }
    }
  }
  a {
    color: white;
    font-weight: 500;
    font-size: 13px;
    display: block;
    padding:15px 18px;
    text-decoration: none;
    &.active,
    &:hover {
      background-color: var(--theme-clr);
      color: #fff;
    }
  }
  @media (max-width: 576px) {
    width: 300px;
  }
`;

// const BackDrop = styled.div`
//   background-color: rgb(172, 181, 183, 0.6);
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 400;
//   height: 100%;
//   width: 100%;
//   display: none;
//   &.active {
//     display: block;
//   }
// `;

export default Sidebar;
