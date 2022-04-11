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
    const [preOrder, setPreOrder] = useState(false)

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }
    const handleCloseDelModal = () => setShowDelModal(false)
    const handleShowDelModal = () => setShowDelModal(true)
    
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
                    <HeadingStyled size="15px" weight="700" className="lato mb-1">Title</HeadingStyled>
                    <SettingBtn
                        className="between"
                        onClick={() => setPreOrder(true)}>
                        Pre-order settings
                        <RightArrow />
                    </SettingBtn>
                    <HeadingStyled size="15px" weight="700" className="lato mb-1">Account</HeadingStyled>
                    <SettingBtn
                        className="between red"
                        onClick={handleShowDelModal}>
                        <div className="d-flex align-items-center">
                            <RemoveIcon />
                            Delete account
                        </div>
                        <RightArrow />
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
        </>
    )
}

export default Settings