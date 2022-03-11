import React, { useState } from 'react'
import NavCustom from '../../components/orders/Nav'
import DatePicker from 'react-date-picker'
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
    QtyDetail,
} from '../../components/UseFullElements'
import {
    ThemeTabs,
    TableStyled,
    ThemeAccordion,
} from '../../components/Style'
import {
    DropdownMenu,
    CalendarIcon,
} from "../../components/AllImages"

const Archive = () => {
    const [canvasShow, setCanvasShow] = useState(false)
    const canvasCloseHandler = () => setCanvasShow(false)
    const canvasShowHanler = () => setCanvasShow(true)
    const [dateValue, dateOnChange] = useState(new Date());

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
                        <DatePicker
                            onChange={dateOnChange}
                            value={dateValue}
                            calendarIcon={<CalendarIcon />}
                            clearIcon={null}
                            className="btn-style ms-3"
                        />
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
                    <Offcanvas.Title>
                        Order ID #247HW9
                        <TableSpan
                            classN="theme-clr"
                            text="Reccuring client"
                        />
                    </Offcanvas.Title>
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
                                    <DetailText
                                        title="Customer ID"
                                        detail="133"
                                    />
                                    <DetailText
                                        title="Phone"
                                        detail="*** *** **** 112"
                                    />
                                    <DetailText
                                        title="Address"
                                        detail="2715 Ash Dr. San Jose"
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>driver data</Accordion.Header>
                                <Accordion.Body>
                                    <DetailText
                                        title="Driver name"
                                        detail="Willson Genemal"
                                    />
                                    <DetailText
                                        title="Phone"
                                        detail="(208) 555-0112"
                                    />
                                    <DetailText
                                        title="Delivery time"
                                        detail="37 minutes"
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>order details</Accordion.Header>
                                <Accordion.Body>
                                    <DetailText
                                        title="Order created"
                                        detail="11.13.2021 17:33"
                                    />
                                    <DetailText
                                        title="Payment"
                                        detail="$ 13.00"
                                    />
                                    <DetailText
                                        title="Credit card"
                                        detail="**** **** **** 3782"
                                    />
                                    <hr />
                                    <QtyDetail
                                        qty="3"
                                        detail="French fries"
                                    />
                                    <QtyDetail
                                        qty="1"
                                        detail="Cheesecakes with sour cream and citrus hone"
                                    />
                                    <QtyDetail
                                        qty="1"
                                        detail="Cheesecakes with sour cream and citrus hone"
                                    />
                                    <QtyDetail
                                        qty="1"
                                        detail="Cheesecakes with sour cream and citrus hone"
                                    />
                                    <QtyDetail
                                        qty="1"
                                        detail="Cheesecakes with sour cream and citrus hone"
                                    />
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