import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Row, Col, Modal } from "react-bootstrap"
import { Button, RangeSlider } from "../../components/Style"
import {
  OrderIdMain,
  OrderListMain,
  OrderList,
  OrderListItem,
  OrderDetails,
  OrderHistory,
} from "../../components/orders/Components"
import {
  Heading,
  CardStyled,
  ThemeModal,
  Textarea,
} from "../../components/Style"
import { orderListData } from "../../components/orders/Data"
import { BackArrow } from "../../components/AllImages"

const OrderDetail = () => {
  const history = useHistory()
  const [modalShow, setModalShow] = React.useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)

  const handleCloseCancelModal = () => setShowCancelModal(false)
  const handleShowCancelModal = () => setShowCancelModal(true)

  return (
    <>
      <OrderIdMain>
        <button onClick={history.goBack}>
          <BackArrow />
        </button>
        <h1>Order ID #247HW9</h1>
      </OrderIdMain>
      <Row>
        <Col lg={8}>
          <OrderListMain>
            <div className="between flex-wrap">
              <div className="d-flex align-items-center">
                <h1>
                  Order list <span>(6 items)</span>
                </h1>
                <span className="method card lato">Credit card</span>
              </div>
              <h2 className="lato">14:58:15</h2>
            </div>
            <OrderList>
              <div className="head lato">
                <h3 className="item-width">Item</h3>
                <h3 className="col-width">Q-ty</h3>
                <h3 className="col-width">Price</h3>
                <h3 className="col-width right">Total price</h3>
              </div>
              {orderListData.map((item, index) => {
                return <OrderListItem key={index} ListItem={item} />;
              })}
            </OrderList>
            <div className="bottom">
              <div className="between">
                <h5>Delivery</h5>
                <h5>$ 2.00</h5>
              </div>
              <div className="between">
                <h4>Order total</h4>
                <h4>$ 21.70</h4>
              </div>
            </div>
          </OrderListMain>
        </Col>
        <Col lg={4}>
          <CardStyled>
            <Heading>Details</Heading>
            <OrderDetails
              number1="(808) 555-0111"
              number2="(808) 555-0111"
              address="8502 Preston Rd. Inglewood"
              distance="15 min away"
            />
          </CardStyled>
          <CardStyled>
            <Heading>History</Heading>
            <OrderHistory />
            <Button
              type="button"
              onClick={() => setModalShow(true)}
              className="w-100 mb-2 f-medium theme-clr" bg="#5AB3A833">
              Change estimation time
            </Button>
            <div className="d-flex">
              <Button
                type="button"
                className="me-2 px-1"
                width="129px"
                bg="#CCD4D680"
                color="#4C6870"
                onClick={handleShowCancelModal}>
                Cancel order
              </Button>
              <Button
                type="button"
                className="w-100 f-medium flex-1">
                Ready for pickup
              </Button>
            </div>
          </CardStyled>
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

      <Modal show={showCancelModal} onHide={handleCloseCancelModal} centered className="refusal-modal">
        <ThemeModal>
          <Modal.Header closeButton className="pb-1">
            <Modal.Title>Indicate the reason for cancelation</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0">
            <div className="text dark-clr">We will notify the client about it</div>
            <Textarea placeholder='Type here...' className='mb-4 mt-3 refusal-textarea'></Textarea>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex w-100">
              <Col lg={6} className="pe-2">
                <Button className="grey w-100" onClick={handleCloseCancelModal}>Cancel</Button>
              </Col>
              <Col lg={6} className="ps-2">
                <Button className="w-100" onClick={handleCloseCancelModal}>Submit</Button>
              </Col>
            </div>
          </Modal.Footer>
        </ThemeModal>
      </Modal>
    </>
  )
}

export default OrderDetail
