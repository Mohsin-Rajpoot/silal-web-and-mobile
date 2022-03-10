import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { Row, Col } from 'react-bootstrap'
import Nav from "../../components/home/Nav"
import { RestaurantHeading } from '../../components/UseFullElements'
import {
    Review,
    ReviewOverviewText,
} from '../../components/home/Components'
import {
    CardStyled,
    Heading
} from '../../components/Style'
import {
    CalendarIcon
} from '../../components/AllImages'


const Reviews = ({ setSideBar }) => {
    const [dateValue, dateOnChange] = useState(new Date());

    return (
        <>
            <Nav setSideBar={setSideBar} />
            <RestaurantHeading
                heading="Restaurant’s name"
                hours="Peak Hours 12 AM - 14 PM"
                location="8502 Preston Rd. Inglewood"
            />
            <Row>
                <Col md={9} sm={12}>
                    <CardStyled>
                        <div className="between">
                            <Heading>Reviews</Heading>
                            <DatePicker
                                onChange={dateOnChange}
                                value={dateValue}
                                calendarIcon={<CalendarIcon />}
                                clearIcon={null}
                            />
                        </div>
                        <Review
                            reviewBy="Ursula Landerskape"
                            rating={4.0}
                            time="14:38"
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                            order="Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie"
                        />
                        <Review
                            reviewBy="Ursula Landerskape"
                            rating={4.0}
                            time="14:38"
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                            order="Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie"
                        />
                    </CardStyled>
                </Col>
                <Col md={3} sm={12}>
                    <CardStyled>
                        <Heading>Reviews overview</Heading>
                        <ReviewOverviewText>
                            <h2>Total </h2>
                            <h3>189</h3>
                        </ReviewOverviewText>
                        <ReviewOverviewText>
                            <h2>Answered </h2>
                            <h3>160</h3>
                        </ReviewOverviewText>
                        <ReviewOverviewText>
                            <h2>Total raiting </h2>
                            <h3>4.8</h3>
                        </ReviewOverviewText>
                    </CardStyled>
                </Col>
            </Row>
        </>
    )
}

export default Reviews