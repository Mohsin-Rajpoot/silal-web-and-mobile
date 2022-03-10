import React from 'react'
import Nav from "../../components/home/Nav"
import { Row, Col } from 'react-bootstrap'
import { RestaurantHeading } from '../../components/UseFullElements'
import {
    RestaurantCard,
    HotProduct,
} from '../../components/home/Components'
import {
    CardStyled,
    Heading
} from '../../components/Style'
import {
    salesIcon,
    cartIcon,
    bellIcon,
    ratingIcon,
    dish,
} from '../../components/AllImages'

const Statistics = ({ setSideBar }) => {
    return (
        <>
            <Nav setSideBar={setSideBar} />
            <div className="d-flex">
                <RestaurantHeading
                    heading="Restaurant’s name"
                    hours="Peak Hours 12 AM - 14 PM"
                    location="8502 Preston Rd. Inglewood"
                />
            </div>
            <Row>
                <Col lg={3} md={6}>
                    <RestaurantCard
                        icon={salesIcon}
                        heading="Total Sales"
                        number="$6810.28"
                        rate="+ 11.7%"
                        rateStatus={true}
                    />
                </Col>
                <Col lg={3} md={6}>
                    <RestaurantCard
                        icon={cartIcon}
                        heading="Total Orders"
                        number="398"
                        rate="- 4%"
                        rateStatus={false}
                    />
                </Col>
                <Col lg={3} md={6}>
                    <RestaurantCard
                        icon={bellIcon}
                        heading="Out-of-stock items"
                        number="6"
                    />
                </Col>
                <Col lg={3} md={6}>
                    <RestaurantCard
                        icon={ratingIcon}
                        heading="Total Raiting"
                        number="4.8"
                        rate="+ 0.9%"
                        rateStatus={true}
                        starI={true}
                    />
                </Col>
                <Col lg={4} md={12}>
                    <CardStyled className="hot-products-height">
                        <Heading>Hot products</Heading>
                        <HotProduct
                            img={dish}
                            pName="Udon tom yum with shrimps and mussels"
                            price="$ 2.90"
                            number="12"
                        />
                        <HotProduct
                            img={dish}
                            pName="Udon tom yum with shrimps and mussels"
                            price="$ 2.90"
                            number="12"
                        />
                        <HotProduct
                            img={dish}
                            pName="Udon tom yum with shrimps and mussels"
                            price="$ 2.90"
                            number="12"
                        />
                        <HotProduct
                            img={dish}
                            pName="Udon tom yum with shrimps and mussels"
                            price="$ 2.90"
                            number="12"
                        />
                        <HotProduct
                            img={dish}
                            pName="Udon tom yum with shrimps and mussels"
                            price="$ 2.90"
                            number="12"
                        />
                    </CardStyled>
                </Col>
                <Col lg={8} md={12}>
                    <CardStyled>
                        <Heading>Revenue overview</Heading>
                    </CardStyled>
                </Col>
            </Row>
        </>
    )
}

export default Statistics