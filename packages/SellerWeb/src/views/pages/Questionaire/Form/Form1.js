import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FormInput from "../../settings/Common/FormInput";
import { motion } from "framer-motion";
import FormControl from "../../../components/auth/FormControl/FormControl";
import { Icon } from "@iconify/react";

function Form1() {
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
  const animate1 = {
    x: [-100, 0],
    opacity: [0, 1],
    transition: { duration: 1 },
  };
  return (
    <Form1Styled>
      <div className="d-flex justify-content-center">
        {/* <div className="col-lg-2"></div> */}
        <div className="col-lg-8">
          <div className="col-lg-5 bar">
            <FormInput
              label={"Business name"}
              type={"text"}
              placeholder={"Enter name"}
              asterik={"*"}
            />
          </div>
          <div className="col-lg-12 bar">
            <FormInput
              label={"Business owner/manager name"}
              type={"text"}
              placeholder={"Enter full name"}
              asterik={"*"}
            />
          </div>
          <div className="col-lg-12 bar">
            <motion.div className="form-control-mobile" animate={animate1}>
              <FormControl labelValue="Phone Number" htmlFor="PhoneNumber" />
              <div className="row w-100 text-center">
                <div className="col1 col-lg-2">
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
                <div className="col2 col-lg-10">
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

          <div className="col-lg-12 bar">
            <FormInput
              label={"Business email"}
              type={"text"}
              placeholder={"Email Address"}
              asterik={"*"}
            />
          </div>
          <div className="col-lg-12 bar">
            <FormInput
              label={"Business profile on social media "}
              type={"text"}
              placeholder={"https://www.instagram.com/business_profile.com"}
              optional={" (optional)"}
            />
          </div>
          <div className="col-lg-12 bar">
            <FormInput
              label={"Another business profile on social media/website "}
              type={"text"}
              placeholder={"https://www.instagram.com/business_profile.com"}
              optional={" (optional)"}
            />
          </div>
          <div className="col-lg-12 bar">
            <FormInput
              label={"Business tax ID"}
              type={"text"}
              placeholder={"000-000-000"}
              asterik={"*"}
            />
          </div>
        </div>
      </div>
    </Form1Styled>
  );
}

export default Form1;
const Form1Styled = styled.div`
  padding: 20px;
  // border: 2px solid red;
  .row {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    margin-left: 0px;
  }
  .bar {
    margin: 10px;
  }
`;
