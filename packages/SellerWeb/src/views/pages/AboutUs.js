import React from "react";
import { useState } from "react";
import { Wrapper, ButtonLink } from "../components/about-us/Styled";
import { SimpleNav } from "../components/Style";
import { Row, Col } from "react-bootstrap";
import { Menu, RightArrow, LogoS } from "../components/AllImages";
import GlobalStyle from "../components/GlobalStyled";
import Sidebar from "../components/UI/Sidebar";

const AboutUs = () => {
  //   const sidebarHandler = () => {
  //     setSideBar(!sideBar);
  //   };
  const [sideBar, setSideBar] = useState(true);
  const sideBarToggle = () => {
    if (sideBar === false) setSideBar(true);
    else setSideBar(false);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <div className="d-flex">
        <div>
          <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        </div>

        <div className="px-3">
          <SimpleNav>
            <button className="menu" onClick={sideBarToggle}>
              <Menu />
            </button>
            <h1>About app</h1>
          </SimpleNav>
          <Row>
            <Col lg={4} md={8} xs={12}>
              <div className="text-center center flex-column">
                <div className="row">
                  <div className="logo center col-lg-2 offset-10">
                    <LogoS />
                  </div>
                </div>

                <h1>Silal App</h1>
                <h6>Ver. 1.0</h6>
              </div>
              <ButtonLink className="between">
                Terms of use
                <RightArrow className="arrow" />
              </ButtonLink>
              <ButtonLink className="between">
                Privacy policy
                <RightArrow className="arrow" />
              </ButtonLink>
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
