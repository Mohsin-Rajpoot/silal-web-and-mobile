import React from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { PreOrderStatus, ModalNotes } from './Components'
import {
    Modal,
    Row,
    Col,
} from "react-bootstrap"
import {
    ThemeModal,
    CardStyled,
    Heading,
    ButtonText,
    Button,
    TableStyled,
} from "../Style"

const DetailModal = ({ showDetailModal, handleCloseDetailModal }) => {
    const customStyles = {
        headCells: {
            style: {
                fontSize: "12px",
                fontWeight: 700
            },
        }
    }
    const columns = [
        {
            name: 'Item name',
            selector: row => row.item,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Quantity',
            selector: row => row.remaining,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Price',
            selector: row => row.price,
        }
    ];

    const data = [
        {
            id: 1,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '3',
            status: <span className="stock-status low">Out of stock</span>,
            price: '$ 120.00',
        },
        {
            id: 2,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '3',
            status: <span className="stock-status low">Out of stock</span>,
            price: '$ 120.00',
        },
        {
            id: 3,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '3',
            status: <span className="stock-status low">Out of stock</span>,
            price: '$ 120.00',
        },
    ]

    return (
        <Modal show={showDetailModal} onHide={handleCloseDetailModal} centered className="detail-modal">
            <ThemeModal>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <CardStyled padding="10px 20px 20px 20px">
                        <div className="between">
                            <Heading>Out of stock items</Heading>
                            <div className="d-flex">
                                <ButtonText className="me-3" size="13px">Select all</ButtonText>
                                <Button width="95px" height="33px">Update</Button>
                            </div>
                        </div>
                        <TableStyled className="modal-table">
                            <DataTable
                                customStyles={customStyles}
                                selectableRows
                                columns={columns}
                                data={data}
                            />
                        </TableStyled>
                    </CardStyled>
                    <Row>
                        <Col md={6}>
                            <CardStyled padding="10px 20px 20px 20px">
                                <Heading>Notes</Heading>
                                <div style={{maxHeight:'121px', height:'121px'}}>
                                    <ModalNotes>
                                        <div className="checkbox-main">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p className="lato m-0">Conduct an inventory of ingredients</p>
                                    </ModalNotes>
                                    <ModalNotes>
                                        <div className="checkbox-main">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p className="lato m-0">Hold a meeting for new employees, give out documents</p>
                                    </ModalNotes>
                                </div>
                            </CardStyled>
                        </Col>
                        <Col md={6}>
                            <CardStyled padding="10px 20px 20px 20px">
                                <Heading>Pre-orders</Heading>
                                <Row>
                                    <Col xs={6}>
                                        <PreOrderStatus>
                                            <h1>8</h1>
                                            <p>Today</p>
                                        </PreOrderStatus>
                                    </Col>
                                    <Col xs={6}>
                                        <PreOrderStatus>
                                            <h1>36</h1>
                                            <p>This week</p>
                                        </PreOrderStatus>
                                    </Col>
                                </Row>
                                <Link to="/pre-order">
                                    <Button className="w-100" height="33px">Go to pre-orders</Button>
                                </Link>
                            </CardStyled>
                        </Col>
                    </Row>
                </Modal.Body>
            </ThemeModal>
        </Modal>
    )
}

export default DetailModal