import React, { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import {
    SimpleNav,
    CardStyled,
    HeadingStyled,
    SettingBtn,
    Button,
    ThemeModal,
    Radio,
    Margin,
} from '../components/Style'
import {
    Menu,
    RightArrow,
    RemoveIcon,
    BackArrow,
} from '../components/AllImages'

const Settings = ({
    sideBar,
    setSideBar,
}) => {
    const [showDelModal, setShowDelModal] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const [preOrder, setPreOrder] = useState(false)

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }
    const handleCloseDelModal = () => setShowDelModal(false)
    const handleShowDelModal = () => setShowDelModal(true)
    const handleCloseLogoutModal = () => setShowLogoutModal(false)

    return (
        <>
            <SimpleNav>
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <h1>Settings</h1>
            </SimpleNav>
            {preOrder ?
                <>
                    <div className="d-flex mb-3">
                        <button
                            type="button"
                            className="back-arrow"
                            onClick={() => setPreOrder(false)}>
                            <BackArrow />
                        </button>
                        <HeadingStyled size="19px" weight="700" className="poppins mb-0">Pre-order settings</HeadingStyled>
                    </div>
                    <Row>
                        <Col xl={4} lg={5} md={6} xs={12}>
                            <CardStyled>
                                <HeadingStyled size="15px" weight="700" className="lato mb-1">Allow pre-orders</HeadingStyled>
                                <Radio>
                                    Always
                                    <input type="radio" name="pre-orders" />
                                    <span className="checkmark"></span>
                                </Radio>
                                <Radio>
                                    Never
                                    <input type="radio" name="pre-orders" />
                                    <span className="checkmark"></span>
                                </Radio>
                            </CardStyled>
                        </Col>
                    </Row>
                </>
                :
                <>
                    <SettingBtn
                        className="between"
                        onClick={() => setPreOrder(true)}>
                        Pre-order settings
                        <RightArrow className="arrow" />
                    </SettingBtn>
                    <SettingBtn
                        className="between"
                        onClick={() => setPreOrder(true)}>
                        Language
                        <RightArrow className="arrow" />
                    </SettingBtn>
                    <Margin margin="0 0 30px 0" />
                    <SettingBtn
                        className="between"
                        onClick={() => setShowLogoutModal(true)}>
                        Log out
                        <RightArrow className="arrow" />
                    </SettingBtn>
                    <SettingBtn
                        className="between red"
                        onClick={handleShowDelModal}>
                        <div className="d-flex align-items-center">
                            <RemoveIcon />
                            Delete account
                        </div>
                        <RightArrow className="arrow" />
                    </SettingBtn>
                </>
            }

            <Modal show={showDelModal} onHide={handleCloseDelModal} centered>
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text">This action is irrevocable. You can’t restore your account.</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex w-100">
                            <Col lg={6} className="pe-2">
                                <Button className="grey w-100" onClick={handleCloseDelModal}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col lg={6} className="ps-2">
                                <Button className="w-100 delete" onClick={handleCloseDelModal}>
                                    Yes, delete
                                </Button>
                            </Col>
                        </div>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
            <Modal show={showLogoutModal} onHide={handleCloseLogoutModal} centered>
                <ThemeModal>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Log out from Silal Seller?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text text-center">Are you sure you want to log out of your Silal account?</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex w-100">
                            <Col lg={6} className="pe-2">
                                <Button className="w-100" onClick={handleCloseLogoutModal}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col lg={6} className="ps-2">
                                <Button className="w-100 delete">
                                    Log out
                                </Button>
                            </Col>
                        </div>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
        </>
    )
}

export default Settings