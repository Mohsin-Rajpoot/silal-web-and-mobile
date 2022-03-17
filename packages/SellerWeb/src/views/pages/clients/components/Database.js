import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FlexContainer, HeadingStyled } from "../../../components/Style";
import CanvasModal from "./CanvasModal";
const Database = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState(false);
  const setModal = (view,type) => {
    setModalShow(view)
    setModalType(type)
  };
  return (
    <>
      <Row className="mt-4">
        {[...Array(6)].map((x, i) => (
          <>
            <Col className="mb-4" xs={12} md={6} lg={4} key={i}>
              <DataCard
                className="bg-white overflow-hiden"
                type="button"
                onClick={() => setModal(true,'reccuring')}
              >
                <DataCardHeader>
                  <HeadingStyled
                    size="15px"
                    className="text-white"
                    weight={600}
                  >
                    Brooklyn Simmons
                  </HeadingStyled>
                  <FlexContainer className="ms-auto status-tip text-white">
                    Reccuring client
                  </FlexContainer>
                </DataCardHeader>
                <DataCardBody>
                  <ul className="list-unstyled m-0 p-0">
                    <li>
                      <FlexContainer>
                        <HeadingStyled
                          size="13px"
                          weight={500}
                          color="#CCD4D6"
                          className="head-label"
                        >
                          Client ID
                        </HeadingStyled>
                        <HeadingStyled size="13px" weight={700}>
                          2341
                        </HeadingStyled>
                      </FlexContainer>
                    </li>
                    <li>
                      <FlexContainer>
                        <HeadingStyled
                          size="13px"
                          weight={500}
                          color="#CCD4D6"
                          className="head-label"
                        >
                          Client ID
                        </HeadingStyled>
                        <HeadingStyled size="13px" weight={700}>
                          69
                        </HeadingStyled>
                      </FlexContainer>
                    </li>
                    <li>
                      <FlexContainer>
                        <HeadingStyled
                          size="13px"
                          weight={500}
                          color="#CCD4D6"
                          className="head-label"
                        >
                          Client ID
                        </HeadingStyled>
                        <HeadingStyled size="13px" weight={700}>
                          $&nbsp;426.67
                        </HeadingStyled>
                      </FlexContainer>
                    </li>
                  </ul>
                </DataCardBody>
              </DataCard>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4} key={i}>
              <DataCard
                className="bg-white overflow-hiden"
                type="button"
                onClick={() => setModal(true,"completed")}
              >
                <DataCardHeader>
                  <HeadingStyled
                    size="15px"
                    className="text-white"
                    weight={600}
                  >
                    Brooklyn Simmons
                  </HeadingStyled>
                  <FlexContainer className="ms-auto text-white status-tip bg-success">
                    Completed
                  </FlexContainer>
                </DataCardHeader>
                <DataCardBody>
                  <ul className="list-unstyled m-0 p-0">
                    <li>
                      <FlexContainer>
                        <HeadingStyled
                          size="13px"
                          weight={500}
                          color="#CCD4D6"
                          className="head-label"
                        >
                          Client ID
                        </HeadingStyled>
                        <HeadingStyled size="13px" weight={700}>
                          2341
                        </HeadingStyled>
                      </FlexContainer>
                    </li>
                    <li>
                      <FlexContainer>
                        <HeadingStyled
                          size="13px"
                          weight={500}
                          color="#CCD4D6"
                          className="head-label"
                        >
                          Client ID
                        </HeadingStyled>
                        <HeadingStyled size="13px" weight={700}>
                          69
                        </HeadingStyled>
                      </FlexContainer>
                    </li>
                    <li>
                      <FlexContainer>
                        <HeadingStyled
                          size="13px"
                          weight={500}
                          color="#CCD4D6"
                          className="head-label"
                        >
                          Client ID
                        </HeadingStyled>
                        <HeadingStyled size="13px" weight={700}>
                          $&nbsp;426.67
                        </HeadingStyled>
                      </FlexContainer>
                    </li>
                  </ul>
                </DataCardBody>
              </DataCard>
            </Col>
          </>
        ))}
      </Row>
      <CanvasModal show={modalShow} setShow={setModal} type={modalType} />
    </>
  );
};

export const DataCard = styled.div`
  box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
  border-radius: 5px;
`;
export const DataCardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #5ab3a8;
  border-radius: 5px 5px 0px 0px;
  padding: 15px;
  .status-tip {
    padding: 3px 11px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    font-size: 11px;
    font-weight: 500;
  }
`;
export const DataCardBody = styled.div`
  padding: 15px;
  ul li {
    margin-bottom: 10px;
  }
  .head-label {
    width: 85px;
    margin-right: 40px;
  }
`;
export default Database;
