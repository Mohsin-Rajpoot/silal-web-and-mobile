import React, { useState } from 'react'
import '../../components/rsuite.css'
import { DateRangePicker } from 'rsuite'
import NavCustom from '../../components/orders/Nav'
// import DatePicker from 'react-date-picker'
// import TableData from "../../components/Table"
import DataTable from 'react-data-table-component'
import {
    Tab,
    Nav,
    Offcanvas,
    Accordion,
    Dropdown,
} from 'react-bootstrap'
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

const Archive = ({ setSideBar, sideBar }) => {
    const [canvasShow, setCanvasShow] = useState(false)
    const canvasCloseHandler = () => setCanvasShow(false)
    const canvasShowHanler = () => setCanvasShow(true)
    // const [dateValue, dateOnChange] = useState(new Date())

    const customStyles = {
        headCells: {
            style: {
                fontSize: "13px",
                fontWeight: 700
            },
        }
    }
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
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Bank wires" classN="bank" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Completed" classN="completed" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 2,
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Credit card" classN="credit" />,
            type: <TableSpan text="Take away" classN="takeaway" />,
            status: <TableSpan text="Completed" classN="completed" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 3,
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 4,
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 5,
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 6,
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 7,
            orderId: <div className="cursor-pointer" onClick={canvasShowHanler}>#723DN2</div>,
            customerName: 'Leslie A.',
            customerId: '2327',
            payment: <TableSpan text="Cash" classN="cash" />,
            type: <TableSpan text="Delivery" classN="delivery" />,
            status: <TableSpan text="Cancelled" classN="cancelled" />,
            price: '$ 120.00',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Refund</Dropdown.Item>
                        <Dropdown.Item href="#">Contact</Dropdown.Item>
                        <Dropdown.Item href="#">Call customer-service</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
    ]

    return (
        <>
            <NavCustom setSideBar={setSideBar} sideBar={sideBar} />
            <div className="archive-content">
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
                            <FilterBtn />
                            {/* <DatePicker
                                onChange={dateOnChange}
                                value={dateValue}
                                calendarIcon={<CalendarIcon />}
                                clearIcon={null}
                                className="btn-style ms-3"
                            /> */}
                            <div className="archive-range">
                                <DateRangePicker
                                    className="archive-table-range"
                                    placement='bottomRight'
                                    showOneCalendar
                                    format="dd MMMM yy"
                                    placeholder="dd mm yy"
                                    character="&#160;&#160;-&#160;&#160;"
                                    caretAs={CalendarIcon}
                                />
                            </div>
                        </div>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="all-orders">
                            <TableStyled>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    customStyles={customStyles}
                                    pagination
                                />
                            </TableStyled>
                        </Tab.Pane>
                        <Tab.Pane eventKey="completed-orders">
                            <TableStyled>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    customStyles={customStyles}
                                    pagination
                                />
                            </TableStyled>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cancelled-orders">
                            <TableStyled>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    customStyles={customStyles}
                                    pagination
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
                            <Accordion alwaysOpen>
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
            </div>
        </>
    )
}

export default Archive