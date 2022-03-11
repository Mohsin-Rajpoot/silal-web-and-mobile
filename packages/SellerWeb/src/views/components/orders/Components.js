import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    Button,
    ButtonText,
} from '../Style'
import {
    xIcon,
    clock,
    walkIcon,
    locationIcon,
} from '../AllImages'

const ReceivedOrder = ({
    orderNumber,
    time,
    clockIcon,
}) => {
    return (
        <ReceivedOrderStyled>
            <div className="between">
                <div className="d-flex">
                    {clockIcon &&
                        <span className="clock-icon">
                            <img src={clock} alt="icon" />
                        </span>
                    }
                    <Link to="/order-detail">
                        <h1>Order ID <span>{orderNumber}</span></h1>
                    </Link>
                </div>
                <h2>{time}</h2>
            </div>
            <div className="order-detail">
                <span>2</span>
                <img src={xIcon} alt="x" />
                <span>French fries</span>
            </div>
            <div className="order-detail">
                <span>1</span>
                <img src={xIcon} alt="x" />
                <span>Cheesecakes with sour cream and citrus hone</span>
            </div>
            <span className="more">3 more</span>
        </ReceivedOrderStyled>
    )
}

const AcceptedOrder = ({
    orderNumber,
    time,
    PersonName,
    number,
    distance,
}) => {
    return (
        <AcceptedOrderStyled>
            <div className="between">
                <Link to="/order-detail">
                    <h1>Order ID <span>{orderNumber}</span></h1>
                </Link>
                <h2>{time}</h2>
            </div>
            <div className="d-flex mb-10">
                <div className="icon-div blue center">
                    <img src={walkIcon} alt="icon" />
                </div>
                <div>
                    <h3>{PersonName}</h3>
                    <p>{number}</p>
                </div>
            </div>
            <div className="d-flex mb-10">
                <div className="icon-div purple center">
                    <img src={locationIcon} alt="icon" />
                </div>
                <h3 className="mt-1 pt-2">{distance}</h3>
            </div>
            <div className="between mb-1">
                <ButtonText>Change estimatoin time</ButtonText>
                <Button>Ready</Button>
            </div>
        </AcceptedOrderStyled>
    )
}

const PickupOrder = ({
    orderNumber,
    time,
}) => {
    return (
        <PickupOrderStyled>
            <h6 className="dark-clr">{orderNumber}</h6>
            <p>{time}</p>
        </PickupOrderStyled>
    )
}

const OrderListItem = ({ ListItem }) => {
    const {
        img,
        name,
        qty,
        price,
        totalPrice,
        note,
        customization,
    } = ListItem;
    return (
        <OrderListItemStyled>
            <div className="d-flex align-items-center">
                <div className="item-width d-flex align-items-center">
                    <img src={img} alt="img" />
                    <h6 className="pr-2">{name}</h6>
                </div>
                <div className="col-width">
                    <h6>{qty}</h6>
                </div>
                <div className="col-width">
                    <h6>{price}</h6>
                </div>
                <div className="col-width right">
                    <h6><b>{totalPrice}</b></h6>
                </div>
            </div>
            {note &&
                <div className="note">Note: <span>{note}</span></div>
            }
            {customization &&
                // <span>Customization</span>
                customization.map((customize, index) => {
                    return (
                        <div className="customization" key={index}>
                            <div className="item-width d-flex align-items-start">
                                <h5>{customize.custItem}</h5>
                            </div>
                            <div className="col-width">
                                <h5>{customize.custQty}</h5>
                            </div>
                            <div className="col-width">
                                <h5>{customize.custPrice}</h5>
                            </div>
                            <div className="col-width right">
                                <h5><b>{customize.custTotalPrice}</b></h5>
                            </div>
                        </div>
                    )
                })
            }
        </OrderListItemStyled>
    )
}

const ReceivedOrderStyled = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    a {
        text-decoration: none;
    }
    .between {
        margin-bottom: 18px;
        h1 {
            font-size: 15px;
            color: #CCD4D6;
            margin: 0;
            span {
                color: #002733;
                margin: 0 0 0 5px;
            }
        }
        h2 {
            font-size: 15px;
            text-align: right;
            color: #002733;
            margin: 0;
        }
    }
    .order-detail {
        display: flex;
        align-items: baseline;
        margin-bottom: 10px;
        span:first-of-type {
            min-width: 10px;
            display: block;
        }
        span {
            font-size: 16px;
            letter-spacing: -0.408px;
            color: #002733;
        }
        img {
            margin: 0 7px;
        }
    }
    .more {
        font-weight: 500;
        font-size: 12px;
        color: #5AB3A8;
        background: rgba(90, 179, 168, 0.15);
        border-radius: 4px;
        padding: 2px 5px;
        margin-bottom: 10px;
        margin-left: 34px;
        cursor: pointer;
    }
    .clock-icon {
        padding: 3px 11px;
        background: #F2A341;
        border-radius: 0px 0px 5px 5px;
        height: 33px;
        width: 50px;
        margin: -10px 10px 0 0;
    }
`;

const AcceptedOrderStyled = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    a {
        text-decoration: none;
    }
    .between {
        margin-bottom: 18px;
        h1 {
            font-size: 15px;
            color: #CCD4D6;
            margin: 0;
            span {
                color: #002733;
                margin: 0 0 0 5px;
            }
        }
        h2 {
            font-size: 15px;
            text-align: right;
            color: #002733;
            margin: 0;
        }
    }
    .icon-div {
        border-radius: 5px;
        height: 44px;
        min-width: 44px;
        width: 44px;
        margin-right: 10px;
        &.blue {
            background: #DEEBFF;
        }
        &.purple {
            background: #EAE6FF;
        }
    }
    h3 {
        font-weight: normal;
        font-size: 17px;
        letter-spacing: -0.408px;
        color: #000000;
        margin-bottom: 4px;
    }
    p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        margin: 0;
    }
`;

const PickupOrderStyled = styled.div`
    background: #E5EAEB;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
    h6 {
        font-weight: 500;
        font-size: 15px;
        letter-spacing: -0.408px;
        margin: 0;
    }
    p {
        font-weight: normal;
        font-size: 15px;
        color: #4C6870;
        margin: 0;
    }
`;

const PickupCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #4C6870;
    min-height: 600px;
    height: calc(100vh - 100px);
    .body {
        padding: 20px;
        height: calc(100% - 65px);
        overflow-y: auto;
    }
    .bottom {
        background: #5AB3A8;
        border-radius: 0px 0px 5px 5px;
        height: 65px;
        width: 100%;
        padding: 12px 20px;
        h2 {
            font-weight: bold;
            font-size: 15px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-bottom: 5px;
        }
        h3 {
            font-weight: normal;
            font-size: 15px;
            color: #FFFFFF;
            margin: 0;
        }
        svg {
            margin-right: 8px;
        }
    }
`;

const OrderIdMain = styled.div`
    display: flex;
    align-items: center;
    margin: 27px 0 11px;
    svg {
        margin-right: 15px;
    }
    h1 {
        font-weight: bold;
        font-size: 25px;
        line-height: 38px;
        color: #002733;
        margin: 0;
    }
`;

const OrderListMain = styled.div`
    padding: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 20px;
    h1 {
        font-weight: 600;
        font-size: 19px;
        margin: 0 10px 20px 0;
        color: #002733;
        span {
            color: #4C6870;
        }
    }
    h2 {
        font-weight: bold;
        font-size: 15px;
        text-align: right;
        letter-spacing: -0.408px;
        color: #002733;
        margin-bottom: 25px;
    }
    .method {
        margin-bottom: 21px;
        border-radius: 5px;
        padding: 3px 9px;
        font-weight: 500;
        font-size: 11px;
        &.card {
            background: #E6FCFF;
            color: #008DA6;
        }
        &.cash {
            background: #fff9c0;
            color: #dcbf00;
        }
    }
    .bottom {
        background: #4C6870;
        border-radius: 0px 0px 5px 5px;
        padding: 10px 20px;
        margin: 0 -20px -20px -20px;
        h5 {
            font-weight: 600;
            font-size: 13px;
            line-height: 125%;
            color: #CCD4D6;
            margin: 0 0 5px 0;
        }
        h4 {
            font-weight: 600;
            font-size: 19px;
            line-height: 23px;
            color: #FFFFFF;
            margin: 0;
        }
    }
`;

const OrderList = styled.div`
    overflow-x: auto;
    .head {
        display: flex;
        h3 {
            margin: 0 0 10px 0;
            font-weight: 500;
            font-size: 13px;
            color: #4C6870;
        }
        .item-width {
            min-width: 200px;
            flex: 2;
        }
        .col-width {
            min-width: 60px;
            flex: 1;
            &.right {
                text-align: right;
            }
        }
    }  
`;

const OrderListItemStyled = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid #EBEEEF;
    &:last-of-type {
        border: none;
    }
    img {
        height: 64px;
        width: 64px;
        min-width: 64px;
        border-radius: 5px;
        object-fit: cover;
        margin-right: 10px;
    }
    h6 {
        font-weight: normal;
        font-size: 13px;
        color: #002733;
        margin: 0;
        &.pr-2 {
            padding-right: 10px;
        }
    }
    .item-width {
        min-width: 200px;
        flex: 2;
    }
    .col-width {
        min-width: 60px;
        flex: 1;
        &.right {
            text-align: right;
        }
    }
    .note {
        background: #F2F2F2;
        border-radius: 5px;
        padding: 10px 14px;
        margin-top: 15px;
        font-weight: 500;
        font-size: 13px;
        color: #002733;
        span {
            color: #9FADB1;
        }
    }
    .customization {
        display: flex;
        align-items: center;
        padding-top: 10px;
        &:first-of-type {
            border-top: 1px solid #EBEEEF;
        }
        .item-width {
            h5 {
                padding-left: 75px;
            }
        }
        span {
            width: 63px;
            height: 17px;
            background: #F2A341;
            border-radius: 3px;
            font-weight: normal;
            font-size: 9px;
            color: white;
        }
        h5 {
            font-weight: normal;
            font-size: 12px;
            color: #002733;
            margin: 0;
        }
    }
`;

export {
    ReceivedOrder,
    AcceptedOrder,
    PickupOrder,
    OrderListItem,
    OrderListMain,
    PickupCard,
    OrderIdMain,
    OrderList,
}