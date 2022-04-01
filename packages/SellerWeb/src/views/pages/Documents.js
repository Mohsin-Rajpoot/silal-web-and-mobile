import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import {
    SimpleNav,
    CardStyled,
    Label,
    Input,
    Button,
} from '../components/Style'
import {
    Menu,
    ExportIcon,
} from '../components/AllImages'

const Documents = ({
    sideBar,
    setSideBar,
}) => {
    const [itin, setItin] = useState('314-23-N1348')
    const [acc, setAcc] = useState('2345 5445 7922 2054')

    const sidebarHandler = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <SimpleNav>
                <button
                    className="menu"
                    onClick={sidebarHandler}>
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
        </>
    )
}

export default Documents