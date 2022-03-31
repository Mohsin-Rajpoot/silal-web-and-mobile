import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FlexContainer,
  HeadingStyled,
  Input,
  Label,
  Select
} from "../../../components/Style";
import { Col, Form, Row , Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Burger } from "../../../components/AllImages";
import styled from "styled-components";
import { BorderSeprator } from "../AllOffers";

const EditItemModal = ({ show, setShow }) => {
  const [canvasShow, setCanvasShow] = useState(false);
  const canvasCloseHandler = () => {
    setCanvasShow(false);
    setShow(false);
  };
  useEffect(() => {
    setCanvasShow(show);
  }, [show]);

  return (
    <Offcanvas show={true} onHide={canvasCloseHandler} placement="end" style={{width:800}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="f-bold">
          <ArrowLeft className="me-2" size={30} />Create offer
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <HeadingStyled color="#002733" size="16px" weight="600">
            Main item
        </HeadingStyled>
        <FlexContainer className="align-items-start position-relative">
            <div className="px-0 me-3" style={{width:"148px"}}>
            </div>
            <div className="position-absolute h-100" style={{backgroundImage:`url(${Burger})`,
            left:0,top:0,width:"148px",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"}}>
                
            </div>
            <ContainerBody className="px-0 flex-1">
                <FlexContainer>
                    <Select className="border-top-0 border-start-0 border-end-0 radius-0"
                       style={{maxWidth:"230px"}}>
                        <option disabled>--Select--</option>
                        <option selected>Burger Cheese Burger</option>
                    </Select>
                </FlexContainer>
                <Row>
                    <Col md={6}>
                        <Label>Min quantity</Label>
                        <Input type="text" value="2" />
                    </Col>
                    <Col md={6}>
                        <Label>Initial Price</Label>
                        <Input type="text" disabled value="$ 1.50" />
                    </Col>
                    <Col md={6}>
                        <Label>Price effect</Label>
                        <Input type="text" value="-33%" className="mb-0" />
                    </Col>
                    <Col md={6}>
                        <Label>New price</Label>
                        <Input type="text" disabled value="$ 1.00" className="mb-0" />
                    </Col>
                </Row>
            </ContainerBody>
        </FlexContainer>
        <BorderSeprator className="mx-0 my-4" />
        <HeadingStyled color="#002733" size="16px" weight="600">
         Additional items
        </HeadingStyled>
        <FlexContainer className="align-items-start position-relative mb-4">
            <div className="px-0 me-3" style={{width:"148px"}}>
            </div>
            <div className="position-absolute h-100" style={{backgroundImage:`url(${Burger})`,
            left:0,top:0,width:"148px",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"}}>
                
            </div>
            <ContainerBody className="px-0 flex-1">
                <FlexContainer>
                    <Select className="border-top-0 border-start-0 border-end-0 radius-0"
                       style={{maxWidth:"230px"}}>
                        <option disabled>--Select--</option>
                        <option selected>Soft drink</option>
                    </Select>
                </FlexContainer>
                <Row>
                    <Col md={6}>
                        <Label>Min quantity</Label>
                        <Input type="text" value="2" />
                    </Col>
                    <Col md={6}>
                        <Label>Initial Price</Label>
                        <Input type="text" disabled value="$ 1.50" />
                    </Col>
                    <Col md={6}>
                        <Label>Price effect</Label>
                        <Input type="text" value="-33%" className="mb-0" />
                    </Col>
                    <Col md={6}>
                        <Label>New price</Label>
                        <Input type="text" disabled value="$ 1.00" className="mb-0" />
                    </Col>
                </Row>
            </ContainerBody>
        </FlexContainer>
        <FlexContainer className="align-items-start position-relative">
            <div className="px-0 me-3" style={{width:"148px"}}>
            </div>
            <div className="position-absolute h-100" style={{backgroundImage:`url(${Burger})`,
            left:0,top:0,width:"148px",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"}}>
                
            </div>
            <ContainerBody className="px-0 flex-1">
                <FlexContainer>
                    <Select className="border-top-0 border-start-0 border-end-0 radius-0"
                       style={{maxWidth:"230px"}}>
                        <option disabled>--Select--</option>
                        <option selected>Burger Cheese Burger</option>
                    </Select>
                </FlexContainer>
                <Row>
                    <Col md={6}>
                        <Label>Min quantity</Label>
                        <Input type="text" value="2" />
                    </Col>
                    <Col md={6}>
                        <Label>Initial Price</Label>
                        <Input type="text" disabled value="$ 1.50" />
                    </Col>
                    <Col md={6}>
                        <Label>Price effect</Label>
                        <Input type="text" value="-33%" className="mb-0" />
                    </Col>
                    <Col md={6}>
                        <Label>New price</Label>
                        <Input type="text" disabled value="$ 1.00" className="mb-0" />
                    </Col>
                </Row>
            </ContainerBody>
        </FlexContainer>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
const ContainerBody = styled.div`
  input:disabled{
    background: #F2F4F5;
  }
`;
export default EditItemModal;
