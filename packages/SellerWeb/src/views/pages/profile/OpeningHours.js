import React from 'react'
import Select from "react-select"
import TopNav from '../../components/profile/Nav'
import { DatePicker } from 'rsuite'
import '../../components/rsuite.css'
import { Wrapper, ToLabel } from '../../components/profile/OpeninHoursStyled'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { ToggleBtn } from '../../components/profile/Components'
import {
    ThemeTabs,
    HeadingStyled,
    CardStyled,
    Button,
} from '../../components/Style'
import { DelIcon, CalendarIcon2 } from '../../components/AllImages'

const OpeningHours = () => {
    const timeOptions = [
        { value: "1:00 AM", label: "1:00 AM" }, { value: "2:00 AM", label: "2:00 AM" }, { value: "3:00 AM", label: "3:00 AM" },
        { value: "4:00 AM", label: "4:00 AM" }, { value: "5:00 AM", label: "5:00 AM" }, { value: "6:00 AM", label: "6:00 AM" }, { value: "7:00 AM", label: "7:00 AM" },
        { value: "8:00 AM", label: "8:00 AM" }, { value: "9:00 AM", label: "9:00 AM" }, { value: "10:00 AM", label: "10:00 AM" }, { value: "11:00 AM", label: "11:00 AM" },
        { value: "12:00 PM", label: "12:00 PM" }, { value: "13:00 PM", label: "13:00 PM" }, { value: "14:00 PM", label: "14:00 PM" }, { value: "15:00 PM", label: "15:00 PM" },
        { value: "16:00 PM", label: "16:00 PM" }, { value: "17:00 PM", label: "17:00 PM" }, { value: "18:00 PM", label: "18:00 PM" }, { value: "19:00 PM", label: "19:00 PM" },
        { value: "20:00 PM", label: "20:00 PM" }, { value: "21:00 PM", label: "21:00 PM" }, { value: "22:00 PM", label: "22:00 PM" }, { value: "23:00 PM", label: "23:00 PM" },
        { value: "24:00 PM", label: "24:00 PM" }
    ]

    return (
        <Wrapper>
            <TopNav />
            <Tab.Container id="create-item-tabs" defaultActiveKey="first">
                <ThemeTabs className="mb-26">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Standard hours</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Special hours</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </ThemeTabs>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            <Col lg={8} xs={12}>
                                <CardStyled>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Monday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-flex align-items-center justify-content-around">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Tuesday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-flex align-items-center justify-content-around">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Wednesday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-flex align-items-center justify-content-around">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Thursday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-flex align-items-center justify-content-around">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Friday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-flex align-items-center justify-content-around">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Saturday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={false}
                                                    label="Closed"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6}></Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col sm={6}>
                                            <div className="between">
                                                <HeadingStyled
                                                    size="16px"
                                                    weight="16px"
                                                    className="lato">
                                                    Sunday
                                                </HeadingStyled>
                                                <ToggleBtn
                                                    name="OHours"
                                                    checked={false}
                                                    label="Closed"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={6}></Col>
                                    </Row>
                                </CardStyled>
                                <div className="end">
                                    <Button>Save standard hours</Button>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            <Col lg={8} xs={12}>
                                <CardStyled>
                                    <Row className="align-items-center mb-20">
                                        <Col md={4}>
                                            <div className="d-flex">
                                                <DatePicker
                                                    className="home-range openings-datepicker"
                                                    format="dd MMMM yy"
                                                    placeholder="dd mm yy"
                                                    character="&#160;&#160;-&#160;&#160;"
                                                    caretAs={CalendarIcon2}
                                                />
                                                <ToggleBtn
                                                    name="SHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col md={8} className="d-flex align-items-center justify-content-md-end">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <button className="del-btn center"><DelIcon /></button>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col md={4}>
                                            <div className="d-flex">
                                                <DatePicker
                                                    className="home-range openings-datepicker"
                                                    format="dd MMMM yy"
                                                    placeholder="dd mm yy"
                                                    character="&#160;&#160;-&#160;&#160;"
                                                    caretAs={CalendarIcon2}
                                                />
                                                <ToggleBtn
                                                    name="SHours"
                                                    checked={false}
                                                    label="Closed"
                                                />
                                            </div>
                                        </Col>
                                        <Col md={8} className="d-flex align-items-center justify-content-md-end">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select closed" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select closed" />
                                            <button className="del-btn center"><DelIcon /></button>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col md={4}>
                                            <div className="d-flex">
                                                <DatePicker
                                                    className="home-range openings-datepicker"
                                                    format="dd MMMM yy"
                                                    placeholder="dd mm yy"
                                                    character="&#160;&#160;-&#160;&#160;"
                                                    caretAs={CalendarIcon2}
                                                />
                                                <ToggleBtn
                                                    name="SHours"
                                                    checked={false}
                                                    label="Closed"
                                                />
                                            </div>
                                        </Col>
                                        <Col md={8} className="d-flex align-items-center justify-content-md-end">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select closed" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select closed" />
                                            <button className="del-btn center"><DelIcon /></button>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mb-20">
                                        <Col md={4}>
                                            <div className="d-flex">
                                                <DatePicker
                                                    className="home-range openings-datepicker"
                                                    format="dd MMMM yy"
                                                    placeholder="dd mm yy"
                                                    character="&#160;&#160;-&#160;&#160;"
                                                    caretAs={CalendarIcon2}
                                                />
                                                <ToggleBtn
                                                    name="SHours"
                                                    checked={true}
                                                    label="Open"
                                                />
                                            </div>
                                        </Col>
                                        <Col md={8} className="d-flex align-items-center justify-content-md-end">
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <ToLabel>TO</ToLabel>
                                            <Select options={timeOptions} placeholder="10:00 AM" className="hours-select" />
                                            <button className="del-btn center"><DelIcon /></button>
                                        </Col>
                                    </Row>
                                </CardStyled>
                                <div className="end">
                                    <Button>Save special hours</Button>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Wrapper>
    )
}

export default OpeningHours