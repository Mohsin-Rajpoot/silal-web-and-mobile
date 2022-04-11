import React, { useState } from 'react'
import Nav from '../../components/profile/Nav'
import { Row, Col } from 'react-bootstrap'
import {
    HeadingStyled,
    CardStyled,
    Label,
    Input,
    Button,
} from '../../components/Style'
import { ProfileBanner } from '../../components/profile/Components'
import { restaurantBg } from '../../components/AllImages'

const Profile = () => {
    const [editState, setEditState] = useState(false)

    return (
        <>
            <Nav />
            <Row>
                <Col md={8}>
                    <ProfileBanner
                        bgImg={restaurantBg}
                        location="8502 Preston Rd. Inglewood"
                        rName="Restaurant’s name"
                        slogan="The slogan will be here mх 40 characters"
                    />
                    <CardStyled>
                        <HeadingStyled size="19px" weight="600" className="dark-clr" margin="0 0 11px 0">Opening hours</HeadingStyled>
                        <HeadingStyled size="15px" weight="400" className="dark-clr" margin="0 0 20px 0">Mon - Fri 10:00 - 22:00, Sat, Sun - Closed</HeadingStyled>
                        <HeadingStyled size="19px" weight="600" color="#002733" margin="0 0 11px 0">Tags</HeadingStyled>
                    </CardStyled>
                </Col>
                <Col md={4}>
                    <Button className="w-100" mb="20px">Edit profile</Button>
                    <Button className="w-100">Change admin code</Button>
                </Col>
            </Row>
        </>
    )
}

export default Profile