import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {
    Menu,
} from '../AllImages'
import { NavStyled } from "../Style"

const Nav = ({
    sideBar,
    setSideBar,
}) => {
    const location = useLocation()

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <NavStyled>
            <div className="d-flex">
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <Link
                    to="/current-order"
                    className={`nav-link-btn ${location.pathname == "/current-order" ? "active" : ""}`}>
                    Current orders
                </Link>
                <Link
                    to="/pre-order"
                    className={`nav-link-btn ${location.pathname == "/pre-order" ? "active" : ""}`}>
                    Pre-orders <span>(8)</span>
                </Link>
                <Link
                    to="/archive-order"
                    className={`nav-link-btn ${location.pathname == "/archive-order" ? "active" : ""}`}>
                    Archive
                </Link>
            </div>
        </NavStyled>
    )
}

export default Nav