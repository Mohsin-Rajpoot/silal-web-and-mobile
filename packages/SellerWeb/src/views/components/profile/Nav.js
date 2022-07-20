import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SimpleNav, NavStyled } from "../Style";
import { Menu } from "../AllImages";

const Nav = ({ sideBar, setSideBar }) => {
  const { pathname } = useLocation();

  const sidebarHandler = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <SimpleNav>
        <button className="menu" onClick={sidebarHandler}>
          <Menu />
        </button>
        <h1>Profile</h1>
      </SimpleNav>
      <NavStyled>
        <div className="d-flex">
          <Link
            to="/profile/profile"
            className={`nav-link-btn ${
              pathname === "/profile/profile" ? "active" : ""
            }`}
          >
            Profile
          </Link>
          <Link
            to="/profile/opening-hours"
            className={`nav-link-btn ${
              pathname === "/profile/opening-hours" ? "active" : ""
            }`}
          >
            Opening hours
          </Link>
          <Link
            to="/profile/payment-history"
            className={`nav-link-btn ${
              pathname === "/profile/payment-history" ? "active" : ""
            }`}
          >
            Payment history
          </Link>
          <Link
            to="/profile/transaction-ledger"
            className={`nav-link-btn ${
              pathname === "/profile/transaction-ledger" ? "active" : ""
            }`}
          >
            Transaction ledger
          </Link>
        </div>
      </NavStyled>
    </>
  );
};

export default Nav;
