import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {
    Tab,
    Nav,
    Row,
    Col,
    Form,
    Modal,
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
    EditButton,
    UsedItemTag,
    UploadImageSmallContainer,
    UploadedImageSmallContainer,
    ThemeModal,
} from "../../../components/Style"
import {
    CustomizationCategory,
    CustomizationItem,
    CustomizationTemplate,
    Box,
    BoxCol,
} from '../../../components/products/Components'
import { SearchWindow } from '../../../components/UseFullElements'
import {
    BackArrow,
    uploadImgPlaceholder,
    UplaodIcon,
    EditWhite,
    PlusIcon,
    uploadIcon2,
    bottleImg,
    closeRed,
    DelIcon,
} from "../../../components/AllImages"

const CreateItem = () => {
    const history = useHistory()
    const [createNew, setCreateNew] = useState(false)
    const [customisationI, setCustomisationI] = useState('')
    const [showDelModal, setShowDelModal] = useState(false)
    const [qty1, setQty1] = useState('5')
    const [qty2, setQty2] = useState('5')
    const [qty3, setQty3] = useState('5')
    const [qty4, setQty4] = useState('5')
    const [qty5, setQty5] = useState('5')
    const [price1, setPrice1] = useState('$ 3.00')
    const [price2, setPrice2] = useState('$ 3.00')
    const [price3, setPrice3] = useState('$ 3.00')
    const [price4, setPrice4] = useState('$ 3.00')
    const [price5, setPrice5] = useState('$ 3.00')
    const [maxSelected, setMaxSelected] = useState('5')

    const handleCloseDelModal = () => setShowDelModal(false)
    const handleShowDelModal = () => setShowDelModal(true)

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
                    <Button
                        disabled
                        className="me-3 ms-4 w-148 mb-26"
                        onClick={handleShowDelModal}>
                        Save as draft
                    </Button>
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
                                                <div className="position-relative info-hover">
                                                    <div className="info-sign poppins text-white center">?</div>
                                                    <div className="info-div">Didn’t find an appropriate category? <Link to="#">Contact us</Link> and we'll add it!</div>
                                                </div>
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
                                                        <label className="checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label className="checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label className="checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="display-img">
                                                    <img src={uploadImgPlaceholder} alt="img" />
                                                    <div className="checkbox-main">
                                                        <label className="checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
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
                        {createNew ? '' :
                            <>
                                <CardStyled>
                                    <CustomizationTemplate>
                                        <div className="between">
                                            <h1 className="mb-15">Toppings: <span>Lettuce, Cheese, Tomatoes, Pickle</span></h1>
                                            <div className="d-flex align-items-center mb-15">
                                                <h2>#542399</h2>
                                                <EditButton className="center">
                                                    <EditWhite />
                                                </EditButton>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <div className="items-col">
                                                <div className="box">Lettuce</div>
                                                <input type="text" value="$ 0.00" disabled />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Cheese</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Tomatoes</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Pickle</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box disabled">Onion</div>
                                                <p>Unavailable</p>
                                            </div>
                                        </div>
                                        <div className="between">
                                            <h1 className="mb-0">Use for: <span>Sandwiches: Burger, Deli</span></h1>
                                            <div className="d-flex">
                                                <Button className="version-btn">Customise new version</Button>
                                                <Button className="template-btn">Add template as is</Button>
                                            </div>
                                        </div>
                                    </CustomizationTemplate>
                                </CardStyled>
                                <CardStyled>
                                    <CustomizationTemplate>
                                        <div className="between">
                                            <h1 className="mb-15">Sauces: <span>Lettuce, Cheese, Tomatoes, Pickle</span></h1>
                                            <div className="d-flex align-items-center mb-15">
                                                <h2>#542399</h2>
                                                <EditButton className="center">
                                                    <EditWhite />
                                                </EditButton>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <div className="items-col">
                                                <div className="box">Ketchup</div>
                                                <input type="text" value="$ 0.00" disabled />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Mayonaise</div>
                                                <input type="text" value="$ 0.00" disabled />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">BBQ</div>
                                                <input type="text" value="$ 0.00" disabled />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">1000 Islands</div>
                                                <input type="text" value="$ 0.00" disabled />
                                            </div>
                                        </div>
                                        <div className="between">
                                            <h1 className="mb-0">Use for: <span>All meals</span></h1>
                                            <div className="d-flex">
                                                <Button className="version-btn">Customise new version</Button>
                                                <Button className="template-btn">Add template as is</Button>
                                            </div>
                                        </div>
                                    </CustomizationTemplate>
                                </CardStyled>
                                <CardStyled>
                                    <CustomizationTemplate>
                                        <div className="between">
                                            <h1 className="mb-15">Drinks: <span>Pepsi, Nestea, Coca-cola, Water, 7UP</span></h1>
                                            <div className="d-flex align-items-center mb-15">
                                                <h2>#542399</h2>
                                                <EditButton className="center">
                                                    <EditWhite />
                                                </EditButton>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <div className="items-col">
                                                <div className="box">Pepsi</div>
                                                <input type="text" value="$ 0.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Nestea</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Coca-Cola</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">Water</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                            <div className="items-col">
                                                <div className="box">7UP</div>
                                                <input type="text" value="$ 2.00" />
                                            </div>
                                        </div>
                                        <div className="between">
                                            <h1 className="mb-0">Use for: <span>All meals</span></h1>
                                            <div className="d-flex">
                                                <Button className="version-btn">Customise new version</Button>
                                                <Button className="template-btn">Add template as is</Button>
                                            </div>
                                        </div>
                                    </CustomizationTemplate>
                                </CardStyled>
                                <div className="center">
                                    <Button className="mb-20" onClick={() => setCreateNew(true)}>
                                        <PlusIcon className="me-2 mb-1" />
                                        Create new
                                    </Button>
                                </div>
                            </>
                        }
                        {createNew &&
                            <>
                                <Row className="lato">
                                    <Col lg={8}>
                                        <CardStyled>
                                            <Row className="align-items-center">
                                                <Col xl={2} lg={3}>
                                                    <Label className="f-regular f-15 mb-20">Customisation name</Label>
                                                </Col>
                                                <Col xl={10} lg={9}>
                                                    <Input
                                                        type="text"
                                                        placeholder='Drinks'
                                                        value={customisationI}
                                                        onChange={(e) => setCustomisationI(e.target.value)}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center">
                                                <Col xl={2} lg={3}>
                                                    <Label className="f-regular f-15 mb-20">Available customisations</Label>
                                                </Col>
                                                <Col xl={10} lg={9}>
                                                    <Row>
                                                        <BoxCol>
                                                            <Box>Pepsi</Box>
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Box>Nestea</Box>
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Box>Coca-Cola</Box>
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Box>Water</Box>
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Box>7UP</Box>
                                                        </BoxCol>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center">
                                                <Col xl={2} lg={3}>
                                                    <Label className="f-regular f-15 mb-0">Max quantity</Label>
                                                    <p className="charac-left text-start">(0 if not quantifiable and customer selects only one)</p>
                                                </Col>
                                                <Col xl={10} lg={9}>
                                                    <Row>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center number-apperance"
                                                                type="number"
                                                                min="0"
                                                                value={qty1}
                                                                onChange={(e) => setQty1(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center number-apperance"
                                                                type="number"
                                                                min="0"
                                                                value={qty2}
                                                                onChange={(e) => setQty2(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center number-apperance"
                                                                type="number"
                                                                min="0"
                                                                value={qty3}
                                                                onChange={(e) => setQty3(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center number-apperance"
                                                                type="number"
                                                                min="0"
                                                                value={qty4}
                                                                onChange={(e) => setQty4(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center number-apperance"
                                                                type="number"
                                                                min="0"
                                                                value={qty5}
                                                                onChange={(e) => setQty5(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center">
                                                <Col xl={2} lg={3}>
                                                    <Label className="f-regular f-15 mb-20">Price addition</Label>
                                                </Col>
                                                <Col xl={10} lg={9}>
                                                    <Row>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center"
                                                                value={price1}
                                                                onChange={(e) => setPrice1(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center"
                                                                value={price2}
                                                                onChange={(e) => setPrice2(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center"
                                                                value={price3}
                                                                onChange={(e) => setPrice3(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center"
                                                                value={price4}
                                                                onChange={(e) => setPrice4(e.target.value)}
                                                            />
                                                        </BoxCol>
                                                        <BoxCol>
                                                            <Input
                                                                className="text-center"
                                                                value={price5}
                                                                onChange={(e) => setPrice5(e.target.value)} />
                                                        </BoxCol>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="py-2">
                                                <Col xl={2} lg={3}>
                                                    <Label className="f-regular f-15 mb-20">Available</Label>
                                                </Col>
                                                <Col xl={10} lg={9}>
                                                    <Row>
                                                        <BoxCol className="center">
                                                            <label className="checkbox grey-blue">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <label className="checkbox grey-blue">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <label className="checkbox grey-blue">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <label className="checkbox grey-blue">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <label className="checkbox grey-blue">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </BoxCol>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center">
                                                <Col xl={2} lg={3}>
                                                    <Label className="f-regular f-15 mb-20">Image</Label>
                                                </Col>
                                                <Col xl={10} lg={9}>
                                                    <Row>
                                                        <BoxCol className="center">
                                                            <UploadImageSmallContainer>
                                                                <img src={uploadIcon2} alt="icon" />
                                                                <input type="file" />
                                                            </UploadImageSmallContainer>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <UploadedImageSmallContainer>
                                                                <button className="close border-0">
                                                                    <img src={closeRed} alt="x" />
                                                                </button>
                                                                <img src={bottleImg} alt="img" />
                                                            </UploadedImageSmallContainer>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <UploadImageSmallContainer>
                                                                <img src={uploadIcon2} alt="icon" />
                                                                <input type="file" />
                                                            </UploadImageSmallContainer>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <UploadImageSmallContainer>
                                                                <img src={uploadIcon2} alt="icon" />
                                                                <input type="file" />
                                                            </UploadImageSmallContainer>
                                                        </BoxCol>
                                                        <BoxCol className="center">
                                                            <UploadImageSmallContainer>
                                                                <img src={uploadIcon2} alt="icon" />
                                                                <input type="file" />
                                                            </UploadImageSmallContainer>
                                                        </BoxCol>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <div className="end template-footer">
                                                <Button className='del'>
                                                    <DelIcon />
                                                    Delete
                                                </Button>
                                                <Button>Done</Button>
                                            </div>
                                        </CardStyled>
                                    </Col>
                                    <Col lg={4}>
                                        <CardStyled>
                                            <div className="between">
                                                <Label className="f-15 f-regular mb-20">Template ID:</Label>
                                                <Label className="f-15 f-regular mb-20 grey-text">#542399</Label>
                                            </div>
                                            <div className="between">
                                                <Label>Template name</Label>
                                                <p className="charac-left">14 characters left</p>
                                            </div>
                                            <Input type="text" placeholder="Drinks - for salads" />
                                            <Label>Template tags</Label>
                                            <Textarea placeholder="Drinks - for salads" className="small"></Textarea>
                                            <Label>Used for</Label>
                                            <Textarea placeholder="Soft Drinks (made for all meals expect kids meals)" className="small"></Textarea>
                                            <Label className="f-15 f-regular">Currently used items</Label>
                                            <div className="d-flex flex-wrap mb-10">
                                                <UsedItemTag>Meals (but 2)</UsedItemTag>
                                                <UsedItemTag>Sandwiche</UsedItemTag>
                                            </div>
                                            <Row>
                                                <Col sm={8}>
                                                    <Label className="f-15 f-regular">Max selected in total</Label>
                                                    <p className="charac-left text-start">(0 for unlimited)</p>
                                                </Col>
                                                <Col sm={4}>
                                                    <Input
                                                        className="text-center number-apperance mb-0"
                                                        type="number"
                                                        min="0"
                                                        value={maxSelected}
                                                        onChange={(e) => setMaxSelected(e.target.value)}
                                                    />
                                                </Col>
                                            </Row>
                                        </CardStyled>
                                    </Col>
                                </Row>
                            </>
                        }
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

            <Modal show={showDelModal} onHide={handleCloseDelModal} centered>
                <ThemeModal>
                    <Modal.Header closeButton>
                        <Modal.Title>Save as drafts?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text">You have not finished creating the item. If you exit, the data will not be saved.</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex w-100">
                            <Col lg={6} className="pe-2">
                                <Button className="grey w-100" onClick={handleCloseDelModal}>
                                    Delete
                                </Button>
                            </Col>
                            <Col lg={6} className="ps-2">
                                <Button className="w-100" onClick={handleCloseDelModal}>
                                    Save as draft
                                </Button>
                            </Col>
                        </div>
                    </Modal.Footer>
                </ThemeModal>
            </Modal>
        </>
    )
}

export default CreateItem