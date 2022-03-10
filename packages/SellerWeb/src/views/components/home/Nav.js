import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {
    Menu,
    Notification
} from '../AllImages'

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

export const NavStyled = styled.nav`
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    .menu {
        border: none;
        background-color: transparent;
        margin-right: 20px;
        padding: 0 8px 2px;
        width: 32px;
        height: 32px;
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
        color: #4C6870;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 15px;
        white-space: nowrap;
        &.active,
        &:hover {
            background: var(--theme-clr);
            color: white;
        }
    }
    .link {
        svg {
            width: 42px;
        }
    }
`;

export default Nav