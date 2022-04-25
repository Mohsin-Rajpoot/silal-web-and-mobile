import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Wrapper, AttachedFiles } from '../../components/contact-us/Components'
import {
    SimpleNav,
    CardStyled,
    Label,
    Input,
    Textarea,
    HeadingStyled,
    Description,
    Button,
} from '../../components/Style'
import {
    Menu,
    AttachmentIcon,
} from '../../components/AllImages'

const ContactUs = ({
    sideBar,
    setSideBar,
}) => {
    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <Wrapper>
            <SimpleNav>
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <h1>Contact Silal</h1>
            </SimpleNav>
            <Row>
                <Col lg={6} md={8}>
                    <CardStyled>
                        <HeadingStyled className="poppins" size="19px" weight="700" margin="0 0 10px 0">Let’s solve the problem</HeadingStyled>
                        <Description className="mb-20">It looks like you have a problem with our system. We are here to help you, so please get in touch with us.</Description>
                        <Label>Contact Phone/Email</Label>
                        <Input type="text" />
                        <Label>Subject</Label>
                        <Input type="text" />
                        <Label>Your message</Label>
                        <Textarea />
                        <AttachedFiles
                            name="Name_of_image.jpeg"
                        />
                        <div className="d-flex">
                            <Button bg="#5AB3A833" color="#5AB3A8" className="hover-fill me-2 position-relative">
                                <AttachmentIcon />
                                Attach
                                <input type="file" className="file-input-none" />
                            </Button>
                            <Button className="flex-1 ms-1">Submit</Button>
                        </div>
                    </CardStyled>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default ContactUs