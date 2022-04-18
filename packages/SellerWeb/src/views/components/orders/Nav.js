import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import NotesCanvas from "./NotesCanvas"
import DetailModal from "./DetailModal"
import TimeModal from "./TimeModal"
import {
    Modal,
    Col,
    Row,
} from "react-bootstrap"
import {
    NavStyled,
    FlexContainer,
    Switch,
    HeadingStyled,
    ThemeModal,
    Margin,
} from "../Style"
import {
    Menu,
    AddIcon,
    TimeIcon,
    InfoIcon,
    BgEmailIcon,
    BgPhoneIcon,
} from '../AllImages'

const Nav = ({
    sideBar,
    setSideBar,
}) => {
    const location = useLocation()
    const [shift, setShift] = useState(true)
    const [showNotes, setShowNotes] = useState(false)
    const [showSupportModal, setShowSupportModal] = useState(false)
    const [showDetailModal, setShowDetailModal] = useState(false)
    const [showPeakTimeModal, setShowPeakTimeModal] = useState(false)

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }
    const handleCloseSupportModal = () => setShowSupportModal(false)
    const handleShowSupportModal = () => setShowSupportModal(true)
    const handleCloseDetailModal = () => setShowDetailModal(false)
    const handleShowDetailModal = () => setShowDetailModal(true)
    const handleCloseNotes = () => setShowNotes(false)
    const handleShowNotes = () => setShowNotes(true)
    const handleClosePeakTimeModal = () => setShowPeakTimeModal(false)
    const handleShowPeakTimeModal = () => setShowPeakTimeModal(true)

    return (
        <>
            <NavStyled>
                <div className="d-flex">
                    <button
                        className="menu"
                        onClick={sidebarHandler}>
                        <Menu />
                    </button>
                    <Link
                        to="/current-order"
                        className={`nav-link-btn ${location.pathname === "/current-order" ? "active" : ""}`}>
                        Current orders
                    </Link>
                    <Link
                        to="/pre-order"
                        className={`nav-link-btn ${location.pathname === "/pre-order" ? "active" : ""}`}>
                        Pre-orders <span>(8)</span>
                    </Link>
                    <Link
                        to="/archive-order"
                        className={`nav-link-btn ${location.pathname === "/archive-order" ? "active" : ""}`}>
                        Archive
                    </Link>
                </div>
                <FlexContainer>
                    <ModalButton
                        type="button"
                        onClick={handleShowNotes}>
                        <AddIcon />
                        <span>NOTE</span>
                    </ModalButton>
                    <ModalButton
                        onClick={handleShowPeakTimeModal}>
                        <TimeIcon />
                        <span>40 MIN</span>
                    </ModalButton>
                    <ModalButton
                        type="button"
                        onClick={handleShowDetailModal}>
                        <InfoIcon />
                    </ModalButton>
                    <FlexContainer>
                        <HeadingStyled className="poppins" size="16px" weight="600" margin="0 14px 0 20px"
                            style={{ width: "80px" }}>
                            {shift ? "Start shift" : "End shift"}
                        </HeadingStyled>
                        <Switch>
                            <input
                                type="checkbox"
                                checked={shift ? true : false}
                                onChange={() => setShift(!shift)} />
                            <span className="slider"></span>
                        </Switch>
                    </FlexContainer>
                </FlexContainer>
            </NavStyled>

            <Modal show={showSupportModal} onHide={handleCloseSupportModal} centered>
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Customer Support</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text">If you have questions that require our intervention, please contact us by mail or phone. Every day until 8 p.m.</div>
                        <Margin margin="25px 0 0 0" />
                        <Row>
                            <Col xs={6}>
                                <div className="d-flex">
                                    <BgEmailIcon />
                                    <div>
                                        <HeadingStyled className="lato" weight="800" size="13px" color="#002733" margin="0 0 4px 12px">EMAIL</HeadingStyled>
                                        <HeadingStyled className="lato" weight="500" size="13px" color="#4C6870" margin="0 0 4px 12px">customer.suppor@silal.com</HeadingStyled>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="d-flex">
                                    <BgPhoneIcon />
                                    <div>
                                        <HeadingStyled className="lato" weight="800" size="13px" color="#002733" margin="0 0 4px 12px">CONTACT NUMBER</HeadingStyled>
                                        <HeadingStyled className="lato" weight="500" size="13px" color="#4C6870" margin="0 0 4px 12px">(202) 398 0202</HeadingStyled>
                                        <HeadingStyled className="lato" weight="500" size="13px" color="#4C6870" margin="0 0 4px 12px">(202) 398 0202</HeadingStyled>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </ThemeModal>
            </Modal>
            <NotesCanvas
                handleCloseNotes={handleCloseNotes}
                showNotes={showNotes}
            />
            <DetailModal
                handleCloseDetailModal={handleCloseDetailModal}
                showDetailModal={showDetailModal}
            />
            <TimeModal
                handleClosePeakTimeModal={handleClosePeakTimeModal}
                showPeakTimeModal={showPeakTimeModal}
            />
        </>
    )
}

const ModalButton = styled.button`
    background: #FFFFFF;
    border: 1px solid rgba(204, 212, 214, 0.3);
    border-radius: 5px;
    margin-left: 15px;
    padding: 5px 7px;
    span {
        margin-left: 5px;
        font-family: 'Lato';
        font-weight: 600;
        font-size: 13px;
        line-height: 120%;
        letter-spacing: -0.408px;
        text-transform: uppercase;
        color: #5AB3A8;
    }
`;

export default Nav