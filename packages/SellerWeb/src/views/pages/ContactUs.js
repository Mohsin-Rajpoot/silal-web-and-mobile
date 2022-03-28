import React from 'react'
import {
    SimpleNav,
    CardStyled,
    Label,
    Input,
    Textarea,
    HeadingStyled,
    Description,
    ContactButton,
} from '../components/Style'
import {
    Menu,
} from '../components/AllImages'

const ContactUs = ({
    sideBar,
    setSideBar,
}) => {
    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <SimpleNav>
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <h1>Contact Silal</h1>
            </SimpleNav>
            <HeadingStyled size="22px" weight="700">Let’s solve the problem</HeadingStyled>
            <Description className="mb-20">It looks like you have a problem with our system. We are here to help you, so please get in touch with us.</Description>
            <CardStyled>
                <Label>Contact Phone/Email</Label>
                <Input type="text" />
                <Label>Subject</Label>
                <Input type="text" />
                <Label>Your message</Label>
                <Textarea />
            </CardStyled>
            <div className="end">
                <ContactButton className="poppins f-semibold">Submit</ContactButton>
            </div>
        </>
    )
}

export default ContactUs