import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { NavStyled } from "../Style"
import { Menu } from '../AllImages'

const Nav = ({
    sideBar,
    setSideBar,
}) => {
    const location = useLocation()

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <NavStyled>
                <div className="d-flex">
                    <button
                        className="menu"
                        onClick={sidebarHandler}>
                        <Menu />
                    </button>
                    <Link
                        to="/orders/awaiting-acceptance"
                        className={`nav-link-btn ${location.pathname === "/orders/awaiting-acceptance" ? "active" : ""}`}>
                        Awaiting acceptance <span>(8)</span>
                    </Link>
                    <Link
                        to="/orders/accepted"
                        className={`nav-link-btn ${location.pathname === "/orders/accepted" ? "active" : ""}`}>
                        Accepted <span>(2)</span>
                    </Link>
                    <Link
                        to="/orders/waiting-for-pickup"
                        className={`nav-link-btn ${location.pathname === "/orders/waiting-for-pickup" ? "active" : ""}`}>
                        Waiting for pickup <span>(2)</span>
                    </Link>
                </div>
            </NavStyled>
        </>
    )
}

export default Nav