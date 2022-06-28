import React, { useState } from "react";
import Nav from "../../components/profile/Nav";
import AccountFreezedModal from "../../components/profile/AccountFreezedModal";
import CodeModal from "../../components/profile/CodeModal";
import Sidebar from "../../components/UI/Sidebar";
import { Menu } from "../../components/AllImages";

import { Row, Col } from "react-bootstrap";
import {
  HeadingStyled,
  CardStyled,
  Label,
  Input,
  Select,
  Button,
  Tag,
} from "../../components/Style";
import { ProfileBanner } from "../../components/profile/Components";
import { restaurantBg, avatar } from "../../components/AllImages";
import GlobalStyle from "../../components/GlobalStyled";
const Profile = () => {
  const [editState, setEditState] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showFreezeModal, setFreezeModal] = useState(true);
  const [restName, setRestName] = useState("Rastaurant’s name");
  const [slogan, setSlogan] = useState(
    "The slogan will be here mх 40 characters"
  );
  const [streetName, setStreetName] = useState("Street name");
  const [gps, setGps] = useState("Location via GPS");
  const [streetNumber, setStreetNumber] = useState("24/3");
  const [postal, setPostal] = useState("233 344");

  const handleCloseCodeModal = () => setShowCodeModal(false);
  const handleShowCodeModal = () => setShowCodeModal(true);
  const handleCloseFreezeModal = () => setFreezeModal(false);
  const [sideBar, setSideBar] = useState(true);

  const sideBarToggle = () => {
    if (sideBar === false) setSideBar(true);
    else setSideBar(false);
  };
  return (
    <>
      <GlobalStyle />
      <div className="d-flex">
        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />

        <div className="px-3 w-100">
          <Nav sideBar={sideBar} setSideBar={setSideBar} />
          <Row>
            <Col lg={8} md={8}>
              {editState ? (
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
                    <Label size="15px">
                      Business address{" "}
                      <span style={{ color: "#E62828" }}>*</span>{" "}
                    </Label>
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
              ) : (
                <>
                  <CardStyled>
                    <ProfileBanner bgImg={restaurantBg} avatar={avatar} />
                    <HeadingStyled
                      size="25px"
                      weight="700"
                      className="dark-clr poppins"
                      margin="0"
                    >
                      Restaurant’s name
                    </HeadingStyled>
                    <HeadingStyled
                      size="15px"
                      weight="400"
                      className="dark-clr"
                      margin="0 0 20px 0"
                    >
                      The slogan will be here mх 40 characters
                    </HeadingStyled>
                    <Row>
                      <Col sm={6}>
                        <HeadingStyled
                          size="16px"
                          weight="600"
                          className="dark-clr poppins"
                          margin="0 0 6px 0"
                        >
                          Opening hours
                        </HeadingStyled>
                        <HeadingStyled
                          size="15px"
                          weight="400"
                          className="dark-clr"
                          margin="0 0 20px 0"
                        >
                          Mon - Fri 10:00 - 22:00, Sat, Sun - Closed
                        </HeadingStyled>
                      </Col>
                      <Col sm={6}>
                        <HeadingStyled
                          size="16px"
                          weight="600"
                          className="dark-clr poppins"
                          margin="0 0 6px 0"
                        >
                          Location
                        </HeadingStyled>
                        <HeadingStyled
                          size="15px"
                          weight="400"
                          className="dark-clr"
                          margin="0 0 20px 0"
                        >
                          8502 Preston Rd. Inglewood
                        </HeadingStyled>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap">
                      <Tag>Sushi</Tag>
                      <Tag>Burgers</Tag>
                      <Tag>Pan-asian</Tag>
                    </div>
                  </CardStyled>
                </>
              )}
            </Col>
            <Col lg={4} md={4}>
              {editState ? (
                <>
                  <Row>
                    <Col xs={6}>
                      <Button
                        className="w-100 grey"
                        onClick={() => setEditState(false)}
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col xs={6}>
                      <Button className="w-100">Save changes</Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  <Button
                    className="w-100"
                    mb="20px"
                    onClick={() => setEditState(true)}
                  >
                    Edit profile
                  </Button>
                  <Button
                    bg="#05AE4B33"
                    color="#05AE4B"
                    className="w-100 hover-fill"
                    onClick={handleShowCodeModal}
                  >
                    Change admin code
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </div>
        <CodeModal
          showCodeModal={showCodeModal}
          handleClose={handleCloseCodeModal}
        />
        <AccountFreezedModal
          showModal={showFreezeModal}
          handleClose={handleCloseFreezeModal}
        />
      </div>
    </>
  );
};

export default Profile;
