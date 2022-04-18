import React, { useState } from 'react'
import Nav from '../../components/orders/Nav'
import { Row, Col, Modal } from 'react-bootstrap'
import { PreOrder } from '../../components/orders/Components'
import {
    CardStyled,
    Heading,
    ThemeModal,
    Textarea,
    Button,
    HeadingStyled,
    Suggestions,
} from '../../components/Style'

const PreOrders = ({ setSideBar, sideBar }) => {
    const [showDelModal, setShowDelModal] = useState(false)
    const [showDragBack, setShowDragBack] = useState(false)
    const handleCloseDelModal = () => setShowDelModal(false)
    const handleShowDelModal = () => setShowDelModal(true)
    const handleCLoseDragModal = () => setShowDragBack(false)
    const handleShowDragModal = () => setShowDragBack(true)

    return (
        <>
            <Nav setSideBar={setSideBar} sideBar={sideBar} />
            <Row>
                <Col md={6}>
                    <CardStyled className="bg-grey content-height">
                        <Heading>For today</Heading>
                        <PreOrder
                            modalDelHandle={handleShowDelModal}
                            modalDragHandle={handleShowDragModal}
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            modalDelHandle={handleShowDelModal}
                            modalDragHandle={handleShowDragModal}
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            modalDelHandle={handleShowDelModal}
                            modalDragHandle={handleShowDragModal}
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                    </CardStyled>
                </Col>
                <Col md={6}>
                    <CardStyled className="bg-grey content-height">
                        <Heading>This week</Heading>
                        <PreOrder
                            modalDelHandle={handleShowDelModal}
                            modalDragHandle={handleShowDragModal}
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            modalDelHandle={handleShowDelModal}
                            modalDragHandle={handleShowDragModal}
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                        <PreOrder
                            modalDelHandle={handleShowDelModal}
                            modalDragHandle={handleShowDragModal}
                            orderNumber="#247hw9"
                            time="13:30 PM"
                        />
                    </CardStyled>
                </Col>
            </Row>

            <Modal show={showDelModal} onHide={handleCloseDelModal} centered className="refusal-modal">
                <ThemeModal>
                    <Modal.Header closeButton className="pb-1">
                        <Modal.Title>Indicate the reason for refusal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="py-0">
                        <div className="text dark-clr">We will notify the client about it</div>
                        <Textarea placeholder='Type here...' className='mb-0 mt-3 refusal-textarea'></Textarea>
                        <div className="d-flex flex-wrap aling-items-baseline mt-1">
                            <HeadingStyled margin="4px 12px 8px 0" size="15px" font="lato" weight="500" color="#002733">Suggestions:</HeadingStyled>
                            <Suggestions>Nulla Lorem </Suggestions>
                            <Suggestions>Nulla Lorem mollit cupidatat irure</Suggestions>
                            <Suggestions>Nulla Lorem mollit</Suggestions>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex w-100">
                            <Col lg={6} className="pe-2">
                                <Button className="grey w-100" onClick={handleCloseDelModal}>Cancel</Button>
                            </Col>
                            <Col lg={6} className="ps-2">
                                <Button className="w-100" onClick={handleCloseDelModal}>Submit</Button>
                            </Col>
                        </div>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>

            <Modal show={showDragBack} onHide={handleCLoseDragModal} centered>
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Drag the card back to Received?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text">Please confirm that you want to move the card to the previous column.</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex w-100">
                            <Col lg={6} className="pe-2">
                                <Button className="grey w-100" onClick={handleCLoseDragModal}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col lg={6} className="ps-2">
                                <Button className="w-100" onClick={handleCLoseDragModal}>
                                Confirm
                                </Button>
                            </Col>
                        </div>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
        </>
    )
}

export default PreOrders