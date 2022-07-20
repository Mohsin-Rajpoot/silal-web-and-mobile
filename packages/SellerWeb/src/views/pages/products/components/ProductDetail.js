import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import {
    Dropdown,
    Offcanvas,
    Row,
    Col,
    Modal,
} from 'react-bootstrap'
import {
    EditProductContainer,
    AddOns,
} from '../../../components/products/Components'
import {
    TableStyled,
    Button,
    Title,
    Label,
    Select,
    Textarea,
    Input,
    EditButton,
    ThemeModal,
} from '../../../components/Style'
import {
    DropdownMenu,
    dish,
    Burger,
    EditIcon,
    EditWhite,
} from "../../../components/AllImages"

const ProductDetail = () => {
    const [canvasShow, setCanvasShow] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setCanvasShow(false)
    const handleShow = () => setCanvasShow(true)

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)


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
            name: 'Photo',
            selector: row => row.photo,
        },
        {
            name: 'Item name',
            selector: row => row.itemName,
        },
        {
            name: 'Item ID',
            selector: row => row.itemId,
        },
        {
            name: 'Last purchase',
            selector: row => row.purchase,
        },
        {
            name: 'Weight',
            selector: row => row.weight,
        },
        {
            name: 'On stock',
            selector: row => row.stock,
        },
        {
            name: 'Price',
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
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 2,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 3,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 4,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 5,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 6,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 7,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
        {
            id: 8,
            photo: <img src={dish} alt="img" className="table-product-img" />,
            itemName: 'Cheesecakes with sour cream and citrus hon',
            itemId: '723DN2',
            purchase: '11.14.2021',
            weight: '230 g',
            stock: '18 portions',
            price: '$ 2.50',
            action:
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <DropdownMenu />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleShow}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={handleShowModal}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>,
        },
    ]

    return (
        <>
            <TableStyled>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    pagination
                    selectableRows
                />
            </TableStyled>
            <Offcanvas show={canvasShow} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <EditProductContainer>
                        <Button className="w-100 mb-20">Save</Button>
                        <div
                            className="product-img-main"
                            style={{ backgroundImage: `url(${Burger})` }}>
                            <button className="edit">
                                <EditIcon />
                            </button>
                        </div>
                        <Title>Item</Title>
                        <Label>Category</Label>
                        <Select>
                            <option value="0">Salad</option>
                            <option value="1">Burger</option>
                            <option value="2">Salad</option>
                        </Select>
                        <div className="between">
                            <Label>Item name</Label>
                            <p className="charac-left">13 characters left</p>
                        </div>
                        <Select>
                            <option value="0">Salad with shrimps and avocado</option>
                            <option value="1">Salad with shrimps and avocado</option>
                            <option value="2">Salad with shrimps and avocado</option>
                        </Select>
                        <div className="between">
                            <Label>Item description</Label>
                            <p className="charac-left">0 characters left</p>
                        </div>
                        <Textarea onChange={() => console.log()} spellCheck={false} value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.">
                        </Textarea>
                        <Label>Nutritional value</Label>
                        <Row>
                            <Col xs={6}>
                                <Input type="text" onChange={() => console.log()} value="313 cal" className="mb-10" />
                            </Col>
                            <Col xs={6}>
                                <Input type="text" onChange={() => console.log()} value="15 p" className="mb-10" />
                            </Col>
                            <Col xs={6}>
                                <Input type="text" onChange={() => console.log()} value="13.9 f" className="mb-10" />
                            </Col>
                            <Col xs={6}>
                                <Input type="text" onChange={() => console.log()} value="30 c" className="mb-10" />
                            </Col>
                        </Row>
                        <Label>Allergies</Label>
                        <Select>
                            <option value="0">May contains eggs, peanut</option>
                            <option value="1">May contains eggs, peanut</option>
                            <option value="2">May contains eggs, peanut</option>
                        </Select>
                        <Title>Add-ons</Title>
                        <AddOns>
                            <div className="d-flex justify-content-between">
                                <div className="mb-15">
                                    <h1>Toppings: <span>Lettuce, Cheese, Tomatoes, Pickle</span></h1>
                                </div>
                                <EditButton>
                                    <EditWhite />
                                </EditButton>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="item">Lettuce</div>
                                <div className="item">Cheese</div>
                                <div className="item">Tomatoes</div>
                                <div className="item">Pickle</div>
                            </div>
                        </AddOns>
                        <AddOns>
                            <div className="d-flex justify-content-between">
                                <div className="mb-15">
                                    <h1>Sauces: <span>Ketchup, Maynoaise, BBQ</span></h1>
                                </div>
                                <EditButton>
                                    <EditWhite />
                                </EditButton>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="item">Ketchup</div>
                                <div className="item">Maynoaise</div>
                                <div className="item">BBQ</div>
                            </div>
                        </AddOns>
                        <AddOns>
                            <div className="d-flex justify-content-between">
                                <div className="mb-15">
                                    <h1>Drinks: <span>Pepsi, Nestea, Coca-cola, Water, 7UP</span></h1>
                                </div>
                                <EditButton>
                                    <EditWhite />
                                </EditButton>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="item">Pepsi</div>
                                <div className="item">Nestea</div>
                                <div className="item">Coca-cola</div>
                                <div className="item">Water</div>
                                <div className="item">7UP</div>
                            </div>
                        </AddOns>
                        <div className="d-flex justify-content-end">
                            <Button className="px-5">Edit listing</Button>
                        </div>
                    </EditProductContainer>
                </Offcanvas.Body>
            </Offcanvas>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete this item from folder?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text">Are you sure you want to delete the <span>#723DN2</span> item from Salads folder?</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex w-100">
                            <Col lg={6} className="pe-2">
                                <Button className="grey w-100" onClick={handleCloseModal}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col lg={6} className="ps-2">
                                <Button className="w-100" onClick={handleCloseModal}>
                                    Delete
                                </Button>
                            </Col>
                        </div>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
        </>
    )
}

export default ProductDetail