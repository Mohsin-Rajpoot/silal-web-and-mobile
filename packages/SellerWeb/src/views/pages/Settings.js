import React, { useState } from 'react'
import { Modal, Col } from 'react-bootstrap'
import {
    SimpleNav,
    CardStyled,
    HeadingStyled,
    SettingBtn,
    Button,
    ThemeModal
} from '../components/Style'
import {
    Menu,
    RightArrow,
    RemoveIcon,
} from '../components/AllImages'

const Settings = ({
    sideBar,
    setSideBar,
}) => {
    const [showDelModal, setShowDelModal] = useState(false)

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
            <HeadingStyled size="15" weight="700" className="lato mb-1">Title</HeadingStyled>
            <SettingBtn className="between">
                Pre-order settings
                <RightArrow />
            </SettingBtn>
            <HeadingStyled size="15" weight="700" className="lato mb-1">Account</HeadingStyled>
            <SettingBtn
                className="between red"
                onClick={handleShowDelModal}>
                <div className="d-flex align-items-center">
                    <RemoveIcon />
                    Delete account
                </div>
                <RightArrow />
            </SettingBtn>

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