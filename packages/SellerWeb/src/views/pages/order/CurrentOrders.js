import React, { useState } from 'react'
import Nav from '../../components/orders/Nav'
import { Link } from 'react-router-dom'
import { Row, Col, Modal } from 'react-bootstrap'
import {
    ReceivedOrder,
    AcceptedOrder,
    PickupOrder,
    PickupCard,
} from '../../components/orders/Components'
import {
    CardStyled,
    Heading,
    Button,
    RangeSlider,
} from '../../components/Style'
import {
    CycleIcon,
} from '../../components/AllImages'

const CurrentOrder = ({ setSideBar, sideBar }) => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <>
            <Nav setSideBar={setSideBar} sideBar={sideBar} />
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
                            btn1F={() => setModalShow(true)}
                        />
                        <AcceptedOrder
                            orderNumber="#247hw9"
                            time="1:27 min"
                            PersonName="Wade Warren"
                            number="(808) 555-0111"
                            distance="2.4 km"
                            btn1F={() => setModalShow(true)}
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
                                            time="1h 50min ago"
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

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                centered
                dialogClassName="modal-546"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Order will be ready in: <span>7 minutes</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RangeSlider className="mt-4">
                        <input type="range" min="0" max="100" step="14" className="slider-range" />
                        <ul className="mb-0 p-0 list-unstyled d-flex">
                            <li>-15 min</li>
                            <li>-10 min</li>
                            <li>-5 min</li>
                            <li className="current">(19:22 PM)</li>
                            <li className="ms-auto">+5 min</li>
                            <li>+10 min</li>
                            <li>+15 min</li>
                        </ul>
                    </RangeSlider>
                    <div className="d-flex mt-4 align-items-center">
                        <label className="me-3 f-semibold lato">Add manually</label>
                        <input
                            type="number"
                            placeholder="+30 min"
                            className="border px-3 number-apperance"
                            style={{ height: "34px", width: "100px", borderRadius: "5px" }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-50 m-0 pe-2">
                        <Button className="w-100 m-0" style={{ background: "#CCD4D6", color: "rgba(0, 39, 51, 0.5)" }} onClick={() => setModalShow(false)}>
                            Cancel
                        </Button>
                    </div>
                    <Button className="w-50 m-0" onClick={() => setModalShow(false)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CurrentOrder