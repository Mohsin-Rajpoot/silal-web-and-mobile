import React, { useState } from 'react'
import NavCustom from '../../components/orders/Nav'
import {
    Tab,
    Nav,
    Offcanvas,
    Accordion,
} from 'react-bootstrap'
import TableData from "../../components/Table"
import {
    TableSpan,
    FilterBtn,
    DetailText,
} from '../../components/UseFullElements'
import {
    ThemeTabs,
    TableStyled,
    ThemeAccordion,
} from '../../components/Style'
import {
    DropdownMenu,
} from "../../components/AllImages"

const Archive = () => {
    const [canvasShow, setCanvasShow] = useState(false)
    const canvasCloseHandler = () => setCanvasShow(false)
    const canvasShowHanler = () => setCanvasShow(true)

    const columns = [
        {
            name: 'Order ID',
            selector: row => row.orderId,
        },
        {
            name: 'Customer name',
            selector: row => row.customerName,
        },
        {
            name: 'Customer ID',
            selector: row => row.customerId,
        },
        {
            name: 'Payment',
            selector: row => row.payment,
        },
        {
            name: 'Type',
            selector: row => row.type,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Total price',
            selector: row => row.price,
        },
        {
            name: 'Action',
            selector: row => row.action,
        }
    ];

    const data = [
        {
            id: 1,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Bank wires" classN="bank" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Completed" classN="completed" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 2,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Credit card" classN="credit" />,
            type: <TableSpan text="Take away" classN="takeaway" />,
            status: <TableSpan text="Completed" classN="completed" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 3,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 4,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 5,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 6,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 7,
            orderId: "#723DN2",
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
    ]

    return (
        <>
            <NavCustom />
            <Tab.Container id="orders-tab-container" defaultActiveKey="all-orders">
                <div className="between">
                    <ThemeTabs>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="all-orders">All orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="completed-orders">Completed</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="cancelled-orders">Cancelled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </ThemeTabs>
                    <div className="d-flex">
                        <FilterBtn click={canvasShowHanler} />
                    </div>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="all-orders">
                        <TableStyled>
                            <TableData
                                cols={columns}
                                rows={data}
                            />
                        </TableStyled>
                    </Tab.Pane>
                    <Tab.Pane eventKey="completed-orders">
                        <TableStyled>
                            <TableData
                                cols={columns}
                                rows={data}
                            />
                        </TableStyled>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cancelled-orders">
                        <TableStyled>
                            <TableData
                                cols={columns}
                                rows={data}
                            />
                        </TableStyled>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <Offcanvas show={canvasShow} onHide={canvasCloseHandler} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Order ID #247HW9</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ThemeAccordion>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>customer data</Accordion.Header>
                                <Accordion.Body>
                                    <DetailText
                                        title="Customer name"
                                        detail="Willson Genemal"
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>driver data</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>order details</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ThemeAccordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Archive