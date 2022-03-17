import React from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    DropdownMenu
} from '../AllImages'

const Category = ({
    categoryName,
    itemNumbers,
    classN,
    link,
}) => {
    return (
        <CategoryStyled className={classN}>
            <Link to={link} />
            <h1>{categoryName}</h1>
            <p>{itemNumbers} items</p>

            <button className="dropdown-btn">
                <DropdownMenu />
            </button>
        </CategoryStyled>
    )
}

const CategoryStyled = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
    border-radius: 5px;
    width: 100%;
    height: 113px;
    position: relative;
    margin-bottom: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    a {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    &.grey {
        background: rgba(204, 212, 214, 0.5);
        box-shadow: none;
        p {
            color: #4C6870;
        }
        .dropdown-btn {
            svg, path {
                fill: #4C6870;
            }
        }
    }
    h1 {
        font-weight: 600;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #002733;
        margin-bottom: 2px;
    }
    p {
        font-weight: 600;
        font-size: 13px;
        line-height: 120%;
        color: #CCD4D6;
        margin: 0;
    }
    .dropdown-btn {
        width: 20px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 20;
        svg, path {
            fill: #CCD4D6;
        }
    }
`;

const AddCategory = styled(CategoryStyled)`
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h2 {
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
        color: #CCD4D6;
        margin: 0;
    }
    .plus {
        z-index: 20;
        border: none;
        background-color: transparent;
        svg {
            fill: #CCD4D6;
        }
    }
`;

const EditProductContainer = styled.div`
    .product-img-main {
        position: relative;
        border-radius: 5px;
        height: 200px;
        width: 100%;
        margin-bottom: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .edit {
            position: absolute;
            width: 30px;
            height: 30px;
            right: 10px;
            bottom: 10px;
            background: rgba(255, 255, 255, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(20px);
            border-radius: 5px;
        }
    }
    .charac-left {
        font-weight: 400;
        font-size: 12px;
        line-height: 120%;
        margin-bottom: 6px;
        text-align: right;
        letter-spacing: -0.408px;
        color: #CCD4D6;
    }
`;

const AddOns = styled.div`
    background: #F2F4F5;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 20px;
    width: 100%;
    h1, span {
        font-size: 16px;
        line-height: 130%;
        letter-spacing: -0.408px;
        margin: 0;
    }
    h1 {
        color: #002733;
        font-weight: 500;
    }
    span {
        color: #7E9298;
        font-weight: 400;
    }
    .item {
        background: #CCD4D6;
        border-radius: 5px;
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        letter-spacing: -0.408px;
        color: #4C6870;
        margin: 0 10px 10px 0;
        padding: 9px 20px;
    }
`;

export {
    Category,
    AddCategory,
    EditProductContainer,
    AddOns,
}