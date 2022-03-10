import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {
    OrderIdMain,
    OrderListMain,
    OrderList,
    OrderListItem,
    OrderDetails,
    OrderHistory,
} from '../../components/orders/Components'
import {
    Heading,
    CardStyled,
} from '../../components/Style'
import {
    BackArrow,
} from '../../components/AllImages'
import { orderListData } from './DummyData'

const OrderDetail = () => {
    return (
        <>
            <OrderIdMain>
                <Link to="/current-order">
                    <BackArrow />
                </Link>
                <h1>Order ID #247HW9</h1>
            </OrderIdMain>
            <Row>
                <Col lg={8}>
                    <OrderListMain>
                        <div className="between flex-wrap">
                            <div className="d-flex align-items-center">
                                <h1>Order list <span>(6 items)</span></h1>
                                <span className="method card">Credit card</span>
                            </div>
                            <h2>14:58:15</h2>
                        </div>
                        <OrderList>
                            <div className="head">
                                <h3 className="item-width">Item</h3>
                                <h3 className="col-width">Q-ty</h3>
                                <h3 className="col-width">Price</h3>
                                <h3 className="col-width right">Total price</h3>
                            </div>
                            {orderListData.map((item, index) => {
                                return (
                                    <OrderListItem
                                        key={index}
                                        ListItem={item}
                                    />
                                )
                            })}
                        </OrderList>
                        <div className="bottom">
                            <div className="between">
                                <h5>Delivery</h5>
                                <h5>$ 2.00</h5>
                            </div>
                            <div className="between">
                                <h4>Order total</h4>
                                <h4>$ 21.70</h4>
                            </div>
                        </div>
                    </OrderListMain>
                </Col>
                <Col lg={4}>
                    <CardStyled>
                        <Heading>Details</Heading>
                        <OrderDetails
                            number1="(808) 555-0111"
                            number2="(808) 555-0111"
                            address="8502 Preston Rd. Inglewood"
                            distance="15 min away"
                        />
                    </CardStyled>
                    <CardStyled>
                        <Heading>History</Heading>
                        <OrderHistory
                        />
                    </CardStyled>
                </Col>
            </Row>
        </>
    )
}

export default OrderDetail