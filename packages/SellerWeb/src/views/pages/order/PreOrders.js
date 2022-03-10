import React from 'react'
import Nav from '../../components/orders/Nav'
import { Row, Col } from 'react-bootstrap'
import { PreOrder } from '../../components/orders/Components'
import {
    CardStyled,
    Heading,
} from '../../components/Style'

const PreOrders = ({ setSideBar }) => {
    return (
        <>
            <Nav setSideBar={setSideBar} />
            <Row>
                <Col md={6}>
                    <CardStyled className="bg-grey">
                        <Heading>For today</Heading>
                        <PreOrder
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                    </CardStyled>
                </Col>
                <Col md={6}>
                    <CardStyled className="bg-grey">
                        <Heading>This week</Heading>
                        <PreOrder
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                    </CardStyled>
                </Col>
            </Row>
        </>
    )
}

export default PreOrders