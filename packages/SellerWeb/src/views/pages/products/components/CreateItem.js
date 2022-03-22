import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Tab,
    Nav,
    Row,
    Col,
    Form
} from 'react-bootstrap'
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
    UploadImages,
} from "../../../components/Style"
import {
    CustomizationCategory,
    CustomizationItem,
} from '../../../components/products/Components'
import {
    SearchWindow
} from '../../../components/UseFullElements'
import {
    BackArrow,
    uploadImgPlaceholder,
    UplaodIcon,
} from "../../../components/AllImages"

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
                                            <div className="between">
                                                <Label>Cuisine (!)</Label>
                                                <div className="info-sign poppins text-white center">?</div>
                                            </div>
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
                                    <Row>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="glutten">
                                                <Form.Check type="checkbox" label="Glutten" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="milk">
                                                <Form.Check type="checkbox" label="Cow’s milk" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="eggs">
                                                <Form.Check type="checkbox" label="Eggs" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="nuts">
                                                <Form.Check type="checkbox" label="True nuts" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="meat">
                                                <Form.Check type="checkbox" label="Meat" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="fish">
                                                <Form.Check type="checkbox" label="Fish" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="peanut">
                                                <Form.Check type="checkbox" label="Peanut" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="shell-fish">
                                                <Form.Check type="checkbox" label="Shellfish" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Label className="mb-20 mt-20">Food preferences</Label>
                                    <Row>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="spicy">
                                                <Form.Check type="checkbox" label="Spicy" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="organic">
                                                <Form.Check type="checkbox" label="Organic" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="vegan">
                                                <Form.Check type="checkbox" label="Vegan" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Form.Group className="mb-1" controlId="vege">
                                                <Form.Check type="checkbox" label="Vegeterian" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </CardStyled>
                                <CardStyled>
                                    <Label className="mb-20 f-15">Select customisations</Label>
                                    <Row>
                                        <Col md={3} xs={6}>
                                            <CustomizationCategory>Toppings</CustomizationCategory>
                                            <CustomizationItem
                                                item="Sandwiches Toppings"
                                            />
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <CustomizationCategory>Sauces</CustomizationCategory>
                                            <CustomizationItem
                                                item="Sauces"
                                            />
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <CustomizationCategory>Drink</CustomizationCategory>
                                            <CustomizationItem
                                                item="Soft Drinks"
                                            />
                                        </Col>
                                    </Row>
                                    <SearchWindow
                                        ID="customizatoin-search"
                                    />
                                    <Row>
                                        <Col md={3} xs={6}>
                                            <CustomizationItem
                                                classN="grey"
                                                item="Soft Drinks"
                                            />
                                        </Col>
                                    </Row>
                                </CardStyled>
                            </Col>
                            <Col lg={4}>
                                <CardStyled>
                                    <Label>Set the price (!)</Label>
                                    <div className="position-relative">
                                        <span className="input-dollar-sign">$</span>
                                        <Input type="number" min="0" className="ps-4" />
                                    </div>
                                </CardStyled>
                                <CardStyled>
                                    <UploadImages>
                                        <Row>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label class="checkbox">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label class="checkbox">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label class="checkbox">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label class="checkbox">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="pt-1">
                                            <div className="end">
                                                <p className="lato size-text">2 mb max</p>
                                            </div>
                                            <button className="center border-0 text-white poppins">
                                                <UplaodIcon />
                                                Upload
                                            </button>
                                        </div>
                                    </UploadImages>
                                </CardStyled>
                                <CardStyled>
                                    <Row>
                                        <Col xs={6}>
                                            <Form.Group className="mb-1" controlId="hot">
                                                <Form.Check type="checkbox" label="Hot" />
                                            </Form.Group>
                                            <Form.Group className="mb-1" controlId="Breakable">
                                                <Form.Check type="checkbox" label="Breakable" />
                                            </Form.Group>
                                            <Form.Group className="mb-1" controlId="Flammable">
                                                <Form.Check type="checkbox" label="Flammable" />
                                            </Form.Group>
                                            <Form.Group className="mb-1" controlId="Liquid">
                                                <Form.Check type="checkbox" label="Liquid" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group className="mb-1" controlId="pick-up">
                                                <Form.Check type="checkbox" label="Pick up only" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </CardStyled>
                                <CardStyled>
                                    <Label>Set the price  (!)</Label>
                                    <div className="d-flex align-items-center">
                                        <Col sm={6}>
                                            <Input type="text" placeholder="30" />
                                        </Col>
                                        <Label className="f-15 mb-4 ms-3">minutes</Label>
                                    </div>
                                </CardStyled>
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