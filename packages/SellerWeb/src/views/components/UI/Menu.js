import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {
    Home,
    Order,
    Clients,
    Product,
} from "../AllImages"

const Menu = () => {
    return (
        <MenuStyled>
            <Link to="/" className="active">
                <Home />
                Home
            </Link>
            <Link to="/">
                <Order />
                Orders
            </Link>
            <Link to="/">
                <Clients />
                Clients
            </Link>
            <Link to="/">
                <Product />
                Products
            </Link>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    background: #FFFFFF;
    box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
        display: flex;
        align-items: center;
        font-weight: normal;
        font-weight: 600;
        font-size: 15px;
        color: #CCD4D6;
        text-decoration: none;
        position: relative;
        &.active,
        &:hover {
            color: var(--dark-clr);
            svg,
            path {
                fill: var(--theme-clr);
            }
        }
        &.active {
            &::before {
                content: "";
                position: absolute;
                top: -16px;
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--theme-clr);
                height: 2px;
                width: 200px;
            }
        }
        svg {
            width: 20px;
            height: 20px;
            margin-right: 11px;
            path {
                fill: #CCD4D6;
                fill-opacity: 1;
            }
        }
    }
`;

export default Menu