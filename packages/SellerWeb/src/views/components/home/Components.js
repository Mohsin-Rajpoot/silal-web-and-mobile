import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Button, Textarea } from "../../components/Style";
import { star, Close, Clock } from "../AllImages";
import Graph from "./Graph";

const StatisticGraph = () => {
  return (
    <StatisticGraphStyle>
      <div className="header">
        <div className="title">Revenue overview</div>
        <div className="button">Detailed info</div>
      </div>
      <div className="body">
        <Graph />
      </div>
    </StatisticGraphStyle>
  );
};

const StatisticGraphStyle = styled.div`
  .header {
    display: flex;
    justify-content: space-between;

    .title {
      font-family: "Poppins";
      font-weight: 700;
      font-size: 18px;
      color: #002733;
    }

    .button {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 13px;
      color: #05ae4b;
      background: rgba(90, 179, 168, 0.15);
      border-radius: 5px;
      padding: 10px;
    }
  }

  .body {
  }
`;

const RestaurantCard = ({ icon, heading, number, rate, rateStatus, starI }) => {
  return (
    <RestaurantCardStyled>
      <div className="icon center">
        <img src={icon} alt="icon" />
      </div>
      <div>
        <div className="d-flex align-items-start">
          <h2 className="f-medium lato">{heading}</h2>
          {rate && (
            <span
              className={`percentage f-medium ${rateStatus ? "green" : "red"}`}
            >
              {rate}
            </span>
          )}
        </div>
        <div className="d-flex">
          {starI && <img src={star} alt="star" className="star" />}
          <h3 className="f-semibold dark-clr">{number}</h3>
        </div>
      </div>
    </RestaurantCardStyled>
  );
};

const HotProduct = ({ img, pName, price, number }) => {
  return (
    <HotProductStyled>
      <img src={img} alt="dish" />
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="flex-1">
          <h2 className="dark-clr lato">{pName}</h2>
          <h3 className="dark-clr f-semibold">{price}</h3>
        </div>
        <span className="center">{number}</span>
      </div>
    </HotProductStyled>
  );
};

const Review = ({ reviewBy, rating, time, text, order }) => {
  const [textarea, setTextarea] = useState(false);
  const showTextarea = () => {
    setTextarea(true);
  };

  return (
    <ReviewStyled>
      <Row>
        <Col lg={2} md={3} sm={12}>
          <h1 className="dark-clr lato">{reviewBy}</h1>
        </Col>
        <Col lg={10} md={9} sm={12}>
          <div className="between pb-2">
            <div className="d-flex">
              <h2>4.0</h2>
              <ReactStars
                size={24}
                count={5}
                // value={rating}
                edit={true}
                activeColor="#FFC400"
              />
            </div>
            <h6 className="time">{time}</h6>
          </div>
          <p className="dark-clr lato f-regular ">{text}</p>
          <div className="order">
            <h3 className="dark-clr m-0 lato">
              Order: <span>{order}</span>
            </h3>
          </div>
          {textarea && <Textarea placeholder="Type here..."></Textarea>}
          <div className="between">
            {textarea && <Button className="reply">Submit</Button>}
            {textarea ? (
              ""
            ) : (
              <Button className="reply" onClick={showTextarea}>
                Reply
              </Button>
            )}
            <button className="contact-support">Contact support</button>
          </div>
        </Col>
      </Row>
    </ReviewStyled>
  );
};

const RestaurantCardStyled = styled.div`
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
  border-radius: 5px;
  padding: 20px 15px;
  max-height: 100%;
  margin-bottom: 20px;
  transition: 0.2s all;
  &:hover {
    transform: translateY(-8px);
  }
  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgba(90, 179, 168, 0.15);
    margin-right: 14px;
  }
  h2 {
    color: #4c6870;
    margin: 0 10px 10px 0;
    font-size: 13px;
  }
  h3 {
    font-size: 23px;
    margin: 0;
  }
  .percentage {
    border-radius: 5px;
    font-size: 11px;
    padding: 2px 7px;
    &.green {
      background: #e3fcef;
      color: #36b37e;
    }
    &.red {
      color: #ff5630;
      background: #ffebe6;
    }
  }
  .star {
    width: 22px;
    margin-right: 7px;
    margin-bottom: 2px;
  }
`;

const HotProductStyled = styled.div`
  display: flex;
  align-items: flex-start;
  background: #f4f7f8;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
  .center {
    background-color: #cdefdb;
    color: #05ae4b;
  }
  img {
    border-radius: 5px;
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 10px;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  span {
    background-color: var(--theme-clr);
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;

const ReviewStyled = styled.div`
  border-bottom: 1px solid rgba(0, 39, 51, 0.08);
  padding: 20px 0;
  width: 100%;
  display: flex;
  .row {
    width: 100%;
  }
  h1 {
    font-weight: 700;
    font-size: 13px;
  }
  h2 {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    margin: 2px 7px 10px 0;
  }
  .time {
    font-weight: 500;
    font-size: 13px;
    text-align: right;
    color: #4c6870;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 13px;
    margin-bottom: 10px;
  }
  .order {
    background: #f2f2f2;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px 15px;
    h3 {
      font-weight: 600;
      font-size: 13px;
      line-height: 1.3;
    }
    span {
      color: #9fadb1;
    }
  }
  .contact-support {
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 13px;
    color: #4c6870;
  }
  .reply {
    width: 148px;
  }
  textarea {
    height: 56px;
    margin-bottom: 0;
  }
`;

const ReviewOverviewText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 39, 51, 0.08);
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: #002733;
    margin: 0;
  }
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 13px;
    text-align: right;
    color: #000000;
    margin: 0;
  }
`;

const NotificationMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 200;
  width: 351px;
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0px 21px 50px -7px rgba(0, 39, 51, 0.14);
  border-radius: 5px;
  padding: 30px 20px 0 20px;
  transition: 0.2s ease-in;
  transform: translateY(50px);
  opacity: 0;
  pointer-events: none;
  &.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  .head {
    display: flex;
    align-items: center;
    font-family: "Lato";
    span {
      padding: 5px 10px;
      height: 24px;
      background: #05ae4b;
      border-radius: 5px;
      margin: 0 0 0 8px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: -0.408px;
    }
  }
  h6 {
    font-family: "Lato";
    font-size: 13px;
    line-height: 150%;
    letter-spacing: 0.35px;
    color: #4c6870;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const NotificationBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &.active {
    background: #4c6870;
    svg {
      path {
        fill: white;
      }
    }
  }
  &.new {
    &::after {
      content: "";
      position: absolute;
      top: 9px;
      right: 12px;
      background: #05ae4b;
      border-radius: 50%;
      width: 6px;
      height: 6px;
    }
  }
`;

const Notification = ({ Icon, iconClr, status, title, descp, time }) => {
  return (
    <NotificationStyled className={status}>
      <div className={`center icon ${iconClr}`}>
        <Icon />
      </div>
      <div className="flex-1">
        <div className="between">
          <h1 className="poppins f-semibold mb-0 mr-1">{title}</h1>
          <button className="del border-0 bg-transparent">
            <Close />
          </button>
        </div>
        <p className="lato f-medium">{descp}</p>
        <div className="d-flex align-items-center">
          <Clock className="clock" />
          <span className="lato f-medium">{time}</span>
        </div>
      </div>
    </NotificationStyled>
  );
};

const NotificationStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 39, 51, 0.08);
  &:last-of-type {
    border-bottom: 0;
  }
  .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
    &.blue {
      background: rgba(0, 101, 255, 0.2);
    }
    &.purple {
      background: #8777d9;
    }
  }
  .between {
    margin-bottom: 4px;
  }
  h1 {
    font-size: 13px;
    line-height: 130%;
    color: #002733;
  }
  .del {
    svg {
      width: 10px;
      path {
        fill: #ccd4d6;
      }
    }
  }
  p {
    font-size: 13px;
    line-height: 130%;
    color: #002733;
    margin: 0 0 10px 0;
  }
  .clock {
    margin-right: 3px;
    width: 17px;
    height: 17px;
    path {
      fill: #ccd4d6;
    }
  }
  span {
    font-size: 11px;
    line-height: 130%;
    letter-spacing: 0.35px;
    color: #ccd4d6;
  }
  &.old {
    .icon {
      background-color: #f1f2f3;
      svg {
        path {
          fill: #4c687080;
        }
      }
    }
  }
`;

export {
  RestaurantCard,
  HotProduct,
  Review,
  ReviewOverviewText,
  NotificationMenu,
  NotificationBtn,
  Notification,
  StatisticGraph,
};
