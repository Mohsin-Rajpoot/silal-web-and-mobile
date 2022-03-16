import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {
    Menu,
    Notification
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
                    to="/"
                    className={`nav-link-btn ${location.pathname == "/" ? "active" : ""}`}>
                    Statistics
                </Link>
                <Link
                    to="/reviews"
                    className={`nav-link-btn ${location.pathname == "/reviews" ? "active" : ""}`}>
                    Reviews
                </Link>
                <Link
                    to="/out-of-stock"
                    className={`nav-link-btn ${location.pathname == "/out-of-stock" ? "active" : ""}`}>
                    Out-of-stock
                </Link>
            </div>
            {location.pathname == "/" &&
                <Link to="#" className="link">
                    <Notification />
                </Link>
            }
        </NavStyled>
    )
}

export default Nav