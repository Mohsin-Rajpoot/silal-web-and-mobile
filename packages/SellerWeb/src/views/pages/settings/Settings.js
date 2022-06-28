import React, { useState } from "react";
import LanguageCanvas from "../../components/settings/LanguageCanvas";
import Prefrences from "./SecurityPrefrences";
import { Wrapper, SettingBtn } from "../../components/settings/Styled";
import { Modal, Row, Col } from "react-bootstrap";
import GlobalStyle from "../../components/GlobalStyled";
import Sidebar from "../../components/UI/Sidebar";
import {
  SimpleNav,
  CardStyled,
  HeadingStyled,
  Button,
  ThemeModal,
  Radio,
  Margin,
} from "../../components/Style";
import {
  Menu,
  RightArrow,
  RemoveIcon,
  BackArrow,
} from "../../components/AllImages";

import InviteWorkForce from "./InviteWorkForce";

const Settings = () => {
  const [showDelModal, setShowDelModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [preOrder, setPreOrder] = useState(false);
  const [securityPrefrences, setSecurityPrefrences] = useState(false);
  const [canvasShow, setCanvasShow] = useState(false);
  const [language, setLanguage] = useState("English");
  const [workForce, setWorkForce] = useState(false);
  const [sideBar, setSideBar] = useState(true);

  const handleCloseDelModal = () => setShowDelModal(false);
  const handleShowDelModal = () => setShowDelModal(true);
  const handleCloseLogoutModal = () => setShowLogoutModal(false);

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
            <h1>Settings</h1>
          </SimpleNav>
          {workForce ? (
            <InviteWorkForce back={setWorkForce} />
          ) : (
            <>
              {securityPrefrences ? (
                <Prefrences back={setSecurityPrefrences} />
              ) : (
                <>
                  {preOrder ? (
                    <>
                      <div className="d-flex mb-3">
                        <button
                          type="button"
                          className="back-arrow"
                          onClick={() => setPreOrder(false)}
                        >
                          <BackArrow />
                        </button>
                        <HeadingStyled
                          size="19px"
                          weight="700"
                          className="poppins mb-0"
                        >
                          Pre-order settings
                        </HeadingStyled>
                      </div>
                      <Row>
                        <Col>
                          <CardStyled>
                            <HeadingStyled
                              size="15px"
                              weight="700"
                              className="lato mb-1 pre"
                            >
                              Allow pre-orders
                            </HeadingStyled>
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
                  ) : (
                    <>
                      <SettingBtn
                        className="between"
                        onClick={() => setPreOrder(true)}
                      >
                        Pre-order settings
                        <RightArrow className="arrow" />
                      </SettingBtn>
                      <SettingBtn
                        className="between"
                        onClick={() => setCanvasShow(true)}
                      >
                        Language
                        <div>
                          <span>{language}</span>
                          <RightArrow className="arrow" />
                        </div>
                      </SettingBtn>

                      <SettingBtn
                        className="between"
                        onClick={() => setWorkForce(true)}
                      >
                        Invite workforce
                      </SettingBtn>

                      <SettingBtn
                        className="between"
                        onClick={() => setSecurityPrefrences(true)}
                      >
                        Security Prefrences
                        <div>
                          <RightArrow className="arrow" />
                        </div>
                      </SettingBtn>

                      <Margin margin="0 0 30px 0" />
                      <SettingBtn
                        className="between"
                        onClick={() => setShowLogoutModal(true)}
                      >
                        Log out
                        <RightArrow className="arrow" />
                      </SettingBtn>

                      <SettingBtn
                        className="between"
                        onClick={() => setShowLogoutModal(true)}
                      >
                        Log out from all devices
                        <RightArrow className="arrow" />
                      </SettingBtn>
                      <SettingBtn
                        className="between red"
                        onClick={handleShowDelModal}
                      >
                        <div className="d-flex align-items-center">
                          <RemoveIcon />
                          Delete account
                        </div>
                        <RightArrow className="arrow" />
                      </SettingBtn>
                    </>
                  )}
                </>
              )}
            </>
          )}
          <Modal show={showDelModal} onHide={handleCloseDelModal} centered>
            <ThemeModal>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text">
                  This action is irrevocable. You can’t restore your account.
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="d-flex w-100">
                  <Col lg={6} className="pe-2">
                    <Button
                      className="grey w-100"
                      onClick={handleCloseDelModal}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col lg={6} className="ps-2">
                    <Button
                      className="w-100 delete"
                      onClick={handleCloseDelModal}
                    >
                      Yes, delete
                    </Button>
                  </Col>
                </div>
              </Modal.Footer>
            </ThemeModal>
          </Modal>
          <Modal
            show={showLogoutModal}
            onHide={handleCloseLogoutModal}
            centered
          >
            <ThemeModal>
              <Modal.Header className="justify-content-center">
                <Modal.Title>Log out from Silal Seller?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text text-center">
                  Are you sure you want to log out of your Silal account?
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="d-flex w-100">
                  <Col lg={6} className="pe-2">
                    <Button className="w-100" onClick={handleCloseLogoutModal}>
                      Cancel
                    </Button>
                  </Col>
                  <Col lg={6} className="ps-2">
                    <Button className="w-100 delete">Log out</Button>
                  </Col>
                </div>
              </Modal.Footer>
            </ThemeModal>
          </Modal>
          <LanguageCanvas
            canvasShow={canvasShow}
            setCanvasShow={setCanvasShow}
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;
