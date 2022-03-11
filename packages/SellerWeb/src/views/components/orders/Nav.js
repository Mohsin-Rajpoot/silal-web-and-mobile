import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {
    Menu,
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
        line-height: 1;
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
            span {
                color: white;
            }
        }
        span {
            color: #A0AFB4;
        }
    }
    .link {
        svg {
            width: 42px;
        }
    }
`;

export default Nav