import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../../components/UI/Sidebar";
import { Wrapper, AttachedFiles } from "../../components/contact-us/Components";
import GlobalStyle from "../../components/GlobalStyled";
import {
  SimpleNav,
  CardStyled,
  Label,
  Input,
  Textarea,
  HeadingStyled,
  Description,
  Button,
} from "../../components/Style";
import { Menu, AttachmentIcon } from "../../components/AllImages";

const ContactUs = () => {
  const [sideBar, setSideBar] = useState(true);
  const sideBarToggle = () => {
    if (sideBar === false) setSideBar(true);
    else setSideBar(false);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <div className="d-flex ">
        <div>
          <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>
        <div className="px-3">
          <SimpleNav>
            <button className="menu" onClick={sideBarToggle}>
              <Menu />
            </button>
            <h1>Contact Silal</h1>
          </SimpleNav>
          <Row>
            <Col lg={12} md={8}>
              <CardStyled>
                <HeadingStyled
                  className="poppins"
                  size="19px"
                  weight="700"
                  margin="0 0 10px 0"
                >
                  Let’s solve the problem
                </HeadingStyled>
                <Description className="mb-20">
                  It looks like you have a problem with our system. We are here
                  to help you, so please get in touch with us.
                </Description>
                <Label>Contact Phone/Email</Label>
                <Input type="text" />
                <Label>Subject</Label>
                <Input type="text" />
                <Label>Your message</Label>
                <Textarea />
                <AttachedFiles name="Name_of_image.jpeg" />
                <div className="d-flex">
                  <Button
                    bg="#05AE4B33"
                    color="#05AE4B"
                    className="hover-fill me-2 position-relative"
                  >
                    <AttachmentIcon />
                    Attach
                    <input type="file" className="file-input-none" />
                  </Button>
                  <Button className="flex-1 ms-1">Submit</Button>
                </div>
              </CardStyled>
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
