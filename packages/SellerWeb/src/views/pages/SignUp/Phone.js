import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import FormControl from "../../components/auth/FormControl/FormControl";
import Gobackbuton from "../../components/auth/Gobackbutton/Gobackbuton";

function Loginpage() {
  const [formValue, setFormValue] = useState("");
  const options = [
    {
      label: "RU + 7",
      value: "ru",
      default: true,
    },
    {
      label: "BD + 7",
      value: "bd",
      default: false,
    },
    {
      label: "PK + 7",
      value: "pk",
      default: false,
    },
  ];
  // animation phone number field
  const animate1 = {
    x: [-100, 0],
    opacity: [0, 1],
    transition: { duration: 1 },
  };

  // animation email input field

  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="text-center">
        <div className="top-row">
          <div className="title">
            <h1>Sign Up</h1>
          </div>
          <Button className="btn2">Phone Number</Button>
          <div className="form">
            <motion.div className="form-control-mobile" animate={animate1}>
              <FormControl labelValue="Phone Number" htmlFor="PhoneNumber" />
              <div className="row ">
                <div className="col1 col">
                  <FormControl
                    style={{ border: "none", padding: "5px" }}
                    select={true}
                    options={options}
                    dropdownIcon={
                      <Icon
                        icon="ant-design:caret-down-filled"
                        color="#05AE4B"
                      />
                    }
                  />
                </div>
                <div className="col2 col">
                  <FormControl
                    style={{ border: "none" }}
                    input={true}
                    inputValue={formValue}
                    type="text"
                    htmlFor="PhoneNumber"
                    onChange={(e) => setFormValue(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Link to="/otp">
          <Button className="btn3 next">Next</Button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Loginpage;

const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;
  font-family: "Lato", sans-serif;
  position: relative;
  margin: auto;
  .top-row {
    .title {
      padding: 50px 0;
      h1 {
        text-align: center;
        font-size: 25px;
        font-weight: bold;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .form-control-mobile {
        margin-top: 20px;
        label {
          font-size: 15px;
          font-weight: 700;
          color: #4c6870;
        }
        .row {
          border: 1px solid #ededed;
          border-radius:10px;
          margin-top:5px;
          display: flex;ededed
          justify-content: center;
          align-items: center;
          .col1 {
            max-width: 150px;
            width: 100%;
            .value-container {
              border-right: none;
              border-radius: 5px 0px 0px 5px;
            }
          }
          .col2 {
            width: 100%;
            input {
              border-radius: 0px 5px 5px 0px;
            }
          }
        }
      }
      /* email form design  */
      .form-control-email {
        .row {
          margin-top: 20px;
          label {
            font-size: 15px;
            font-weight: 700;
            color: #4c6870;
          }
        }
      }
    }
  }

  .next {
    margin-top: 200px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 60%;
  }
  .btn3 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 80%;
    margin-top: 300px;
  }
`;
