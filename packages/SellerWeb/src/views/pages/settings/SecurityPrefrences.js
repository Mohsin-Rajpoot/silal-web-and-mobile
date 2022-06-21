import React, { useState } from "react";
import { BackArrow, RightArrow } from "../../components/AllImages";
import { SettingBtn } from "../../components/settings/Styled";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { HeadingStyled } from "../../components/Style";
import { Form } from "react-bootstrap";
import { SecurityPrefrence, ModalStyle } from "../../components/Style";
import FormInput from "./Common/FormInput";
import VerifyIdentity from "./Common/VerifyIdentity";

function SecurityPrefrences({ back }) {
  const [emailSet, setEmailSet] = useState(false);
  const [phone, setPhone] = useState(false);
  const [password, setPassword] = useState(false);
  const [showEmailModel, setShowEmailModel] = useState(true);
  const [verifyNumber, setVerifyNumber] = useState(false);
  const [otpModel, setOtpModel] = useState(false);

  const handleCloseNumber = () => setVerifyNumber(false);
  const handleShowNumber = () => setVerifyNumber(true);

  const handleCloseOtpModel = () => setOtpModel(false);
  const handleShowOtpModel = () => setOtpModel(true);

  const handleCloseEmailModel = () => setShowEmailModel(false);
  const handleShowEmailModel = () => setShowEmailModel(true);

  function ModelIn() {
    handleCloseEmailModel();
    setEmailSet(true);
  }

  function handlePassword() {
    if (emailSet === true) setEmailSet(false);
    if (phone === true) setPhone(false);
    if (password === true) setPassword(false);
    else setPassword(true);
  }
  function handlePhone() {
    if (password === true) setPassword(false);
    if (emailSet === true) setEmailSet(false);
    if (phone === true) setPhone(false);
    else setPhone(true);
  }
  function handleEmail() {
    if (password === true) setPassword(false);
    if (phone === true) setPhone(false);
    if (emailSet === true) setEmailSet(false);
    else setEmailSet(true);
  }

  return (
    <SecurityPrefrence>
      <div>
        <div className="d-flex mb-3">
          <button
            type="button"
            className="back-arrow"
            onClick={() => back(false)}
          >
            <BackArrow />
          </button>
          <HeadingStyled size="19px" weight="700" className="poppins mb-0">
            Security Prefrences
          </HeadingStyled>
        </div>

        <Row className="display">
          <Col lg={3} className="left">
            <SettingBtn className="between" onClick={handleEmail}>
              Email
              <RightArrow className="arrow" />
            </SettingBtn>
            <SettingBtn className="between" onClick={handlePhone}>
              Phone Settings
              <RightArrow className="arrow" />
            </SettingBtn>
            <SettingBtn className="between" onClick={handlePassword}>
              Password settings
              <RightArrow className="arrow" />
            </SettingBtn>
            <div className="text">
              <h1>Multi factor authentications</h1>
              <p>
                Multie-factor-authentication (MFA) is a setup that allows signin
                in process to require more than one step to authenticate user
                access, providing higher security. At least one must be chosen
                (for normal authenticaion).
              </p>
            </div>
            <SettingBtn className="between">
              Require E-mail code for MFA
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  variant="success"
                />
              </Form>
            </SettingBtn>

            <SettingBtn className="between">
              Require E-mail code for MFA
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  variant="success"
                />
              </Form>
            </SettingBtn>

            <SettingBtn className="between">
              Require password for MFA
              <Form className="formI">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  variant="success"
                />
              </Form>
            </SettingBtn>
          </Col>

          <Col lg={6} className="right">
            {emailSet ? (
              <div>
                <h3>Email Settings</h3>
                <div className="inputs">
                  <Form className="form">
                    <FormInput
                      label={"Current email"}
                      type={"email"}
                      placeholder={"businees@silalap.com"}
                    />
                    <FormInput
                      label={"Verified"}
                      type={"bool"}
                      placeholder={"No"}
                    />
                    <div className="butns">
                      <Button className="btn1" type="submit">
                        Change e-mail
                      </Button>
                      <Button className="btn2" onClick={handleShowOtpModel}>
                        Verify e-mail
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            ) : (
              " "
            )}

            {phone ? (
              <div>
                <h3>phone Settings</h3>
                <div className="inputs">
                  <Form className="form">
                    <FormInput
                      label={"Current phone"}
                      type={"number"}
                      placeholder={"+9243623772"}
                    />
                    <FormInput
                      label={"Verified"}
                      type={"bool"}
                      placeholder={"No"}
                    />
                    <div className="butns">
                      <Button className="btn1">Change number</Button>
                      <Button
                        className="btn2"
                        onClick={() => setVerifyNumber(true)}
                      >
                        Verify number
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            ) : (
              " "
            )}

            {password ? (
              <div>
                <h3>phone Settings</h3>
                <div className="inputs">
                  <Form className="form">
                    <FormInput
                      label={"New Password"}
                      type={"Password"}
                      placeholder={"********"}
                    />
                    <FormInput
                      label={"Confirm New Password"}
                      type={"password"}
                      placeholder={"*********"}
                    />
                    <div className="butns">
                      <Button className="btn2">update Passsword</Button>
                    </div>
                  </Form>
                </div>
              </div>
            ) : (
              " "
            )}
          </Col>
        </Row>
        <Modal
          className="d-flex justify-content-center model"
          show={showEmailModel}
          onHide={handleCloseEmailModel}
          centered
        >
          <ModalStyle>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center p-4 ">
              <h3>Authentication Setup Required</h3>
              <div className="text">
                You’re trying to activate E-mail code verification but you don’t
                have a verefied email, would you like to set it up now?
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex w-100 ">
                <Col lg={6} className="pe-2">
                  <Button className="btn1 w-100" onClick={ModelIn}>
                    yes, take me
                  </Button>
                </Col>
                <Col lg={6} className="ps-2">
                  <Button
                    className="btn2 w-100"
                    onClick={handleCloseEmailModel}
                  >
                    No, latter
                  </Button>
                </Col>
              </div>
            </Modal.Footer>
          </ModalStyle>
        </Modal>

        {verifyNumber ? (
          <VerifyIdentity
            show={handleShowNumber}
            close={handleCloseNumber}
            label={"Number"}
            type={"+9237637263272"}
          />
        ) : (
          ""
        )}

        {otpModel ? (
          <VerifyIdentity
            show={handleShowOtpModel}
            close={handleCloseOtpModel}
            label={"email"}
            type={"mosadhad@nsdsn.com"}
          />
        ) : (
          ""
        )}
      </div>
    </SecurityPrefrence>
  );
}
export default SecurityPrefrences;
