import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import styled from "styled-components";
import { DropdownMenu } from "../../components/AllImages";
import { FlexContainer, HeadingStyled } from "../../components/Style";

const AllOffers = () => {
    return (
        <Row>
            {[...Array(7)].map((x, i) => (
                <>
                    <Col md={6} lg={4} className="mb-3" key={i}>
                        <CardBox>
                            <FlexContainer>
                                <HeadingStyled className="mb-0" size="17px" weight="600">
                                    Sunday Funday
                                </HeadingStyled>
                                <Dropdown className="ms-auto">
                                    <Dropdown.Toggle bsPrefix="button">
                                        <DropdownMenu size={13.3} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href="#">
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Freeze Listing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </FlexContainer>
                            <HeadingStyled className="mb-0 mt-1" size="13px" weight="600" color="#CCD4D6">
                                8 items
                            </HeadingStyled>
                            <BorderSeprator />
                            <FlexContainer className="mb-2">
                                <HeadingStyled className="mb-0 mt-1 text-uppercase" size="13px" weight="600" color="#4C6870">
                                    Ordered items
                                </HeadingStyled>
                                <HeadingStyled className="mb-0 mt-1 ms-auto" size="13px" weight="600" color="#002733">
                                    2341
                                </HeadingStyled>
                            </FlexContainer>
                            <FlexContainer className="mb-2">
                                <HeadingStyled className="mb-0 mt-1 text-uppercase" size="13px" weight="600" color="#4C6870">
                                    money generated
                                </HeadingStyled>
                                <HeadingStyled className="mb-0 mt-1 ms-auto" size="13px" weight="600" color="#002733">
                                    2341
                                </HeadingStyled>
                            </FlexContainer>
                            <FlexContainer>
                                <HeadingStyled className="mb-0 mt-1 text-uppercase" size="13px" weight="600" color="#4C6870">
                                    active
                                </HeadingStyled>
                                <HeadingStyled className="mb-0 mt-1 ms-auto text-uppercase" size="13px" weight="600" color="#002733">
                                    Every Sunday
                                </HeadingStyled>
                            </FlexContainer>
                        </CardBox>
                    </Col>
                </>
            ))}
        </Row>
    );
};
const CardBox = styled.div`
  box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
  border-radius: 5px;
  background: #fff;
  padding: 15px;
  .dropdown {
    a {
      font-size: 13px;
      color:#4C6870;
    }
    button {
      border: none !important;
      background-color: transparent !important;
      padding: 0;
      margin: 0;
      svg path {
        fill: #ccd4d6;
      }
    }
  }
`;
export const BorderSeprator = styled.div`
  border-bottom: 1px solid rgba(0, 39, 51, 0.08);
  margin:15px -15px;
  height:1px;
`;

export default AllOffers;
