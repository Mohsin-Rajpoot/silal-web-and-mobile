import React from 'react'
import '../../components/rsuite.css'
import { DateRangePicker } from 'rsuite'
import { Row, Col } from 'react-bootstrap'
import TopNav from '../../components/profile/Nav'
import Table from "../../components/Table"
import { SearchWindow } from '../../components/UseFullElements'
import {
    TableStyled,
} from '../../components/Style'
import { CalendarIcon } from '../../components/AllImages'

const PaymentHistory = ({ setSideBar, sideBar }) => {

    const columns = [
        {
            name: 'Order ID',
            selector: row => row.order,
        },
        {
            name: 'Customer ID',
            selector: row => row.customer,
        },
        {
            name: 'Order Date',
            selector: row => row.date,
        },
        {
            name: 'Payment',
            selector: row => row.payment,
        },
        {
            name: 'Amount',
            selector: row => row.amonut,
        },
        {
            name: 'Balance',
            selector: row => row.balance,
        },
    ];

    const data = [
        {
            id: 1,
            order: '#723DN2',
            customer: '2384',
            date: '312.12.2022',
            payment: <span className="stock-status bank">Bank wires</span>,
            amonut: '$ 13.90',
            balance: '$ 1272.20',
        },
        {
            id: 2,
            order: '#723DN2',
            customer: '2384',
            date: '312.12.2022',
            payment: <span className="stock-status bank">Bank wires</span>,
            amonut: '$ 13.90',
            balance: '$ 1272.20',
        },
        {
            id: 3,
            order: '#723DN2',
            customer: '2384',
            date: '312.12.2022',
            payment: <span className="stock-status credit">Credit card</span>,
            amonut: '$ 13.90',
            balance: '$ 1272.20',
        },
        {
            id: 4,
            order: '#723DN2',
            customer: '2384',
            date: '312.12.2022',
            payment: <span className="stock-status credit">Credit card</span>,
            amonut: '$ 13.90',
            balance: '$ 1272.20',
        },
        {
            id: 5,
            order: '#723DN2',
            customer: '2384',
            date: '312.12.2022',
            payment: <span className="stock-status credit">Credit card</span>,
            amonut: '$ 13.90',
            balance: '$ 1272.20',
        },
    ]

    return (
        <>
            <TopNav />
            <Row>
                <Col lg={5} md={6}>
                    <SearchWindow
                        height="36px"
                    />
                </Col>
                <Col lg={7} md={6} className="end">
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
                </Col>
            </Row>
            <TableStyled>
                <Table
                    cols={columns}
                    rows={data}
                />
            </TableStyled>
        </>
    )
}

export default PaymentHistory