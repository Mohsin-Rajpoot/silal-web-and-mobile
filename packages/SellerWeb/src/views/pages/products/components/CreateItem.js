import React from 'react'
import { useHistory } from 'react-router-dom'
import { Tab, Nav, Row, Col } from 'react-bootstrap'
import {
    FlexContainer,
    HeadingStyled,
    Button,
    ButtonText,
    ThemeTabs,
    CardStyled,
    Label,
    Select,
    Textarea,
    Input,
} from "../../../components/Style"
import { BackArrow } from "../../../components/AllImages"

const CreateItem = () => {
    const history = useHistory()

    return (
        <>
            <FlexContainer className="mt-20 justify-content-between flex-wrap">
                <div className="d-flex align-items-center">
                    <button onClick={history.goBack} className="back-arrow mb-26">
                        <BackArrow />
                    </button>
                    <HeadingStyled size="25px" weight="700" className="mb-26">
                        Create new item
                    </HeadingStyled>
                </div>
                <div className="d-flex align-items-center">
                    <ButtonText className="mb-26">Preview</ButtonText>
                    <Button disabled className="me-3 ms-4 w-148 mb-26">Save as draft</Button>
                    <Button className="w-148 mb-26">Publish</Button>
                </div>
            </FlexContainer>
            <Tab.Container id="create-item-tabs" defaultActiveKey="first">
                <ThemeTabs className="mb-26">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Add item</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Customisations Templates</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </ThemeTabs>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            <Col lg={8}>
                                <CardStyled>
                                    <Row>
                                        <Col sm={6}>
                                            <Label>Category (!)</Label>
                                            <Select>
                                                <option>Salad</option>
                                                <option>Salad</option>
                                                <option>Salad</option>
                                            </Select>
                                        </Col>
                                        <Col sm={6}>
                                            <Label>Cuisine (!)</Label>
                                            <Select>
                                                <option>Europian</option>
                                                <option>American</option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    <div className="between">
                                        <Label>Cuisine (!)</Label>
                                        <p className="charac-left">170 characters left</p>
                                    </div>
                                    <Input type="text" placeholder="Salad with shrimps and avocado" />
                                    <div className="between">
                                        <Label>Item description</Label>
                                        <p className="charac-left">170 characters left</p>
                                    </div>
                                    <Textarea placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."></Textarea>
                                    <div className="between">
                                        <Label>Ingredients</Label>
                                        <p className="charac-left">170 characters left</p>
                                    </div>
                                    <Textarea placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."></Textarea>
                                    <Label>Nutritional value</Label>
                                    <Row>
                                        <Col md={3} xs={6}>
                                            <Input type="text" placeholder="Calories" />
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Input type="text" placeholder="Protein" />
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Input type="text" placeholder="Fats" />
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Input type="text" placeholder="Carbohydrates" />
                                        </Col>
                                    </Row>
                                </CardStyled>
                                <CardStyled>
                                    <Label className="mb-20">Allergies</Label>
                                </CardStyled>
                            </Col>
                            <Col lg={4}>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam laudantium voluptates quidem, unde atque distinctio ex quae eum nobis nemo aperiam, incidunt velit consequatur ea, minima voluptate sit deserunt vitae!
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </>
    )
}

export default CreateItem