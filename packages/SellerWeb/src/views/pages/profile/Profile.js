import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PinInput from "react-pin-input"
import Nav from '../../components/profile/Nav'
import { Row, Col, Modal } from 'react-bootstrap'
import {
    HeadingStyled,
    CardStyled,
    Label,
    Input,
    Select,
    Button,
    Tag,
    ThemeModal,
} from '../../components/Style'
import { ProfileBanner } from '../../components/profile/Components'
import { restaurantBg, avatar } from '../../components/AllImages'

const Profile = () => {
    const [editState, setEditState] = useState(false)
    const [showDelModal, setShowDelModal] = useState(false)
    const [showFreezeModal, setFreezeModal] = useState(true)
    const [restName, setRestName] = useState('Rastaurant’s name')
    const [slogan, setSlogan] = useState('The slogan will be here mх 40 characters')
    const [streetName, setStreetName] = useState('Street name')
    const [gps, setGps] = useState('Location via GPS')
    const [streetNumber, setStreetNumber] = useState('24/3')
    const [postal, setPostal] = useState('233 344')

    const handleCloseDelModal = () => setShowDelModal(false)
    const handleShowDelModal = () => setShowDelModal(true)
    const handleCloseFreezeModal = () => setFreezeModal(false)
    const handleShowFreezeModal = () => setFreezeModal(true)

    return (
        <>
            <Nav />
            <Row>
                <Col md={8}>
                    {editState ?
                        <>
                            <CardStyled>
                                <ProfileBanner
                                    edit={true}
                                    bgImg={restaurantBg}
                                    avatar={avatar}
                                />
                                <Label size="15px">Cuisine</Label>
                                <Select>
                                    <option value="">Europian</option>
                                    <option value="">American</option>
                                </Select>
                                <Label size="15px">Restaurant name</Label>
                                <Input
                                    value={restName}
                                    onChange={(e) => setRestName(e.target.value)}
                                />
                                <div className="between">
                                    <Label size="15px">Description</Label>
                                    <p className="charac-left">13 characters left</p>
                                </div>
                                <Input
                                    value={slogan}
                                    onChange={(e) => setSlogan(e.target.value)}
                                />
                                <Label size="15px">Business address <span style={{ color: '#E62828' }}>*</span> </Label>
                                <Row>
                                    <Col xs={8}>
                                        <Input
                                            value={streetName}
                                            onChange={(e) => setStreetName(e.target.value)}
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Input
                                            value={gps}
                                            onChange={(e) => setGps(e.target.value)}
                                        />
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={6}>
                                                <Input
                                                    value={streetNumber}
                                                    onChange={(e) => setStreetNumber(e.target.value)}
                                                />
                                            </Col>
                                            <Col xs={6}>
                                                <Input
                                                    value={postal}
                                                    onChange={(e) => setPostal(e.target.value)}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={4}>
                                        <Select>
                                            <option value="">New York</option>
                                        </Select>
                                    </Col>
                                </Row>
                            </CardStyled>
                        </>
                        :
                        <>
                            <CardStyled>
                                <ProfileBanner
                                    bgImg={restaurantBg}
                                    avatar={avatar}
                                />
                                <HeadingStyled size="25px" weight="700" className="dark-clr poppins" margin="0">Restaurant’s name</HeadingStyled>
                                <HeadingStyled size="15px" weight="400" className="dark-clr" margin="0 0 20px 0">The slogan will be here mх 40 characters</HeadingStyled>
                                <Row>
                                    <Col sm={6}>
                                        <HeadingStyled size="16px" weight="600" className="dark-clr poppins" margin="0 0 6px 0">Opening hours</HeadingStyled>
                                        <HeadingStyled size="15px" weight="400" className="dark-clr" margin="0 0 20px 0">Mon - Fri 10:00 - 22:00, Sat, Sun - Closed</HeadingStyled>
                                    </Col>
                                    <Col sm={6}>
                                        <HeadingStyled size="16px" weight="600" className="dark-clr poppins" margin="0 0 6px 0">Location</HeadingStyled>
                                        <HeadingStyled size="15px" weight="400" className="dark-clr" margin="0 0 20px 0">8502 Preston Rd. Inglewood</HeadingStyled>
                                    </Col>
                                </Row>
                                <div className="d-flex flex-wrap">
                                    <Tag>Sushi</Tag>
                                    <Tag>Burgers</Tag>
                                    <Tag>Pan-asian</Tag>
                                </div>
                            </CardStyled>
                        </>
                    }
                </Col>
                <Col md={4}>
                    {editState ?
                        <>
                            <Row>
                                <Col xs={6}>
                                    <Button
                                        className="w-100 grey"
                                        onClick={() => setEditState(false)}>
                                        Cancel
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button
                                        className="w-100">
                                        Save changes
                                    </Button>
                                </Col>
                            </Row>
                        </>
                        :
                        <>
                            <Button
                                className="w-100"
                                mb="20px"
                                onClick={() => setEditState(true)}>
                                Edit profile
                            </Button>
                            <Button
                                bg="#5AB3A833"
                                color="#5AB3A8"
                                className="w-100 hover-fill"
                                onClick={handleShowDelModal}>
                                Change admin code
                            </Button>
                        </>
                    }
                </Col>
            </Row>

            <Modal show={showDelModal} onHide={handleCloseDelModal} centered className="refusal-modal modal-title-center">
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Change admin code for  “Seller’s name”</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <HeadingStyled
                            className="text-center lato"
                            size="15px"
                            weight="500"
                            color="#4C6870"
                            margin="8px 0 20px 0">
                            Enter your previous code
                        </HeadingStyled>
                        <div className="center">
                            <PinInput
                                length={4}
                                // initialValue=""
                                // secret
                                // onChange={(value, index) => { }}
                                type="numeric"
                                inputMode="number"
                                inputStyle={{ borderColor: '#CDCDD0' }}
                                inputFocusStyle={{ borderColor: '#5AB3A8' }}
                                // onComplete={(value, index) => { }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </div>
                        <HeadingStyled
                            className="text-center lato"
                            size="15px"
                            weight="500"
                            color="#4C6870"
                            margin="25px 0 20px 0">
                            Repeat code
                        </HeadingStyled>
                        <div className="center">
                            <PinInput
                                length={4}
                                // initialValue=""
                                // secret
                                // onChange={(value, index) => { }}
                                type="numeric"
                                inputMode="number"
                                inputStyle={{ borderColor: '#CDCDD0' }}
                                inputFocusStyle={{ borderColor: '#5AB3A8' }}
                                // onComplete={(value, index) => { }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button mt="40px" width="329px" onClick={handleCloseDelModal}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
            <Modal show={showFreezeModal} onHide={handleCloseFreezeModal} centered className="refusal-modal modal-title-center">
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Account is freezed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <HeadingStyled color="#4C6870" size="18px" margin="0 0 43px 0" weight="500" className="lato">
                            It seems that your account was deactivated because
                            it violated the <Link to="#">terms of use</Link> or our <Link to="#">community guidline</Link>.
                            If you believe this was by mistake, please <Link to="#">contact us</Link>.
                        </HeadingStyled>
                        <HeadingStyled color="#4C6870" size="18px" margin="0" weight="500" className="lato">
                            <b>Note from Silal:</b> account freezed for 30 days due to leaving inappropriate reviews on products.
                        </HeadingStyled>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button width="329px" onClick={handleCloseFreezeModal}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
        </>
    )
}

export default Profile