import React from 'react'
import Nav from '../../components/orders/Nav'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {
    ReceivedOrder,
    AcceptedOrder,
    PickupOrder,
    PickupCard,
} from '../../components/orders/Components'
import {
    CardStyled,
    Heading,
} from '../../components/Style'
import {
    CycleIcon,
} from '../../components/AllImages'

const CurrentOrder = ({ setSideBar }) => {
    return (
        <>
            <Nav setSideBar={setSideBar} />
            <Row>
                <Col lg={5} md={12}>
                    <CardStyled className="bg-grey current-order-card-height">
                        <Heading>Received</Heading>
                        <ReceivedOrder
                            orderNumber="#247hw9"
                            time="1:27 min"
                        />
                        <ReceivedOrder
                            orderNumber="#247hw9"
                            time="1:27 min"
                            clockIcon={true}
                        />
                        <ReceivedOrder
                            orderNumber="#247hw9"
                            time="1:27 min"
                        />
                    </CardStyled>
                </Col>
                <Col lg={5} md={12}>
                    <CardStyled className="bg-grey current-order-card-height">
                        <Heading>Accepted</Heading>
                        <AcceptedOrder
                            orderNumber="#247hw9"
                            time="1:27 min"
                            PersonName="Wade Warren"
                            number="(808) 555-0111"
                            distance="2.4 km"
                        />
                        <AcceptedOrder
                            orderNumber="#247hw9"
                            time="1:27 min"
                            PersonName="Wade Warren"
                            number="(808) 555-0111"
                            distance="2.4 km"
                        />
                    </CardStyled>
                </Col>
                <Col lg={2} md={12}>
                    <PickupCard>
                        <div className="body">
                            <Heading className="text-white">Ready for pickup</Heading>
                            <Row>
                                <Col lg={12} sm={4}>
                                    <Link to="/order-detail" className="text-decoration-none">
                                        <PickupOrder
                                            orderNumber="#247hw9"
                                            time="17 min ago"
                                        />
                                    </Link>
                                </Col>
                                <Col lg={12} sm={4}>
                                    <Link to="/order-detail" className="text-decoration-none">
                                        <PickupOrder
                                            orderNumber="#247hw9"
                                            time="17 min ago"
                                        />
                                    </Link>
                                </Col>
                                <Col lg={12} sm={4}>
                                    <Link to="/order-detail" className="text-decoration-none">
                                        <PickupOrder
                                            orderNumber="#247hw9"
                                            time="17 min ago"
                                        />
                                    </Link>
                                </Col>
                                <Col lg={12} sm={4}>
                                    <Link to="/order-detail" className="text-decoration-none">
                                        <PickupOrder
                                            orderNumber="#247hw9"
                                            time="1h 50min ago "
                                        />
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                        <div className="bottom center">
                            <CycleIcon />
                            <div>
                                <h2>on-way</h2>
                                <h3>4 orders</h3>
                            </div>
                        </div>
                    </PickupCard>
                </Col>
            </Row>
        </>
    )
}

export default CurrentOrder