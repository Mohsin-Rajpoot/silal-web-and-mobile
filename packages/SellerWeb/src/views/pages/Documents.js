import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  SimpleNav,
  CardStyled,
  Label,
  Input,
  Button,
} from "../components/Style";
import Sidebar from "../components/UI/Sidebar";
import { Menu, ExportIcon } from "../components/AllImages";
import GlobalStyle from "../components/GlobalStyled";

const Documents = () => {
  const [itin, setItin] = useState("314-23-N1348");
  const [acc, setAcc] = useState("2345 5445 7922 2054");

  const [sideBar, setSideBar] = useState(true);
  const sideBarToggle = () => {
    if (sideBar === false) setSideBar(true);
    else setSideBar(false);
  };
  return (
    <>
      <div className="d-flex">
        <GlobalStyle />

        <Sidebar sideBar={sideBar} setSideBar={sideBarToggle} />
        <div className="flex-1 px-3">
          <SimpleNav>
            <button className="menu" onClick={sideBarToggle}>
              <Menu />
            </button>
            <h1>Documents</h1>
          </SimpleNav>
          <Row>
            <Col xl={4} lg={5} md={6} xs={12}>
              <CardStyled>
                <Label>ITIN</Label>
                <Input
                  type="text"
                  value={itin}
                  onChange={(e) => setItin(e.target.value)}
                />
                <Label>Checking account</Label>
                <Input
                  type="text"
                  value={acc}
                  onChange={(e) => setAcc(e.target.value)}
                />
              </CardStyled>
            </Col>
            <Col>
              <Button className="center px-4">
                <ExportIcon />
                Export
              </Button>
            </Col>
          </Row>
          {/* <Content sideBar={sideBar} setSideBar={sideBarToggle} /> */}
        </div>
      </div>
    </>
  );
};

export default Documents;
