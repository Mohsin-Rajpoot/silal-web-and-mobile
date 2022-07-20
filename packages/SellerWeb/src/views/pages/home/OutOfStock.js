import React, { useState } from "react";
import Nav from "../../components/home/Nav";
import Table from "../../components/Table";
import GlobalStyle from "../../components/GlobalStyled";
import Sidebar from "../../components/UI/Sidebar";
import { Dropdown, Modal, Row, Col } from "react-bootstrap";
import { TableStyled, ThemeModal, Button } from "../../components/Style";
import { shirt, DropdownMenu } from "../../components/AllImages";

const OutOfStock = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setDropdownShow(false);
  const handleShow = () => setDropdownShow(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const columns = [
    {
      name: "Photo",
      selector: (row) => row.photo,
    },
    {
      name: "Item name",
      selector: (row) => row.item,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Remaining",
      selector: (row) => row.remaining,
    },
    {
      name: "Variant",
      selector: (row) => row.variant,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = [
    {
      id: 1,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "3",
      variant: "2",
      status: <span className="stock-status out">Out of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
    {
      id: 2,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "0",
      variant: "3",
      status: <span className="stock-status low">Low of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
    {
      id: 3,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "2",
      variant: "2",
      status: <span className="stock-status low">Low of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
    {
      id: 4,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "2",
      variant: "2",
      status: <span className="stock-status out">Out of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
    {
      id: 5,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "2",
      variant: "2",
      status: <span className="stock-status out">Out of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
    {
      id: 6,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "2",
      variant: "2",
      status: <span className="stock-status out">Out of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
    {
      id: 7,
      photo: <img src={shirt} alt="alt" />,
      item: "Mans T-shirt",
      category: "Clothing",
      remaining: "2",
      variant: "2",
      status: <span className="stock-status out">Out of stock</span>,
      price: "$ 120.00",
      action: (
        <Dropdown>
          <Dropdown.Toggle>
            <DropdownMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Update current stock</Dropdown.Item>
            <Dropdown.Item href="#" onClick={handleShowModal}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];
  const [sideBar, setSideBar] = useState(true);

  const sideBarToggle = () => {
    if (sideBar === false) setSideBar(true);
    else setSideBar(false);
  };

  return (
    <>
      <GlobalStyle />
      <div className="d-flex">
        <div>
          <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>

        <div className="w-100 px-3">
          <Nav setSideBar={setSideBar} sideBar={sideBar} />
          <TableStyled>
            <Table cols={columns} rows={data} />
          </TableStyled>
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <ThemeModal>
              <Modal.Header closeButton>
                <Modal.Title>Delete this item?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text">
                  Are you sure you want to delete the <span>Mans T-shirt</span>{" "}
                  item?
                </div>
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
        </div>
      </div>
    </>
  );
};

export default OutOfStock;
