import React, { useState } from "react";
import Wrapper from "./Loginpage.styled";
import { Link } from "react-router-dom";
import Button from "../../../components/auth/Button/Button";
import Linktag from "../../../components/auth/Linktag/Linktag";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import FormControl from "../../../components/auth/FormControl/FormControl";
import Gobackbuton from "../../../components/auth/Gobackbutton/Gobackbuton";

function Loginpage() {
  const [formValue, setFormValue] = useState("");
  const [showNumForm, setShowNumForm] = useState(true);
  const [showPass, setShowPass] = useState(false);
  // select options
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
  const animate2 = {
    y: [100, 0],
    opacity: [0, 1],
    transition: { duration: 1 },
  };

  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="top-row">
        <div className="title">
          <h1>Log In</h1>
        </div>
        <motion.div className="buttonGroups" animate={{ y: [-20, 0] }}>
          <Button
            text="Phone Number"
            primary={showNumForm ? true : false}
            textcolor={showNumForm ? true : false}
            onClick={() => setShowNumForm(true)}
          />
          <Button
            text="Email"
            primary={showNumForm ? false : true}
            textcolor={showNumForm ? false : true}
            onClick={() => setShowNumForm(false)}
          />
        </motion.div>
        <div className="form">
          {showNumForm ? (
            <motion.div className="form-control-mobile" animate={animate1}>
              <FormControl labelValue="Phone Number" htmlFor="PhoneNumber" />
              <div className="row">
                <div className="col1">
                  <FormControl
                    select={true}
                    options={options}
                    dropdownIcon={
                      <Icon
                        icon="ant-design:caret-down-filled"
                        color="#5ab3a8"
                      />
                    }
                  />
                </div>
                <div className="col2">
                  <FormControl
                    input={true}
                    inputValue={formValue}
                    type="text"
                    htmlFor="PhoneNumber"
                    onChange={(e) => setFormValue(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="form-control-email">
              <motion.div className="row" animate={animate2}>
                <FormControl
                  labelValue="Email"
                  htmlFor="email"
                  input={true}
                  inputValue={formValue}
                  type="text"
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="email.example@gmail.com"
                />
              </motion.div>
              <motion.div className="row" animate={animate2}>
                <div className="password">
                  <FormControl
                    labelValue="Password"
                    htmlFor="password"
                    input={true}
                    inputValue={formValue}
                    type={showPass ? "text" : "password"}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Enter password"
                    passwordType={true}
                    onClick={() => setShowPass(!showPass)}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <div className="bottom-row">
        <div className="form-submit">
          <Linktag
            text={showNumForm ? "Continue" : "Log in"}
            primary={true}
            textcolor={true}
            blockitem={true}
            to={showNumForm ? "otp" : "verification"}
          />
        </div>
        <div className="forgot-pass-text">
          <p>
            Trouble signing in?
            <Link to="resetpassword">Forgot password</Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Loginpage;
