import React from "react"
import styled from "styled-components"
import { Offcanvas } from "react-bootstrap"
import { Label, Button, HeadingStyled, Input } from "../Style"

const BarCodeCanvas = ({ show, setShow }) => {
    return (
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
            <Wrapper>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add barcode</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="descp">Choose one of the ways</p>
                    <HeadingStyled margin="0 0 9px 0" size="16px">Manually</HeadingStyled>
                    <Label color="#00273380">Barcode </Label>
                    <Input type="text" placeholder="Barcode" />
                    <HeadingStyled margin="10px 0 9px 0" size="16px">Scan</HeadingStyled>
                    <Button className="hover-fill w-100">Click to scan</Button>
                </Offcanvas.Body>
            </Wrapper >
        </Offcanvas>
    )
}

const Wrapper = styled.div`
.descp {
    max-width: 442px;
    margin-bottom: 20px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    color: rgba(0, 39, 51, 0.8);
}
`;

export default BarCodeCanvas