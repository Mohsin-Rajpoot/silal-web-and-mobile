import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, RangeSlider } from "../../components/Style";
import {
  OrderIdMain,
  OrderListMain,
  OrderList,
  OrderListItem,
  OrderDetails,
  OrderHistory,
} from "../../components/orders/Components";
import { Heading, CardStyled } from "../../components/Style";
import { BackArrow } from "../../components/AllImages";
import { orderListData } from "./DummyData";
import Modal from "react-bootstrap/Modal";
const OrderDetail = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();

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
              className="w-100 mb-2 f-medium"
              style={{
                background: "#ADD9D3",
                color: "inherit",
                fontSize: "15px",
              }}
            >
              Change estimation time
            </Button>
            <Button
              type="button"
              className="w-100 f-medium"
              style={{ fontSize: "15px" }}
            >
              Ready for pickup
            </Button>
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
    </>
  );
};

export default OrderDetail;
