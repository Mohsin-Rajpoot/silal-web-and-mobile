import React from "react";
import "../../components/rsuite.css";
import { DateRangePicker } from "rsuite";
import Nav from "../../components/home/Nav";
import { Row, Col } from "react-bootstrap";
import { RestaurantHeading } from "../../components/UseFullElements";
import {
  RestaurantCard,
  HotProduct,
  StatisticGraph,
} from "../../components/home/Components";
import { CardStyled, Heading } from "../../components/Style";
import {
  salesIcon,
  cartIcon,
  bellIcon,
  ratingIcon,
  dish,
  CalendarIcon,
} from "../../components/AllImages";

const Statistics = ({ setSideBar, sideBar }) => {
  return (
    <>
      <Nav setSideBar={setSideBar} sideBar={sideBar} />
      <div className="between">
        <RestaurantHeading
          heading="Restaurant’s name"
          hours="Peak Hours 12 AM - 2 PM"
          location="8502 Preston Rd. Inglewood"
        />
        <DateRangePicker
          className="home-range"
          showOneCalendar
          placement="bottomRight"
          format="dd MMMM yy"
          placeholder="dd mm yy"
          character="&#160;&#160;-&#160;&#160;"
          caretAs={CalendarIcon}
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
            heading="Total Rating"
            number="4.8"
            rate="+ 0.9%"
            rateStatus={true}
            starI={true}
          />
        </Col>
        <Col lg={4} md={12}>
          <CardStyled className="dasboard-card-height">
            <div className="between">
              <Heading>Hot products</Heading>
              <div className="mb-3">
                <DateRangePicker
                  className="home-range"
                  showOneCalendar
                  placement="bottomRight"
                  format="dd MMMM yy"
                  placeholder="dd mm yy"
                  character="&#160;&#160;-&#160;&#160;"
                  caretAs={CalendarIcon}
                />
              </div>
            </div>
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
          <CardStyled className="dasboard-card-height">
            {/* <Heading>Revenue overview</Heading> */}
            <StatisticGraph />
          </CardStyled>
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
