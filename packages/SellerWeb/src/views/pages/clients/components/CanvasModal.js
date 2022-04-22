import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import {
  DetailText,
  QtyDetail,
  TableSpan,
} from "../../../components/UseFullElements";
import {
  FlexContainer,
  HeadingStyled,
  ThemeAccordion,
} from "../../../components/Style";
import { Col, Form, Row } from "react-bootstrap";
import { Burger } from "../../../components/AllImages";
import { SearchBar } from "../../../components/clients/Nav";
import { Search } from "react-bootstrap-icons";

const CanvasModal = ({ show, setShow, type }) => {
  const [canvasShow, setCanvasShow] = useState(false);
  const canvasCloseHandler = () => {
    setCanvasShow(false);
    setShow(false);
  };
  useEffect(() => {
    setCanvasShow(show);
  }, [show]);
  const NumbersHide = (number) => {
    return number.replace(/.(?=.{4})/g, "*");
  };
  return (
    <Offcanvas show={canvasShow} onHide={canvasCloseHandler} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Cameron Williamson
          <TableSpan
            classN={`${
              type == "completed" ? "bg-success text-white" : "theme-clr"
            }`}
            text={`${type == "completed" ? "Completed" : "Reccuring client"}`}
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <DetailText title="Customer ID" detail="#644" classes="mb-3" />
        <ThemeAccordion>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>personal data</Accordion.Header>
              <Accordion.Body>
                <DetailText title="Total Orders" detail="43" />
                <DetailText title="Sum of orders" detail="$ 423.90" />
                <DetailText title="Average amount" detail="$ 13" />
                <DetailText
                  title="Credit card"
                  detail={NumbersHide("4444 4444 4444 4543")}
                />
              </Accordion.Body>
            </Accordion.Item>
            {type !== "success" ? (
              <Accordion.Item eventKey="1">
                <Accordion.Header>Favourite items (3)</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={6} className="mb-3">
                      <FlexContainer className="flex-column">
                        <div>
                          <img
                            src={Burger}
                            className="mb-1 w-100"
                            style={{ borderRadius: "5px" }}
                            alt="burger"
                          />
                          <HeadingStyled
                            size={"13px"}
                            color="#002733"
                            weight={400}
                          >
                            Chicken burger in cheese sauce with mushrooms
                          </HeadingStyled>
                          <HeadingStyled
                            size={"13px"}
                            color="#002733"
                            weight={600}
                          >
                            $&nbsp;4.00
                          </HeadingStyled>
                        </div>
                      </FlexContainer>
                    </Col>
                    <Col lg={6} className="mb-3">
                      <FlexContainer className="flex-column">
                        <div>
                          <img
                            src={Burger}
                            className="mb-1 w-100"
                            style={{ borderRadius: "5px" }}
                            alt="burger"
                          />
                          <HeadingStyled
                            size={"13px"}
                            color="#002733"
                            weight={400}
                          >
                            Chicken burger in cheese sauce with mushrooms
                          </HeadingStyled>
                          <HeadingStyled
                            size={"13px"}
                            color="#002733"
                            weight={600}
                          >
                            $&nbsp;4.00
                          </HeadingStyled>
                        </div>
                      </FlexContainer>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ) : null}
            {type == "completed" ? (
              <Accordion.Item eventKey="2">
                <Accordion.Header>driver data</Accordion.Header>
                <Accordion.Body>
                  <DetailText title="Driver name" detail="Willson Genemal" />
                  <DetailText title="Phone" detail="(208) 555-0112" />
                  <DetailText title="Delivery time" detail="37 minutes" />
                </Accordion.Body>
              </Accordion.Item>
            ) : null}
            <Accordion.Item eventKey="3">
              <Accordion.Header>order details</Accordion.Header>
              <Accordion.Body>
                {type !== "success" ? (
                  <SearchBar className="w-100 mb-3">
                    <Form
                      as="input"
                      type="text"
                      className="bg-white"
                      placeholder="Search by orders #, phone or name..."
                    />
                    <Search
                      className="icon-label position-absolute"
                      size={17}
                    />
                  </SearchBar>
                ) : null}
                <DetailText title="Order created" detail="11.13.2021 17:33" />
                <DetailText title="Payment" detail="$ 13.00" />
                <DetailText
                  title="Credit card"
                  detail={NumbersHide("4444 4444 4444 3782")}
                />
                <hr />
                <QtyDetail qty="3" detail="French fries" />
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
  );
};
export default CanvasModal;
