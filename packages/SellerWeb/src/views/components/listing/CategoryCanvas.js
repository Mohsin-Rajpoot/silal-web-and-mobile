import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Offcanvas } from "react-bootstrap"
import { Label, Button } from "../Style"
import { SearchIcon } from '../AllImages'

const CategoryCanvas = ({ show, setShow }) => {
    return (
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="category-canvas">
            <Wrapper>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Select the item’s category</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="descp">Select the category in which you are going to sell the product. Didn’t find an appropriate category? <Link to="#">Contact us and we'll add it!</Link></p>
                    <Label color="#00273380">Search by сategory</Label>
                    <div className="search-div">
                        <SearchIcon />
                        <input type="text" placeholder="Electronics > Computers > Laptops" />
                    </div>
                    <div className="categories-main">

                    </div>
                    <div className="end">
                        <Button width="150px">Confirm</Button>
                    </div>
                </Offcanvas.Body>
            </Wrapper >
        </Offcanvas>
    )
}

const Wrapper = styled.div`
    .offcanvas-header {
        padding-bottom: 10px;
    }
    .descp {
        max-width: 442px;
        margin-bottom: 40px;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 15px;
        line-height: 140%;
        color: rgba(0, 39, 51, 0.8);
        a {
            text-decoration: none;
            color:#5AB3A8;
        }
    }
    .search-div {
        width: 100%;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid #5AB3A8;
        border-radius: 5px;
        padding: 0 0 0 11px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        svg {
            width: 17px;
            path {
                fill: #5AB3A8;
            }
        }
        input {
            flex: 1;
            height: 100%;
            border: none;
            padding-left: 11px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 125%;
            margin-right: 5px;
            &::placeholder {
                color: #B3BEC2;
            }
        }
    }
    .categories-main {
        background: #FAFAFA;
        border: 1px solid rgba(0, 39, 51, 0.1);
        border-radius: 5px;
        margin-bottom: 20px;
        height: 460px;
        width: 100%;
    }
`;

export default CategoryCanvas