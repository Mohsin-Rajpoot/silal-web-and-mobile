import React from 'react'
import { Wrapper, ButtonLink } from '../components/about-us/Styled'
import { SimpleNav } from '../components/Style'
import { Row, Col } from 'react-bootstrap'
import {
    Menu,
    RightArrow,
    LogoS,
} from '../components/AllImages'

const AboutUs = ({
    sideBar,
    setSideBar
}) => {
    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <Wrapper>
            <SimpleNav>
                <button
                    className="menu"
                    onClick={sidebarHandler}>
                    <Menu />
                </button>
                <h1>About app</h1>
            </SimpleNav>
            <Row>
                <Col lg={4} md={8} xs={12}>
                    <div className="text-center center flex-column">
                        <div className="logo center">
                            <LogoS />
                        </div>
                        <h1>Silal App</h1>
                        <h6>Ver. 1.0</h6>
                    </div>
                    <ButtonLink className="between">
                        Terms of use
                        <RightArrow className="arrow" />
                    </ButtonLink>
                    <ButtonLink className="between">
                        Privacy policy
                        <RightArrow className="arrow" />
                    </ButtonLink>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default AboutUs