import React from "react"
import ReactStars from "react-rating-stars-component"
import styled from "styled-components"
import { Row, Col } from 'react-bootstrap'
import {
    Button
} from '../../components/Style'
import {
    star
} from '../AllImages'

const RestaurantCard = ({
    icon,
    heading,
    number,
    rate,
    rateStatus,
    starI
}) => {
    return (
        <RestaurantCardStyled>
            <div className="icon center">
                <img src={icon} alt="icon" />
            </div>
            <div>
                <div className="d-flex align-items-start">
                    <h2 className="f-medium">{heading}</h2>
                    {rate &&
                        <span className={`percentage f-medium ${rateStatus ? "green" : "red"}`}>{rate}</span>
                    }
                </div>
                <div className="d-flex">
                    {starI &&
                        <img src={star} alt="star" className="star" />
                    }
                    <h3 className="f-semibold dark-clr">{number}</h3>
                </div>
            </div>

        </RestaurantCardStyled >
    )
}

const HotProduct = ({
    img,
    pName,
    price,
    number,
}) => {
    return (
        <HotProductStyled>
            <img src={img} alt="dish" />
            <div className="d-flex justify-content-between align-items-center w-100">
                <div className="flex-1">
                    <h2 className="dark-clr">{pName}</h2>
                    <h3 className="dark-clr f-semibold">{price}</h3>
                </div>
                <span className="center">{number}</span>
            </div>
        </HotProductStyled>
    )
}

const Review = ({
    reviewBy,
    rating,
    time,
    text,
    order,
}) => {
    return (
        <ReviewStyled>
            <Row>
                <Col lg={2} md={3} sm={12}>
                    <h1 className="dark-clr">{reviewBy}</h1>
                </Col>
                <Col lg={10} md={9} sm={12}>
                    <div className="between">
                        <div className="d-flex">
                            <h2>4.0</h2>
                            <ReactStars
                                size={24}
                                count={5}
                                value={rating}
                                edit={false}
                                activeColor="#FFC400"
                            />
                        </div>
                        <h6 className="time">{time}</h6>
                    </div>
                    <p className="dark-clr">{text}</p>
                    <div className="order">
                        <h3 className="dark-clr m-0">Order: <span>{order}</span></h3>
                    </div>
                    <div className="between">
                        <Button>Reply</Button>
                        <button className="contact-support">Contact support</button>
                    </div>
                </Col>
            </Row>
        </ReviewStyled>
    )
}

const RestaurantCardStyled = styled.div`
    display: flex;
    align-items: flex-start;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
    border-radius: 5px;
    padding: 20px 15px;
    max-height: 100%;
    margin-bottom: 20px;
    .icon {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: rgba(90, 179, 168, 0.15);
        margin-right: 14px;
    }
    h2 {
        color: #4C6870;
        margin: 0 10px 10px 0;
        font-size: 13px
    } 
    h3 {
        font-size: 23px;
        margin: 0;
    }
    .percentage {
        border-radius: 5px;
        font-size: 11px;
        padding: 2px 7px;
        &.green {
            background: #E3FCEF;
            color: #36B37E; 
        }
        &.red {
            color: #FF5630;
            background: #FFEBE6;
        }
    }
    .star {
        width: 22px;
        margin-right: 7px;
        margin-bottom: 2px;
    }
`;

const HotProductStyled = styled.div`
    display: flex;
    align-items: flex-start;
    background: #F4F7F8;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    &:last-of-type {
        margin-bottom: 0;
    }
    img {
        border-radius: 5px;
        width: 70px;
        height: 70px;
        object-fit: cover;
        margin-right: 10px;
    }
    h2 {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 8px;
    }
    h3 {
        font-size: 16px;
        margin-bottom: 5px;
    }
    span {
        background-color: var(--theme-clr);
        font-weight: 600;
        font-size: 15px;
        text-align: center;
        color: #FFFFFF;
        height: 32px;
        width: 32px;
        border-radius: 50%;
    }
`;

const ReviewStyled = styled.div`
    border-bottom: 1px solid rgba(0, 39, 51, 0.08);
    padding: 20px 0;
    width: 100%;
    display: flex;
    .row {
        width: 100%;
    }
    h1 {
        font-weight: bold;
        font-size: 13px;
    }
    h2 {
        font-weight: 600;
        font-size: 18px;
        color: #000000;
        margin: 2px 7px 10px 0;
    }
    .time {
        font-weight: 500;
        font-size: 13px;
        text-align: right;
        color: #4C6870;
        margin: 0 0 10px 0;
    }
    p {
        font-size: 13px;
        margin-bottom: 10px;
    }
    .order {
        background: #F2F2F2;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px 15px;
        h3 {
            font-weight: 500;
            font-size: 13px;
            line-height: 1.3;
        }
        span {
            color: #9FADB1;
        }
    }
    .contact-support {
        border: none;
        background-color: transparent;
        font-weight: 600;
        font-size: 13px;
        color: #4C6870;
    }
`;

const ReviewOverviewText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 39, 51, 0.08);
    h2 {
        font-weight: normal;
        font-size: 13px;
        color: #002733;
        margin: 0;
    }
    h3 {
        font-weight: bold;
        font-size: 13px;
        text-align: right;
        color: #000000;
        margin: 0;
    }
`;

export {
    RestaurantCard,
    HotProduct,
    Review,
    ReviewOverviewText,
}